import React from 'react';
import CourseTeacherInfo from '../CourseTeacherInfo';
import CourseDuration from './CourseDuration';
import CourseInfo from './CourseInfo';
import CourseShare from './CourseShare';
import CourseTags from './../CourseTags';
import CourseDescription from './CourseDescription/CourseDescription';
import Comment from './../Comment/Comment';
import CoursePagintation from '../CoursePagintaion';
const CourseContent = () => {
    return ( 

        <section className="term-content">
                <header><h1> دوره آموزشی ساخت ربات تلگرام </h1></header>
                <div className="row">

                    <div className="col-md-8 col-sm-12 col-xs-12 pull-left">
                       <CourseDescription/>

                        <Comment/>
                        <CoursePagintation/>

                    </div>

                    <aside className="col-md-4 col-sm-12 col-xs-12 pull-right">
                        <CourseDuration/>
                        <CourseTeacherInfo/>    
                        <CourseInfo />
                        <CourseShare />
                        <CourseTags/>                         
    
                    </aside>
                </div>
            </section>

     );
}
 
export default CourseContent

