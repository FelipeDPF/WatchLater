
<!-- PROJECT LOGO -->
<br />
<p align="center">
  
  <h3 align="center">WatchLater</h3>

  <p align="center">
    Now you can search for and add movies to your personalized watchlist!
    <br />
  </p>

  ![Demo](demo3.gif)
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project

![Open Demo](https://github.com/FelipeDPF/WatchLater/blob/master/demo3.gif)

I just love movies, so I decided to create a web application that allows me see what's trending, search for the movies that I would like to watch next, and add them to my watchlist. 

### Built With
* [React](https://reactjs.org)
* [nodejs](https://nodejs.org/en/)
* [Firebase](https://firebase.google.com)
* [Redux](https://redux.js.org/)
* [Bootstrap](https://getbootstrap.com)

### Features
I am currently working and adding other features, but so far this web application allows you to: 
* Login and Register
* Search movies by the title
* Add multiple movies to your watchlist
* Delete movies from your watchlist
* View and manage your personalized watchlist
* Sign out 



<!-- GETTING STARTED -->
## Getting Started
Follow these steps to run the application:

### Prerequisites

* Install node.js
```sh
https://nodejs.org/en/
```

* Install React
```sh
npm install --save react
https://reactjs.org/
```

* Install React-dom
```sh
npm install --save react-dom
```

### Installation

1. Clone the repo
```sh
git clone https://github.com/FelipeDPF/WatchLater.git
```
3. Install NPM packages
```sh

npm install bootstrap

npm install firebase

npm install react-redux-firebase

npm install redux

npm install redux-firestore

npm install redux-thunk

```

## 🚀 Running the App

After installing all dependencies and adding your Firebase and Movie API credentials, run the development server with:

```bash
NODE_OPTIONS=--openssl-legacy-provider npm start
```

Then open http://localhost:3000 in your browser.


4. All Movie API addresses found at [https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id](https://themoviedb.com)

5. Enter your firebase API key and the rest of your Firebase configuration info in `firebConfig.js`
```JS
var firebaseConfig = {
    apiKey: "    ",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};
```


## ⚠️ Node Compatibility Note
If you're using Node.js v17 or above, you may encounter an OpenSSL-related error during startup.  
This is due to deprecated OpenSSL algorithms in newer versions.  
To resolve it, start the development server with:

```JS
NODE_OPTIONS=--openssl-legacy-provider npm start
```


<!-- CONTACT -->
### Contact

Felipe Filho - [@felipe_filho](https://www.linkedin.com/in/felipe-filho) - ffilho2@hotmail.com



<!-- ACKNOWLEDGEMENTS -->
### Acknowledgements
* [GitHub React Bootstrap ](https://react-bootstrap.github.io)
* [GitHub Material UI ](https://material-ui.com)
* [GitHub React Icons](https://react-icons.github.io/react-icons)


