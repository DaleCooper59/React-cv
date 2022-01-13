import React, {useState} from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import {FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";


const Sidebar = () => {
    
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

    return (
        <>
      <div id="header">  
     
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>

          <SidebarContent>
            
             
            <Menu iconShape="square">
                
                <MenuItem icon={<FaList />}>
                <Link
                activeClass="active"
                to="presentation"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >Présentation
              </Link>
                </MenuItem> 

               
                <MenuItem icon={<FaRegHeart />}>
                <Link
                activeClass="active"
                to="competences"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Compétences
              </Link>
                </MenuItem> 
               
                <MenuItem icon={<FaRegHeart />}>
                <Link
                activeClass="active"
                to="experiences"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Expériences
              </Link>
                </MenuItem>

                <MenuItem icon={<RiPencilLine />}> 
                <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contacts
              </Link>
                </MenuItem>
               
            </Menu>     
             
          </SidebarContent>
          
          <SidebarFooter>
            <Menu iconShape="circle">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
    );
};

export default Sidebar;
