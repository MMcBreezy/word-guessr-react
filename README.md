# Word Guessr React UI 🕹️

Welcome to the Word Guessr React UI repository! This repository houses the frontend user interface for the Word Guessr game. Word Guessr uses a Node backend API to handle game logic such as creating new games, tracking game state, and managing guesses. The React UI makes calls to the API based on user input. The server responds with a JOSN oject which updates the UI compoents to reflect the game state to the player. You can find the Word Guessr API repository [here](https://github.com/MMcBreezy/word-guessr-api).

## Installation

To run the Word Guessr React UI on your local machine, follow these steps:

1. Clone this repository to your machine:

```bash
git clone https://github.com/MMcBreezy/word-guessr-react.git
cd word-guessr-react
npm install
npm start
```

## Usage

Once the development server is up and running, open your web browser and navigate to http://localhost:3000. You will be greeted with the landing page of the Word Guessr game.

## Routes

The Word Guessr React UI employs React Router for navigation. Here's an overview of the routes used in the application:

/ - Landing page

/game - Game page

## Screenshots

### Landing Page 🛬

![landing page](https://github.com/MMcBreezy/word-guessr-react/blob/readme-update/screenshots/landing-page.png)

### Game Page 🕹

![game page](https://github.com/MMcBreezy/word-guessr-react/blob/readme-update/screenshots/game-page.png)

### Game State UI Example 🎮

![game state example](https://github.com/MMcBreezy/word-guessr-react/blob/readme-update/screenshots/game-in-session.png)

### Duplicate Guess Message ❗️

![duplicate guess message](https://github.com/MMcBreezy/word-guessr-react/blob/readme-update/screenshots/redundant-letter-message.png)

### User Lost Result 🥺

![user lost result](https://github.com/MMcBreezy/word-guessr-react/blob/readme-update/screenshots/user-lost-modal.png)

### User Won Result 🎉

![user won result](https://github.com/MMcBreezy/word-guessr-react/blob/readme-update/screenshots/user-won-modal.png)
