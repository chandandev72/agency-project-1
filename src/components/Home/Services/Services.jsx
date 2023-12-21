import React from 'react';
import './Services.css'
import monitor from '../../../assets/images/monitor.png'
import pakhi from '../../../assets/images/pakhi.png'
import book from '../../../assets/images/book.png'
import measge  from '../../../assets/images/measge.png'

const Services = () => {
    return (
        <div className='services'>
            <div className="service-items">
                <div className='service-box'>
                    <h3>Web Development</h3>
                     <p>My first thought about art, as a child, was that the artist brings something into the world that didn't exist before, and that he does it without destroying something else</p>
                     <div className='icon-box icon-1'>
                        <img src={monitor} alt="" />
                     </div>
                </div>
              
                <div className='service-box '>
                    <h3>Digital Marketing</h3>
                     <p>My first thought about art, as a child, was that the artist brings something into the world that didn't exist before, and that he does it without destroying something else</p>
                     <div className='icon-box icon-1'>
                        <img src={pakhi} alt="" />
                     </div>
                </div>
         </div>

            <div className="service-items">
                   <h2>We’re always ready fors <br/> <span>challenges</span></h2>
                   
                   <div className='service-box2'>
                    <h3>UI/UX Design</h3>
                     <p>My first thought about art, as a child, was that the artist brings something into the world that didn't exist before, and that he does it without destroying something else</p>
                     <div className='icon-box icon-2'>
                        <img src={book} alt="" />
                     </div>
                </div>

                <div className='service-box2'>
                    <h3>Brand Design</h3>
                     <p>My first thought about art, as a child, was that the artist brings something into the world that didn't exist before, and that he does it without destroying something else</p>
                     <div className='icon-box icon-2'>
                        <img src={measge} alt="" />
                     </div>

                </div>
        
         </div>





        </div>

    

    );
};

export default Services;



