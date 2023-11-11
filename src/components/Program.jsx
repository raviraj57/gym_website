import React from 'react'
import './Program.css';
import Programdata from'./Programdata';
import RightArrow from '../image/rightArrow.png';

const program = () => {
  return (

<div className='program' id='program'>
  <div className='program-header'>
    <span className='stroke-text'>Expore our</span>
    <span> Program </span>
    <span className='stroke-text'> to shape you</span>

  </div>
  <div className='program-categories'>
    {Programdata.map((program)=>(
    <div className='catogery'>
      {program.image}
      <span>{program.heading}</span>
      <span>{program.details}</span>
      <div className='join-now'> <span>join now</span> 
      <img src={RightArrow} alt="" /></div>
      </div>
    ))}
  </div>
 
</div>

  );
    };

export default program ;