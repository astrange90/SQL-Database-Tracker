const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
const inquirer = require('inquirer');
const fs = require('fs');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL Username
        user: 'root',
        
        password: 'rootA1', //Change to my database
    },
    console.log(`Connected to the employees_db database.`)
);

    inquirer
        .prompt([
            {
                name: 'userPrompt',
                type: 'list',
                message: 'Select an option:',
                choices: [
                    'View all departments',
                    'View all roles',
                    'View all employees',
                    'Add a department',
                    'Add a role',
                    'Add an employee',
                    'Update an employee role',
                    'Close program'
                ]
            }
        ])
        

    app.use((req, res) => {
        res.status(404).end();
    });

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
