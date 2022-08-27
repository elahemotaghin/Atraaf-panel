import Root from "./Components/sharedComponents/Root";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Root />
          <ToastContainer rtl/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
