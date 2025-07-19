import React, { createContext, useContext, useState } from 'react'
import { BigSideBar, SmallSideBar, NavigationBar, Loading } from '../components';
import Wrapper from '../assets/wrappers/Dashboard';
import { checkDefaultTheme } from '../App';
import { Outlet, redirect, useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export const loader = async () =>{
  try {
    const { data } = await customFetch.get('/users/current-user');
    return data;
  } catch (error) {
    return redirect('/');
  }
};

const DashboardContext = createContext()

const DashboardLayout = ({ isDarkThemeEnabled }) => {
  const { user } = useLoaderData();
  const navigate = useNavigate();

  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  const [showSidebar, setShowSidebar] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeEnabled);

  const toggleDarkTheme = () =>
  {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle('dark-theme', newDarkTheme);
    localStorage.setItem('dark-theme', newDarkTheme)
  };

  const toggleSidebar = () =>{
    setShowSidebar(!showSidebar);
  };

  const logoutUser = (async () => {
    navigate('/');
    await customFetch.get('auth/logout');
    toast.success('Logging out...')
  });

  return (
    <DashboardContext.Provider value={{user, showSidebar, isDarkTheme, toggleDarkTheme, toggleSidebar, logoutUser}}>
    <Wrapper>
      <main className="dashboard">
        <BigSideBar/>
        <SmallSideBar/>
        <div>
          <NavigationBar/>
          <div className="dashboard-page">
            {isPageLoading ? <Loading/> : <Outlet context={{user}}/>}
          </div>
        </div>
      </main>
    </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext)
export default DashboardLayout;
