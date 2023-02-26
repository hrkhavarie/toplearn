import React ,{} from 'react';
import { NavLink } from 'react-router-dom';
import Course from './Course';

const  CourseList = () => {




 
    return ( 

        <section className="terms-items">
        <header>
            <h2> آخرین دوره های تاپ لرن </h2>
            <NavLink to="/Archive"> مشاهده همه دوره ها </NavLink>
        </header>
        <div className="row">

            
            
            <Course  >  </Course>
            <Course>  </Course>
            <Course>  </Course>
            <Course>  </Course>
            <Course>  </Course>
           
           
            
        </div>
    </section>

        

     );
}
 
export default CourseList;