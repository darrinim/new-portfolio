import React from 'react';
import './header.css';
import { Route, Switch, Link } from 'react-router-dom';

const Header = () => {

  return(
    <div className="headContainer">
    <a target= "blank" href="https://www.linkedin.com/in/darrin-im/"><i class="fab fa-linkedin fa-2x"></i></a>
    <a target= "blank" href="https://github.com/darrinim"><i class="fab fa-github-square fa-2x"></i></a>
    <a><i class="fas fa-envelope fa-2x"></i></a>
    <a><i class="fas fa-file fa-2x"></i></a>
    </div>
  )
}


export default Header;
