import React from 'react';
import { Link } from "react-router-dom";
import logo from '.././logo.svg';
import '.././App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from 'react-redux';


const Header = (props) => {

const MyData =  useSelector((dataReducer)=>dataReducer.dataReducer.MyData)
console.log("MyDataaa",MyData)
    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <header className="App-header">
                     <img src={logo} className="App-logo" alt="logo" />
                <Link to="/" className="navbar-brand">{props.title}</Link>
            </header>
          </nav>
        </div>
    );
}

export default Header;
