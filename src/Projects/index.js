import React from 'react'
import SlackLogo from '../images/SlackLogo.png'
import Game1 from '../images/2048Logo.jpeg'
import TicTacToeLogo from '../images/TicTacToeLogo.png'
import ecommLogo from '../images/ecommLogo.png'
import covidLogo from '../images/CovidLogo.jpeg'
import ProjectContainer from '../Components/ProjectContainer'
import PortofolioLogo from '../images/PortofolioLogo.png'

const data=[{
  logo:PortofolioLogo,
  title:"My Portfolio",
  description:"A basic portofolio that displays my professional information like Skills, Experience and Projects",
  tools:"React.js",
  url:"https://github.com/AnilMandavilli594/portfolio"
  },
  {
    logo:ecommLogo,
    title:"E-commerce",
    description:"A web application where a person can select,add items to cart and purchase them with their own money using PayPal",
    tools:"React.js,Express.js,MongoDB,Node.js",
    url:"https://github.com/AnilMandavilli594/E-commerce"
  },
  {
    logo:Game1,
    title:"2048",
    description:"A logical based React.js game project in which a person wins the game if he manages to make a 2048 box",
    tools:"React.js",
    url:"https://github.com/AnilMandavilli594/2048-Game"
  },{
    logo:SlackLogo,
    title:"Slack Clone",
    description:"A basic front end based project developed by me to improve my designing skills s",
    tools:"React.js",
    url:"https://github.com/AnilMandavilli594/slack-clone"
  },{
    logo:TicTacToeLogo,
    title:"Tic Tac Toe",
    description:"A React Native based project where a winner is declared if the player manages to get 3 of her marks in a row (up, down, across, or diagonally)",
    tools:"React Native",
    url:"https://github.com/AnilMandavilli594/Tic-Tac-Toe"
  },{
    logo:covidLogo,
    title:"Covid Tracker",
    description:"A project which uses the data coming from an API and display the data in the form of a chart and table",
    tools:"React.js",
    url:"https://github.com/AnilMandavilli594/covid-tracker"
  },
  
]

function index() {
  return (
    <div>
      <div class="flex min-h-screen items-center justify-center bg-neutral-800">
        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {
            data.map(item=>{
              return (<a target="_blank" href={item.url}>
                        <ProjectContainer logo={item.logo} title={item.title} description={item.description} tools={item.tools} />
                  </a>)
            })
          }
        </div>
      </div>
    </div>
  )
}

export default index