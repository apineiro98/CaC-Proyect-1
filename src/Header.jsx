//Img - Icons
import profile from './assets/profile.png';
import user from './assets/icons/user-solid.svg'
import settings from './assets/icons/gear.svg'
import info from './assets/icons/circle-info.svg'
import logout from './assets/icons/logout.svg'

//CSS
import './Header.css'

//Components
import React, { useState, useEffect, useRef } from 'react'


function Header() {
  //Declaro la variable para poder utilizarla en el evento onClick.
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  //Uso el useEffect para ocultar el dropdown-menu cuando se hace click en el document o en los links.
  useEffect(() => {
    let handler = (e) => {
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        // console.log(e.target);
      }
    };
    document.addEventListener("mousedown", handler);

    
  })


  function DropdownItem(props) {
    return(
      <li className='dropdownItem'>
        <img src={props.img} alt="" />
        <a href="#">{props.text}</a>
      </li>
    )
  }

  return (
    <header className='header'>
      <section className='header-container'>
        <a href="index.html">
          <h1>LOGO</h1>
        </a>
        <div className="menu-container" onClick={()=>{setOpen(!open)}} ref={menuRef}>
          <div className="menu-trigger" >
            <img  src={profile} alt="" />
          </div>
          <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
            <h3><span>Usuario-1</span></h3>
            <ul>
              <DropdownItem img = {user} text = {"My Profile"} />
              <DropdownItem img = {info} text = {"About"}/>
              <DropdownItem img = {settings} text = {"Settings"}/>
              <DropdownItem img = {logout} text = {"Logout"}/>
            </ul>
          </div>
        </div>
      </section>
    </header>
  )
}

export default Header






