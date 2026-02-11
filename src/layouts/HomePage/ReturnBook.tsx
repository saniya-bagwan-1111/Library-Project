import React from "react";

export const ReturnBook=()=>{
    return(
         <div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'>
                                <div className='text-center'>
                                    <img src={require('../../Images/BooksImages/book-luv2code-1000.png')}
                                        width='151' height='233'
                                        alt='book' />
                                    <h6 className='mt-2'>niya</h6>
                                    <p>React app 3</p>
                                    <a className='btn main-color text-white' href='#'>Reserve</a>
                                </div>
                            </div>
    );
}