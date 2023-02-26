import React from 'react';
import { NavLink } from 'react-router-dom';

const  Breadcrumb = () => {
    return ( 
        <div class="container">
        <nav aria-label="breadcrumb">
          <ul class="breadcrumb">
            <li class="breadcrumb-item"><NavLink href="#">تاپ لرن</NavLink></li>
            <li class="breadcrumb-item active" aria-current="page">عضویت در سایت</li>
          </ul>
        </nav>
    </div>
     );
}
 
export default Breadcrumb ;