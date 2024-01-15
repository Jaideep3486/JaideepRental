import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice'; // import slice

import { useDispatch, useSelector } from 'react-redux'; //import methods from redux
import OAuth from '../components/OAuth';

export default function SignIn() {
  const [formData, setFormData] = useState({});

  const { loading, error } = useSelector((state) => state.user); // the name of the slice is user in reducer

  //const [error, setError] = useState(false); // defining a state for error

  //const [loading, setLoading] = useState(false); // this is for loading state management

  const navigate = useNavigate();

  const dispatch = useDispatch(); // Initialize redux

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart()); // before making the request we dispatch an event SignIn Start - this makes loading true

      //setLoading(true); // before trying the event , we set loading to be true and error false
      //setError(false);

      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      //console.log(data);

      //setLoading(false); // after everything is done we set loading false

      //After the request, instead of setting the loading to false, we can just say dispatch sign in success.

      if (data.success === false) {
        //setError(true);

        dispatch(signInFailure(data));
        return;
      }

      dispatch(signInSuccess(data));

      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error));
      // setLoading(false);
      // setError(true);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? 'Loading...' : 'Sign In'}
        </button>
        <OAuth />
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont Have an account?</p>
        <Link to="/sign-up">
          <span className="text-blue-500">Sign up</span>
        </Link>
      </div>
      <p className="text-red-700 mt-5">
        {error ? error.message || 'Something went wrong!' : ''}
      </p>
    </div>
  );
}
