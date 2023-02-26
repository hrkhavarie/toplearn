import React , {Fragment} from 'react';
import {  useLocation  } from 'react-router';

import TopNav from './../Navs/TopNav';
import Header from './../common/Header';
import MainNav from './../Navs/MainNav';
import Footer from './../common/Footer';



const MainLayout = (props) => {

    const params1 = useLocation();
    console.log(params1);
    
    return ( 
        <>

            <div className="landing-layer">
                <div className="container">
                   <TopNav />

                  {
                    params1.pathname === "/" ?  <Header /> : null
                  }
                  
                   
                </div>
            </div>          
            <MainNav/>  
            <main id="home-page">
                <div className="container">
                    {props.children}
                </div>
            </main>
    

        <Footer/>

        </>
     );
}
 
export default MainLayout;