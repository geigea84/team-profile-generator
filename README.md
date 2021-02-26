
  # Team Profile Generator
  
  

  ## Description

  This is a command line application that takes in information about employees and generates an html page with each employee's corresponding information.

  ## Table of Contents

  * [Installation](#installation)
    
  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)
    
  * [Tests](#tests)

  * [Questions](#questions)
    
  ## Installation

  npm i

  ## Usage

  Invoke the application with node index.js

  ## License

  There is no license associated with this application.

  ## Contributing

  n/a

  ## Tests

  npm test

  ## Questions

  Feel free to reach out to me at geigea84@gmail.com with any questions.

  More of my work can be seen here [github/geigea84](https://github.com/geigea84/).

//==========

AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
* done

WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
* done

WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
* done

WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
* done

WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
* done

WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
* done

WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
* done

WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
* done