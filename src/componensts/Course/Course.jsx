import React , {useState} from 'react';
import { NavLink } from 'react-router-dom';




const Course = () => {

    const [stateCourse] = useState({

        Course :[
           // {title :Course.title , price : Course.price, duration:Course.duration  },
            
         {title :' آموزش HTML &CSS ' ,price : '250 هزار تومان', duration:'6:30:00' , image: 'images/pic/2.jpg' }
               
         ]
        
    
})





   

    return ( 

        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
        <article>
            <NavLink to="/CourseContent" className="img-layer"><img alt=''src={stateCourse.Course[0].image} /></NavLink>
            <h2><NavLink to="/CourseContent" >{stateCourse.Course[0].title} </NavLink></h2>
            <span> {stateCourse.Course[0].price} </span>
            <i>{stateCourse.Course[0].duration}</i>
        </article>
    </div>    

     );
}
 
export default Course;