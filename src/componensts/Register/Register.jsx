import React ,{useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Register = (props) => {
     const [fullname , setFullname] = useState('');
     const [email , setEmail] = useState('');
     const [password , setPassword] = useState('');    

     const reset = () =>{
        setFullname('');
        setEmail('');
        setPassword('');
     }


    const handleSubmit = event =>{
        event.preventDefault();

        const user = {
            fullname , 
            email , 
            password

        };
        reset();


        //Json 
       // console.log(JSON.stringify(user));
       axios.post('https://toplearnapi.ghorbany.dev/api/register' , 
       JSON.stringify(user) , {
            headers:{
                
                "content-type": "application/json"
            }
       })
       .then(response =>{
           console.log(response);
       })
       .catch(ex => console.log(ex));
       


        console.log(user);
       

    }
    return ( 
       
           
                <main className="client-page">
                
                        <div className="container-content">

                        <header><h2> عضویت در سایت </h2></header>

                        <div className="form-layer">

                            <form  onSubmit={handleSubmit}>

                                <div className="input-group">
                                    <span className="input-group-addon" id="username"><i className="zmdi zmdi-account"></i></span>
                                    <input 
                                            type="text"
                                            className="form-control"
                                            placeholder="نام و نام خانوادگی" 
                                            aria-describedby="username" 
                                            value={fullname}
                                            onChange={e=> setFullname(e.target.value)}
                                     />
                                </div>

                                <div className="input-group">
                                    <span className="input-group-addon" id="email-address"><i className="zmdi zmdi-email"></i></span>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="ایمیل" 
                                        aria-describedby="email-address"
                                        value={email}
                                        onChange={e=> setEmail(e.target.value)}
                                        />
                                </div>

                                <div className="input-group">
                                    <span className="input-group-addon" id="password"><i className="zmdi zmdi-lock"></i></span>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        placeholder="رمز عبور " 
                                        aria-describedby="password" 
                                        value={password}
                                        onChange = {e => setPassword(e.target.value)}
                                        />


                                </div>

                                <div className="accept-rules">
                                    <label><input type="checkbox" name="" />  قوانین و مقررات سایت را میپذیرم </label>
                                </div>

                                <div className="link">
                                    <NavLink href=""> <i className="zmdi zmdi-assignment"></i> قوانین و مقررات سایت ! </NavLink>
                                    <NavLink href=""> <i className="zmdi zmdi-account"></i> ورود به سایت </NavLink>
                                </div>
                                
                                <button className="btn btn-success"> عضویت در سایت </button>

                            </form>
                        </div>

                    </div>
                </main>
       

     );
}
 
export default Register;