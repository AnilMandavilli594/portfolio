import React from 'react'
import Info from './Info'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Main() {
  return (
    <div className="flex h-full">
        <div className='flex flex-col h-full justify-center ml-10 p-2 '>
          <a href="https://www.linkedin.com/in/anil-mandavilli/">
            <LinkedInIcon sx={{ fontSize: 50 }} color='primary' />
          </a>
          <a href='https://www.instagram.com/anilmandavilli/'>
            <InstagramIcon sx={{ fontSize: 50 }} color='primary' />
          </a>
          <a href="https://www.facebook.com/mandavilli.anil.52">
            <FacebookIcon sx={{ fontSize: 50 }} color='primary' />
          </a>
          <a href='https://twitter.com/anil_mandavilli'>
            <TwitterIcon sx={{ fontSize: 50 }} color='primary'/>
          </a>
          <a href="https://wa.me/+14632564979">
            <WhatsAppIcon sx={{ fontSize: 50 }} color='primary' />
          </a>
        </div>
        <div className='flex justify-center items-center w-full'>
            <Info/>
        </div>
    </div>
  )
}

export default Main