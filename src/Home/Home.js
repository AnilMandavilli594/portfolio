import React from 'react'
import { useSelector } from 'react-redux'
import Header from './Header'
import Projects from '../Projects'
import Contact from '../Contact'
import Skills from '../Skills'
import Experience from '../Experience'
import { Helmet } from 'react-helmet'
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
            <Helmet>
                <title>My portfolio</title>
                <meta name="description" content="A portfolio website that describe about my Professional Career " />
            </Helmet>
            <Header />
            <div className='h-full'>
                {renderTab()}
            </div>
        </div>
    )
}

export default Home