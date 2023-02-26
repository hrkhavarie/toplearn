import React from 'react';
import {Routes, Route } from 'react-router-dom';

import MainLayout from './../componensts/Layouts/MainLayout';
import Login from './../componensts/Login/login';
import Register from './../componensts/Register/Register';
import Archive from '../componensts/Course/Archive';
import CourseContent from '../componensts/Course/CourseDetails/CourseContent';
import CourseList from './../componensts/Course/CourseList';


const Toplearn = (props) => {

   
    return ( 
        <MainLayout>
            <Routes>

                <Route path='/login' element={<Login/>} />
                <Route path='/Register' element={<Register/>} />
                <Route path='/Archive' element={<Archive/>} />
                <Route path='CourseContent' element={<CourseContent/>} />
                <Route path='/' element={<CourseList/>} />
               

            </Routes>
            
            
        </MainLayout>

   
     );
}
 
export default Toplearn;