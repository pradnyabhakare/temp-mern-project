import React from 'react'
import Wrapper from '../assets/wrappers/LandingPage';
import logo from '../assets/images/logo.svg';
import {Link} from 'react-router-dom';
import main from '../assets/images/main.svg';

const Landing = () => {
  return(
  <Wrapper>
    <nav>
      <img src={logo} alt='Jobify' className='logo'/>
    </nav>
    <div className="container page">
      <div className="info">
        <h1>
          Job <span>Logging</span> App
        </h1>
        <p>
          Kickstarter React Router meets MongoDB mixtape, brewed with a splash of Vite and Cloudinary unicorn vibes. Cookies authenticate your hustle while JWT keeps your dreams secure like a thrifted neutral milk hotel cassette in your denim jacket pocket.

Schlitz-level snackwave UX meets React Query’s hot chicken caching – pure health goth for your job tracking ecosystem. Styled Components drip like la croix bitters over minimalist dashboards, keeping your workflow raw yet intelligentsia smooth. 
        </p>
        <Link to='/register' className='btn register-link'>
          Register
        </Link>
        <Link to='/login' className='btn '>
          Login / Demo User
        </Link>
      </div>
       <img src={main} alt='job hunt' className='img main-img' />
    </div>
  </Wrapper>
);
};

export default Landing;