# Login and Signup Page

This project is a fully functional **Login and Signup Page** designed using HTML, CSS, and JavaScript, with **MongoDB** as the backend database. The application is powered by **Express.js** as the backend framework and uses **Handlebars (hbs)** as the templating engine to dynamically render pages.

## Features

- **Responsive Design**: Mobile-friendly and optimized for various screen sizes.
- **User Authentication**: Allows users to sign up and securely log in.
- **MongoDB Integration**: Stores user credentials and information in a MongoDB database.
- **Templating with hbs**: Dynamic rendering of pages using Handlebars.
- **Validation**: Includes form validation for both login and signup pages.
- **Error Handling**: Displays appropriate error messages for invalid inputs or failed operations.

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Express.js, Node.js
- **Templating Engine**: hbs (Handlebars)
- **Database**: MongoDB

## Setup Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your system.
- [MongoDB](https://www.mongodb.com/) installed or a cloud MongoDB instance.
- A GitHub account to push code.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/repository-name.git
   ```
2. Navigate to the project directory:
   ```bash
   cd repository-name
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure your MongoDB connection in the `server.js` file.

### Running the Project
1. Start the server:
   ```bash
   node server.js
   ```
2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Folder Structure
```
project-directory/
├── public
    ├── CSS
         ├── home.css
         ├── login.css
         ├── signup.css
    ├── images
    ├──Js
       ├── login.js
       ├── signup.js
├── src
     ├── dbconnection.js
     ├── index.js
     ├──mongodb.js
├── templates
     ├── home.hbs
     ├── login.hbs
     ├── signup.hbs
├── package.json       # Dependencies and scripts
├── .gitignore         # Ignored files and folders
└── README.md 
         # Project documentation
```

## Screenshots
![Login Page](https://github.com/user-attachments/assets/67db75aa-6640-4075-810e-bba3673596c1)

![Signup Page](https://github.com/user-attachments/assets/97752095-9ed8-4477-ab6f-5ddadfb1fde9)


## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.
