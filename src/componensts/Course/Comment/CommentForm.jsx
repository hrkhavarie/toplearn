/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
const CommentForm = () => {
    return ( 

       <div>
            <header><h3> نظرات کاربران </h3></header>
            <div className="inner">
            <form>
                <div className="row">
                    <div className="col-md-4 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="نام و نام خانوادگی"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="ایمیل"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="شماره تماس"/>
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-12 col-xs-12">
                        <div className="form-group">
                            <textarea className="form-control" placeholder="متن نظر"></textarea>
                        </div>
                        <div className="row">
                            <div className="col-md-8 col-sm-7 col-xs-7">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="کد امنیتی"/>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-5 col-xs-5">
                                <img src="images/captcha.jpg"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <button type="submit" className="btn btn-success"> ثبت دیدگاه </button>
                    </div>
                </div>
            </form>
            </div>

          
        
       </div>
     );
}
 
export default CommentForm;