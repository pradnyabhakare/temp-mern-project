import React from 'react';
import Wrapper from '../assets/wrappers/Navbar';
import { FaAlignLeft } from 'react-icons/fa';
import Logo from './Logo';
import { useDashboardContext } from '../pages/DashboardLayout';
import LogoutContainer from './LogoutContainer';
import Themetoggle from './Themetoggle';

const NavigationBar = () => {
  const { toggleSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div className='nav-center'>
        <button type='button' className='toggle-btn' onClick={toggleSidebar}>
          <FaAlignLeft/> 
        </button>
        <div>
          <Logo/>
          <h4 className="logo-text">Dashboard</h4>
        </div>
        <div className='btn-container'>
          <Themetoggle />
          <LogoutContainer/>
        </div>
      </div>
    </Wrapper>
  );
};

export default NavigationBar