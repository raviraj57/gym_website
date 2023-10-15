import React from 'react'

import './Hero.css'
import Header from './Header'
import Hero_image from '../image/hero_image.png'
import Hero_image_back from '../image/hero_image_back.png'
import Heart from '../image/heart.png'
import Calories from '../image/calories.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='left-h'> 
         <Header/> 
{/* the best ads */}
        <div className='the-best-ads'>
          <div></div>
            
        
        <span>The best fitness club in the city</span>
        </div>
        {/*hero heading */}
        <div className='hero-text'> 
        <div><span className='stroke-text'> Shape</span>
        <span> Your</span></div>
        <div> <span> Ideal body </span></div>
        </div>
        <div>
            <span className='quote'>
            In here we will help you to shape and build your ideal body and live up your life to fullest
            </span>
        </div>
         {/*figure */}
       <div className='figure'>
        <div>
        <span>+ 140</span>
        <span>Expert coaches</span>
        </div>
        <div>
            <span>+ 978</span>
            <span>MEMBERS JOINED</span>
            </div>
        <div>
            <span>+ 50</span>
            <span>FITNESS PROGRAMS</span>
            </div>
       </div>
       {/*hero buttons*/}
       <div className='hero-buttons'>
        <button className='btn'>Get Started</button>
        <button className='btn'>Learn More</button>
       </div>
      

       </div>
       
        <div className='right-h'>
            <button className='btn'> <a>Join Now</a> </button> 
            
            <div className='heart-rate'>
                     <img src={Heart} alt="heart" />
                     <span>Heart Rate</span>
                     <span>116 bpm</span>
            </div>
            {/*hero image */}
            <img src={Hero_image} alt="hero_image" className='hero-image'/>
            <img src={Hero_image_back} alt="hero_image_back" className='hero-image-back'/>
            

            <div className='Calories'>
               <img src={Calories} alt="Calories" className='calories'/>
               <div>
               <span className='burned'>Calories burned</span>
               <span className='kcal'>200 Kcal</span>
               </div>
             
            </div>
        </div>
      
    </div>
  );
};

export default Hero
