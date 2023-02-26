import React from 'react';
import { NavLink } from 'react-router-dom';
const CourseDuration = () => {
    return ( 

        <div className="statistics">
        <ul>
            <li>
                <span> مدت دوره </span>
                <i> 03:12:52 </i>
            </li>
            <li>
                <span> تعداد ویدیوها </span>
                <i> 16 </i>
            </li>
            <li>
                <span> تعداد دانشجوها </span>
                <i> 52 نفر </i>
            </li>
        </ul>

        <NavLink href=""> شرکت در دوره : 450.000 تومان </NavLink>
    </div>
     );
}
 
export default CourseDuration;