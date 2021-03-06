import React, {useState} from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import logo64 from '../img/ico/CD_white64-removebg-preview.ico';
import logo128 from '../img/128powl2.ico';

//import icons from react icons
import { IconContext } from "react-icons";
import { GrUser, GrContact } from "react-icons/gr";
import { GiSkills, GiBookmark } from "react-icons/gi";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import ScrollToTop from './ScrollToTop';


const Sidebar = () => {
    
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false);    
    
    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconHover = () => {
    //condition checking to change state from true to false and vice versa
    setTimeout(() => {
      let header = document.getElementsByClassName('logotext')[0].parentNode;
      let topHeader = document.getElementById('header');
      
     if(menuCollapse ){
       setMenuCollapse(false);
       header.classList.remove('pro-sidebar-header');
       topHeader.style.zIndex= '1000';
     }else{
       setMenuCollapse(true); 
       header.classList.add('pro-sidebar-header');
       header.parentNode.addEventListener('mouseleave', e =>{
         setMenuCollapse(true);
         header.classList.add('pro-sidebar-header');
         topHeader.style.zIndex = '1';
       })
     }
    }, 300);
    
    };


    return (
        <>
      <div id="header">  
     
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
             {menuCollapse ? <img  src={logo64} alt="logo" />
           : <img  src={logo128} alt="Biglogo" />}
            </div>
            <div className="closemenu" onMouseEnter={menuIconHover}>
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>

          <SidebarContent>
            
             
            <Menu iconShape="circle">
               
                <MenuItem icon={<IconContext.Provider value={{ style: { color: 'white' } }}>
                  <GrUser/></IconContext.Provider>}>
                <Link 
                activeClass="active"
                to="presentation"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                title='Pr??sentation'
              >Pr??sentation
              </Link>
                </MenuItem> 

               
                <MenuItem icon={<GiSkills />}>
                <Link
                activeClass="active"
                to="competences"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                title='Comp??tences'
              >
                Comp??tences
              </Link>
                </MenuItem> 
               
                <MenuItem icon={<GiBookmark />}>
                <Link
                activeClass="active"
                to="experiences"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                title='Exp??riences'
              >
                Exp??riences
              </Link>
                </MenuItem>

                <MenuItem icon={<GrContact />}> 
                <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                title='Contacts'
              >
                Contacts
              </Link>
                </MenuItem>
               
            </Menu>     
             
          </SidebarContent>
          
          <SidebarFooter>
            <Menu iconShape="circle">
             
               <ScrollToTop />
             
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
    );
};

export default Sidebar;
