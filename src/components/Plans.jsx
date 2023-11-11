import React from 'react'
import PlansData from './Plansdata'
import './Plans.css'
import whiteTick from '../image/whiteTick.png'

const plans = () => {
  return (
<div className='plans-container'>
    <div className='programs-header'style={{gap: '2rem'}}>
        <span className='stroke-textt'>READY TO START </span>
        <span className='t'> YOUR JOURNEY </span>
        <span className='stroke-textt'> NOW WITHUS</span>
    </div>
    <div className='plans'>
        {PlansData.map((plan,i)=>(
       <div className='plan' key={1}>
        {plan.icon}
        <span>{plan.name}</span>
        <span>${plan.price}</span>
        <div className='features'>
        {plan.features.map((features,i)=>( 
            <div className='feature'>
                <img src={whiteTick} alt="" />
                <span key={i}>{features}</span>
                </div>
                ))}
                </div>
                <div>
                   <span>See more benefits -> </span>
                </div>
                <button className='btn'> Join now </button>
                </div>
        ))}
    </div>
</div>
  );
}

export default plans
