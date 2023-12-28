import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



export default function SignUp() {

  const [formData, setFormData] = useState({});// here we are difining a react state and intial value will be an empty object

  const [error, setError] = useState(false); // defining a state for error

  const [loading, setLoading] = useState(false); // this is for loading state management

  const navigate = useNavigate();

const handleChange = (e) => { // this is the function that gets invoked each time any change is done in the input fields
  setFormData({ ...formData, [e.target.id]: e.target.value });// In this statement we set the value of formdata , by first spreading the initial value and then adding the new value
  console.log(formData); //this way we can check the form data being formed
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try{

    setLoading(true); // before trying the event , we set loading to be true and error false
      setError(false);
    
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();

    console.log(data);

    setLoading(false); // after everything is done we set loading false

    if (data.success === false) {
      setError(true);
      return;
    }
    navigate('/sign-in');
  } catch (error){

    setLoading(false);
    setError(true);
  };
  



}
// Note that there is a onsubmit event which is handled at handleSubmit . this is how we post formdata
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form  onSubmit={handleSubmit} className='flex flex-col gap-4'> 
        <input
          type='text'
          placeholder='Username'
          id='username'
          className='bg-slate-100 p-3 rounded-lg'
          onChange={handleChange}
          
         
        />
        <input
          type='email'
          placeholder='Email'
          id='email'
          className='bg-slate-100 p-3 rounded-lg'
          onChange={handleChange}
          
          
        />
        <input
          type='password'
          placeholder='Password'
          id='password'
          className='bg-slate-100 p-3 rounded-lg'
          onChange={handleChange}
          
         
        />
        <button
         disabled={loading}
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
          {loading ? 'Loading...' : 'Sign Up'} 
          {/* if loading is true set label as loading else set it as Signup */}
        </button>
        
        </form>
        <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to='/sign-in'>
          <span className='text-blue-500'>Sign in</span>
        </Link>
    </div>
    <p className='text-red-700 mt-5'>{error && 'Something went wrong!'}</p>
    </div>
    
  )
}
