const mysql = require('mysql2');
const cTable = require('console.table');
const inquirer = require('inquirer');

const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL Username
        user: 'root',
        password: 'rootA1',
        database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
);

function startMenu() {
    inquirer
        .prompt({
            type: "list",
            message: "What would you like to do?",
            name: "selection",
            choices: [
                "View All Employees",
                "Add Employee",
                "Update Employee Role",
                "View All Roles",
                "Add Role",
                "View All Departments",
                "Add Department",
                "Exit",
            ],
        })
        .then((data) => {
            if (data.selection === 'View All Employees') {
                viewEmployees();
            }
            if (data.selection === 'Add Employee') {
                addEmployee();
            }
            if (data.selection === 'Update Employee Role') {
                updateEmployeeRole();
            }
            if (data.selection === 'View All Roles') {
                viewRoles();
            }
            if (data.selection === 'Add Role') {
                addRole();
            }
            if (data.selection === 'View All Departments') {
                viewDepartments();
            }
            if (data.selection === 'Add Department') {
                addDepartment();
            }
        })
};
function viewEmployees() {
    db.query("SELECT * FROM employee", (err, data) => {
        console.table(data);
        startMenu();
    })
};

function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter employee first name',
                name: 'firstName'
            },
            {
                type: 'input',
                message: 'Enter employee last name',
                name: 'lastName'
            },
            {
                type: 'input',
                message: 'Enter a Role ID',
                name: 'EmployeeRoleID'
            },
            {
                type: 'input',
                message: 'Enter Manager ID',
                name: 'EmployeeManagerID'
            },
        ])
        .then(response => {
            db.query(`INSERT INTO employee(firstName, lastName, role_id, manager_id)
                VALUES ("${response.firstName}", "${response.lastName}, ${response.EmployeeRoleID}, ${response.EmployeeManagerID})`, err => {
                viewEmployees();
            })
        })
};

function updateEmployeeRole() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter new role name',
                name: 'RoleName'
            },
            {
                type: 'input',
                message: 'Enter the salary for role',
                name: 'RoleSalary'
            },
            {
                type: 'input',
                message: 'Enter the department ID',
                name: 'RoleDepartmentID'
            },
        ])
        .then(response => {
            db.query(`INSERT INTO roles(roleName, salary, department_id) 
            VALUES ("${response.RoleName}", ${response.RoleSalary}, ${response.RoleDepartmentID})`, err => {
                viewRoles();
            })
        })
};

function viewRoles() {
    db.query("select * from roles", (err, data) => {
        console.table(data);
        startMenu();
    })
};

function addRole() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter new role name',
                name: 'RoleName'
            },
            {
                type: 'input',
                message: 'Enter the salary for role',
                name: 'RoleSalary'
            },
            {
                type: 'input',
                message: 'Enter the department ID',
                name: 'RoleDepartmentID'
            },
        ])
        .then(response => {
            db.query(`INSERT INTO roles(roleName, salary, department_id) 
            VALUES ("${response.RoleName}", ${response.RoleSalary}, ${response.RoleDepartmentID})`, err => {
                viewRoles();
            })
        })
};

function viewDepartments() {
    db.query("select * from department", (err, data) => {
        console.table(data);
        startMenu();
    })
};

function addDepartment() {
    inquirer
        .prompt({
            type: 'input',
            message: 'Enter new department name',
            name: 'DepartmentName'
        })
        .then(response => {
            db.query(`INSERT INTO department(name)
            VALUES ("${response.DepartmentName}")`, err => {
                viewDepartments();
            })
        })
};

startMenu ();