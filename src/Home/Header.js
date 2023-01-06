import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';

function Header() {
    const activeTab = useSelector((state)=>state.activeTab)
    console.log(activeTab);
    const dispatch = useDispatch();
    const changeTab=(value)=>{
        dispatch({type:"changeTab",payload:value})
    }
    return (
        <div>
            <div className='w-full bg-violet-300 flex justify-between pl-10 pt-7 pb-7'>
                <Link to="/">
                    <text className='font-bold text-3xl'>Portfolio</text>
                </Link>
                <div className='w-1/2 flex justify-evenly'>
                    <button className='font-semibold text-lg' style={{color:activeTab==="Projects" ? "red":"black"}} onClick={()=>{changeTab("Projects")}}>Projects</button>
                    <button className='font-semibold text-lg' style={{color:activeTab==="Skills" ? "red":"black"}} onClick={()=>{changeTab("Skills")}}>Skills</button>
                    <button className='font-semibold text-lg' style={{color:activeTab==="Experience" ? "red":"black"}} onClick={()=>{changeTab("Experience")}}>Experience</button>
                    <button className='font-semibold text-lg' style={{color:activeTab==="Contact" ? "red":"black"}} onClick={()=>{changeTab("Contact")}}>Contact</button>
                </div>
            </div>
        </div>
  )
}

export default Header