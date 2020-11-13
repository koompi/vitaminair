import styled from 'styled-components'
import Router from 'next/router'
import BackgroundVdo from './components/BackgroundVdo'
import Meta from './components/layouts/Meta'
import Header from './components/layouts/Header'
import Navsmall  from './components/layouts/Navsmall'
import Nav from './components/layouts/NavIndex';
import Project from './components/Projects'
import Partner from './components/Partners'
import Contact from './components/Contact'
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => {
    NProgress.start();
  };
  Router.onRouteChangeComplete = () => {
    NProgress.done();
  };
  
  Router.onRouteChangeError = () => {
    NProgress.done();
  };


export const NavIndex = styled.div`
  width: 100%;
  position: absolute;
  z-index: 1;
`
export const NavMove = styled.div`
   padding-top: 2%;
   float:right  ;
   a{
     color: white;
   }
`

const MobileStyled = styled.div`
    background-color: black;
`
export default function Home() {

  return (
      <div className={styled.container}>      
          <Meta />
          <Navsmall />
          <NavIndex>
              <NavMove>
                 <Nav />  
              </NavMove>
          <section id="top"></section>
          </NavIndex>     
          <BackgroundVdo /> 
          <section id="projects"></section>
          <Project />
          <Partner />
          <Contact />
          
      </div> 
  )

  
}

