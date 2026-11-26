# Pokémon index

A pokédex-style web application built with React and Vite. It fetches all the original 151 pokémon from PokéAPI (https://pokeapi.co) and lets you look up details for any of them.

## Features

- Start screen with "Start pokémon app" button
- Fetches all 151 original Pokémon from the API and stores them in a state
- A drop down with ever Pokémon name
- A button that fetches data for the selected Pokémon
- A display showing the Pokémons name, image, types, weight and height
- Styling inspired by the original Pokédex with color coded badges

## Tech stack

- React
- Vite
- PokéAPI ("https://pokeapi.co/api/v2/pokemon?limit=151")
- CSS

## Getting started

Requires you to have node.js installed

´´bash
git clone https://github.com/Merjonas/Poke.index.git
cd Poke.index into pokemon--index
npm install
npm run dev
´´

Then open the lical address printed in the terminal, usually http://localhost:5173/
Note that this app must be un with "npm run dev". Opening the files in a static server such as liveserver will only show a blank page.

## Project structure

├── App.jsx                  
├── PokemonApplication.jsx   
├── Pokemon.jsx              
├── App.css                  
├── index.css                
└── main.jsx 

1. <App> shows the "Start Pokemon App" button. Clicking it sets a started state to true, which renders <PokemonApplication>
2. <PokemonApplication> calls the API in a useEffect when it first renders and saves the list of 151 Pokémon in state. It renders a dropdown from that list. Clicking "Get Pokémon" fetches the details for the chosen one using the URL stored in the list.
3. <Pokemon> receives that data as a prop and displays the name, image, types, weight and height. The API returns weight in hectograms and height in decimetres, so both are divided by 10 to show kg and metres.

## Git workflow

Each part of the projected was created on its own feature branch and merged into main once functional.

