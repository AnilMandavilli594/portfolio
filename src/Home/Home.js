import React from 'react'
import { useSelector } from 'react-redux'
import Header from './Header'
import Projects from '../Projects'
import Contact from '../Contact'
import Skills from '../Skills'
import Experience from '../Experience'
function Home() {
    const activeTab = useSelector((state)=>state.activeTab)
    const renderTab=()=>{
        if(activeTab==="Projects"){
            return <Projects />
        }
        if(activeTab==="Experience"){
            return <Experience />
        }
        if(activeTab==="Skills"){
            return <Skills />
        }
        if(activeTab==="Contact"){
            return <Contact />
        }
    }
    return (
        <div className='h-full'>
            <Header />
            <div className='h-full'>
                {renderTab()}
            </div>
        </div>
    )
}

export default Home