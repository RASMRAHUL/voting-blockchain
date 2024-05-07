import React from 'react'
import candidate from '../../assets/candidate.png';
const WinnerCard=(props)=> {
  return (
    <div className='flex flex-col border border-black w-[250px] h-[320px] rounded-xl bg-gray-200 '>
    <img src={candidate} alt='candiate image' className='h-[200px] rounded-xl'></img>
    <div className='p-2 '>
     <h1 className='font-bold'>{props.name}</h1>
     <p className='font-semibold'>{props.text}</p>
    </div>
    <div>Total votes:{props.votes}</div>
 </div>
  )
}

export default WinnerCard