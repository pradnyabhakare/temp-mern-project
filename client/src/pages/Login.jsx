import React from 'react'
import { Logo, FormRow, SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import logo from '../assets/images/logo.svg';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import { Form, useNavigate, redirect, useActionData, Link } from 'react-router-dom';

export const action = async ({ request })=>{
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const errors = { msg: '' };
   if (data.password.length < 3) {
    errors.msg = 'password too short';
    return errors;
  }
  try {
    await customFetch.post('/auth/login', data);
    toast.success('Login successful');
    return redirect('/dashboard');
  } catch (error) {
    // toast.error(error?.response?.data?.msg);
    errors.msg = error.response.data.msg;
    return error;
  }
}
const Login = () => {
  const navigate = useNavigate();
  const loginDemoUser = async () => {
  const data = {
      email: 'test@test.com',
      password: 'secret123',
    };
  try {
      await customFetch.post('/auth/login', data);
      toast.success('Take a test drive');
      navigate('/dashboard');
  } catch (error) {
      toast.error(error?.response?.data?.msg);
  }
  };

  const errors = useActionData();
  return (
    <Wrapper>
      <Form method ='post' className='form'>
            <img src={logo} alt='Jobify' className='logo'/>
            <h4>Login</h4>
            {errors && <p style={{ color: 'red' }}>{errors.msg}</p>}

            <FormRow type='email' name='email' />
            <FormRow type='password' name='password' /> 
      
            <SubmitBtn formBtn />
            
            <button type='button' className='btn btn-block' onClick={loginDemoUser}>
               Explore the app
            </button>
              <p>
                Not a member yet?
                <Link to='/register' className='member-btn'>
                  Register
                </Link>
              </p>
          </Form>
    </Wrapper>
  )
};
export default Login;
