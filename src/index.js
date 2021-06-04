import React from 'react';
import ReactDOM from 'react-dom';

//import reportWebVitals from './reportWebVitals';

import Pagemaster from './components/Pagemaster';
import App from './components/App';
import SideMenu from './components/SideMenu';
import Mainheader from './components/Mainheader';
import Mainfooter from './components/Mainfooter';
import Bottomup from './components/Bottomup';
import ShowModal from './components/ShowModal';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <Pagemaster />
    <ToastContainer newestOnTop={true} style={{top:'4em'}}/>
  </React.StrictMode>,
  document.getElementById('pagemaster')
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <SideMenu />
  </React.StrictMode>,
  document.getElementById('mainmenu')
);

ReactDOM.render(
  <React.StrictMode>
    <Mainheader />
  </React.StrictMode>,
  document.getElementById('mainheader')
);

ReactDOM.render(
  <React.StrictMode>
    <Mainfooter />
  </React.StrictMode>,
  document.getElementById('mainfooter')
);

ReactDOM.render(
  <React.StrictMode>
    <Bottomup />
  </React.StrictMode>,
  document.getElementById('bottomup')
);

ReactDOM.render(
  <React.StrictMode>
    <ShowModal />
  </React.StrictMode>,
  document.getElementById('mainmodal')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
