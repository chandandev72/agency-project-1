import React from 'react';
import './Banner.css'
import bannerImage from '../../../assets/images/Rectangle.png'

const Banner = () => {
    return (
        <div className='banner-main'>
            <div className="banner-items left-side">     
               <div className='text-box'>
                
               <h1>Grow your brand <br/>
                 through digital</h1>

              <p>If the path is beautiful, let us not ask where it leads. my religion is very simple. <br />my religion is kindness. each of us has within our power the ability to disrupt</p>

                  <button> learn more </button>

               </div>
            </div>

            <div className="banner-items">
             <img src={bannerImage} alt="" />
            </div>
            
        </div>
    );
};

export default Banner;