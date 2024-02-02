# Crypto Data Application README

## Overview

This repository contains the code for a simple crypto data application. The application fetches data from the WazirX API, stores it in a MongoDB database, and provides an API endpoint to retrieve the data. The frontend displays the top 10 crypto data fetched from the database.

## Project Structure

- **backend**: Contains the Node.js Express server code.
  - **src**: Source code files for the server.
  - **db**: Database connection setup.
  - **models**: Mongoose models for MongoDB.
  - **controllers**: Backend logic and API controllers.

- **frontend**: Contains HTML, CSS, and JavaScript files for the frontend.

## Backend Setup

1. Install dependencies:

   cd backend
   npm install
Set up your MongoDB connection:

Create a .env file in the backend directory and set MONGODB_URL and other relevant environment variables.
Run the backend server:


npm run dev


Fetching and Storing Crypto Data

The server fetches top 10 crypto data from the WazirX API.
It clears existing data in the database and stores the new data.


Frontend Setup
Open the frontend/index.html file in a web browser.

The frontend fetches data from the backend API (http://localhost:8000/top10results) and displays it.

Folder Structure

backend
src
index.js: Main server file.
app.js: Express app configuration.
db
index.js: MongoDB connection setup.
models
CryptoData.js: Mongoose model for crypto data.
controllers
cryptoController.js: Controller for fetching crypto data from WazirX.

frontend
index.html: HTML file for displaying crypto data.
app.js: JavaScript file for frontend logic.
styles.css: CSS file for styling.
Additional Notes
The server runs on http://localhost:8000.
MongoDB connection details are specified in the .env file.
Dependencies
Node.js
Express
MongoDB
Mongoose
Axios
Known Issues


The application uses deprecated MongoDB connection options.
Future Enhancements
Refactor MongoDB connection using modern options.
Improve error handling in the frontend.



