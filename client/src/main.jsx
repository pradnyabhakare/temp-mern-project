import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import customFetch from './utils/customFetch';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// const data = await customFetch.get('/test');
// console.log(data);


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//      <ToastContainer position='top-center' />
//   </React.StrictMode>,
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
     <ToastContainer position='top-center' />
  </StrictMode>,
)
