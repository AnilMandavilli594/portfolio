import React from 'react'
import SlackLogo from '../images/SlackLogo.png'
import Game1 from '../images/2048Logo.jpeg'
import TicTacToeLogo from '../images/TicTacToeLogo.png'
import ecommLogo from '../images/ecommLogo.png'
import covidLogo from '../images/CovidLogo.jpeg'
import PortofolioLogo from '../images/PortofolioLogo.png'


function index() {
  return (
    <div>
      <div class="flex min-h-screen items-center justify-center bg-neutral-800">
        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-96 w-72">
              <img class="h-full w-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={PortofolioLogo} alt="" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">My portofolio</h1>
              <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">A basic portofolio that displays my professional information like Skills, Experience and Projects</p>
              <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-bold text-sm capitalize text-white shadow shadow-black/60">Tools used: React.js</button>
            </div>
          </div>
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-96 w-72">
              <img class="h-full w-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={ecommLogo} alt="" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">E-commerce</h1>
              <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">A web application where a person can select,add items to cart and purchase them with their own money using PayPal</p>
              <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-bold text-sm capitalize text-white shadow shadow-black/60">Tools used: React.js,Express.js,MongoDB,Node.js</button>
            </div>
          </div>
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-96 w-72">
              <img class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src={Game1} alt="" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">2048</h1>
              <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">A logical based React.js game project in which a person wins the game if he manages to make a 2048 box</p>
              <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-bold text-sm capitalize text-white shadow shadow-black/60">Tools used: React.js</button>
            </div>
          </div>
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-96 w-72">
              <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={SlackLogo} alt="slack Logo" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">Slack Clone</h1>
              <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">A basic front end based project developed by me to improve my designing skills </p>
              <div class="rounded-full bg-neutral-900 py-2 px-3.5 font-bold text-sm capitalize text-white shadow shadow-black/60">Tools used: React.js</div>
            </div>
          </div>
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-96 w-72">
              <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={TicTacToeLogo} alt="" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">Tic Tac Toe</h1>
              <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">A Rative Native based project where a winner is declared if the player manages to get 3 of her marks in a row (up, down, across, or diagonally)</p>
              <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-bold text-sm capitalize text-white shadow shadow-black/60">Tools used: React Native</button>
            </div>
          </div>
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-96 w-72">
              <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={covidLogo} alt="" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">Covid Tracker</h1>
              <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">A project which uses the data coming from an API and display the data in the form of a chart and table</p>
              <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-bold text-sm capitalize text-white shadow shadow-black/60">Tools used: React.js</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index