import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


// react a tailwind use korte hole , react tailwind css likhe google a search korte hobe. and tailwind setupp kore nite hobe. sei jonno step gul
//1. Install Tailwind via npm----- npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9 ------- aita likhe tailwind install kore nite hobe.
//2. Install and configure CRACO ---------- npm install @craco/craco  ------- carco install kore nite hobe.
//3. Once it’s installed, update your scripts in your package.json file to use craco instead of react-scripts for all scripts except eject:     
/*  "start": "react-scripts start",
     "build": "react-scripts build",
     "test": "react-scripts test",

     upor ar 3ta remove kore nicer 3 ta use korte hobe.

     "start": "craco start",
     "build": "craco build",
     "test": "craco test",
      */
// 4. Next, create a craco.config.js at the root of our project and add the tailwindcss and autoprefixer as PostCSS plugins: 
/* 
// craco.config.js-- craco.js file create kore ai khane ai code use korte hobe. ai file hobe package.json a click kore then akta file crate kore nite hobe. oi khane code gula rakte hobe.
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}
 */

//5. Create your configuration file  (Next, generate your tailwind.config.js file:) set korte hobe ai code diya ----------- npx tailwindcss-cli@latest init
//6. then ---------This will create a minimal tailwind.config.js file at the root of your project: ---------config.js name a file create hobe and ai file ar modde nicer code gula rakte hobe.
/* // tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
 */



//7. Configure Tailwind to remove unused styles in production -------In your tailwind.config.js file, configure the purge option with the paths to all of your components so Tailwind can tree-shake unused styles in production builds:
 
  // purge: [],  ------ ai line ar poriborte nicer line use korte hobe
 //  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],


 // 8.  Include Tailwind in your CSS ----------Open the ./src/index.css file that Create React App generates for you by default and use the @tailwind directive to include Tailwind’s base, components, and utilities styles, replacing the original file contents:-----
 /* 
  src/index.css file a nicer code gula  use korte hobe---
  /* ./src/index.css */
// @tailwind base;
//@tailwind components;
//@tailwind utilities; */

//9.Finally, ensure your CSS file is being imported in your ./src/index.js file:


// ************ ai vhabe react tailwind use kora jabe.



