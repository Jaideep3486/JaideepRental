import { useSelector } from 'react-redux';
import { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { app } from '../firebase';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signOut,
} from '../redux/user/userSlice';
import { Link } from 'react-router-dom';

export default function Profile() {
  const dispatch = useDispatch();

  const fileRef = useRef(null); // Inside image tag we are going to refer this file ref
  const [image, setImage] = useState(undefined); //this is the state of image change and update
  const { currentUser, loading, error } = useSelector((state) => state.user);

  const [imagePercent, setImagePercent] = useState(0); // this is a state to track image percent change
  const [imageError, setImageError] = useState(false); // to track image error

  const [formData, setFormData] = useState({}); // this is the formdata state of the page which is used for the final update

  const [updateSuccess, setUpdateSuccess] = useState(false);

  useEffect(() => {
    // Here we are utilizing the state change of image and invokiing a use affect
    if (image) {
      // if there is an image
      handleFileUpload(image); // we will upload the image
    }
  }, [image]); // if there is a image this affect will be invoked

  const handleFileUpload = async (image) => {
    // this is the function for image upload
    const storage = getStorage(app); // this app is comming from Firebase.js config file that we created earlier
    const fileName = new Date().getTime() + image.name; // this is the file name and it will be unique each time
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image); //Upload task is actually is going to upload our image based on this storage ref.
    uploadTask.on(
      'state_changed', // every byte that we are uploading we are going to track
      (snapshot) => {
        // this is the information we get
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100; // This is the progress percent feedback that we get from browser
        setImagePercent(Math.round(progress)); // here a
      },
      (error) => {
        setImageError(true);
      },
      () => {
        // when the task is done
        getDownloadURL(uploadTask.snapshot.ref).then(
          (
            downloadURL // this function returns the download URL that we get from Firebase
          ) => setFormData({ ...formData, profilePicture: downloadURL }) // once we get the download URL we will set the form data if the state change
        );
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data));
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error));
    }
  };

  const handleDeleteAccount = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error));
    }
  };

  const handleSignOut = async () => {
    try {
      await fetch('/api/auth/signout');
      dispatch(signOut());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <img
          src={formData.profilePicture || currentUser.profilePicture}
          alt="profile"
          className="h-24 w-24 self-center cursor-pointer rounded-full object-cover mt-2"
          onClick={() => fileRef.current.click()}
        />
        <p className="text-sm self-center">
          {imageError ? (
            <span className="text-red-700">
              Error uploading image (file size must be less than 2 MB)
            </span>
          ) : imagePercent > 0 && imagePercent < 100 ? (
            <span className="text-slate-700">{`Uploading: ${imagePercent} %`}</span>
          ) : imagePercent === 100 ? (
            <span className="text-green-700">Image uploaded successfully</span>
          ) : (
            ''
          )}
        </p>

        <input
          defaultValue={currentUser.username}
          type="text"
          id="username"
          placeholder="Username"
          className="bg-slate-100 rounded-lg p-3"
          onChange={handleChange}
        />
        {/* <input
          defaultValue={currentUser.email}
          type='email'
          id='email'
          placeholder='Email'
          className='bg-slate-100 rounded-lg p-3'
          onChange={handleChange}
          
        /> */}
        <input
          defaultValue={currentUser.email}
          type="email"
          id="email"
          placeholder="Email"
          className={`bg-slate-100 rounded-lg p-3 ${
            currentUser.email ? 'opacity-50' : ''
          }`}
          onChange={handleChange}
          disabled={currentUser.email ? true : false} // Disable if currentUser.email exists
          title={currentUser.email ? 'You cannot change Email!' : ''} // Tooltip message
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="bg-slate-100 rounded-lg p-3"
          onChange={handleChange}
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          {loading ? 'Loading...' : 'Update'}
        </button>
        <Link
          className="bg-green-700 text-white p-3 rounded-lg uppercase text-center hover:opacity-95"
          to={'/create-listing'}
        >
          Create Listing
        </Link>
      </form>
      <div className="flex justify-between mt-5">
        <span
          onClick={handleDeleteAccount}
          className="text-red-700 cursor-pointer"
        >
          Delete Account
        </span>
        <span onClick={handleSignOut} className="text-red-700 cursor-pointer">
          Sign out
        </span>
      </div>
      <p className="text-red-700 mt-5">
        {error ? error.message || 'Something went wrong!' : ''}
      </p>
      <p className="text-green-700 mt-5">
        {updateSuccess && 'User is updated successfully!'}
      </p>
    </div>
  );
}
