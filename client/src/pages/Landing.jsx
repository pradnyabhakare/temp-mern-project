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
          Job <span>Tracking</span> App
        </h1>
        <p>
          I'm baby artisan big mood af mixtape. Kickstarter tonx JOMO unicorn. Vice la croix VHS succulents typewriter tumblr, taxidermy meditation. Vibecession wayfarers banjo +1. Pork belly 3 wolf moon dreamcatcher neutral milk hotel church-key schlitz snackwave. Health goth offal YOLO, tonx art party put a bird on it kale chips la croix poutine bitters hot chicken cray fam raw denim intelligentsia.
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