# Pokedex Viewer

This repository contains the codebase for a project focused on creating a static HTML-based Pokedex Viewer. The lab demonstrates skills in HTML, CSS, and JavaScript, as part of the Software Engineering curriculum at the University of Western Ontario.

## Table of Contents
- [Description](#description)
- [Objectives](#objectives)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributors](#contributors)
- [License](#license)

## Description
This project is a **Pokedex Viewer** that displays information about 20 Pokémon, including:
- Names
- Images
- Moves
- Weather Types

The application allows users to search for Pokémon by name or Pokédex number through input validation and JavaScript functionality.

## Objectives
- Create a static HTML page displaying information about 20 Pokémon.
- Use CSS for styling and grouping items visually.
- Enable search functionality for Pokémon names and Pokédex numbers with JavaScript.
- Deploy the project on a public URL using AWS.
- Manage code versioning and deployment with Git.

## Features
- Displays the name, image, moves, and weather types for 20 Pokémon.
- Search functionality:
  - By name: Accepts up to 20 characters (letters only).
  - By number: Accepts valid Pokédex numbers.
- Validates user input for searches.
- Styled with CSS for a clean and visually distinct layout.

## Technologies Used
- **HTML5**: For the structure and layout of the web page.
- **CSS3**: For styling and grouping of Pokémon information.
- **JavaScript (ES6)**: For input validation and search functionality.
- **AWS**: For hosting and deploying the project on a public URL.
- **Git**: For version control and collaboration.

## Setup and Installation
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/aarishlakhani/Pokedex-Viewer.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Pokedex-Viewer
   ```

3. Open the `index.html` file in your preferred web browser to view the application locally.

## Usage
1. Browse the list of 20 Pokémon displayed on the page.
2. Use the search boxes at the top:
   - Enter a Pokémon name (up to 20 characters, no numbers) and click **Search** or press **Enter**.
   - Enter a Pokédex number and click **Search** or press **Enter**.
3. View results in a pop-up message with matching Pokémon information (up to 5 results).

## Deployment
1. Set up an AWS instance and HTTP server.
2. Clone the repository to the AWS server:
   ```bash
   git clone https://github.com/aarishlakhani/Pokedex-Viewer.git
   ```
3. Configure the HTTP server to serve the HTML files.
4. Access the deployed application via the public URL.

## Contributors
- **Aarish Akbar Lakhani**
  - [GitHub Profile](https://github.com/aarishlakhani)
