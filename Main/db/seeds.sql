INSERT INTO department (department_name)
VALUES  ("Executive Board"),
        ("Engineering"),
        ("R & D"),
        ("Technician"),
        ("Production");

INSERT INTO roles (title, salary, department_id)
VALUES  ("Director", 506994.00, 1),
        ("Biomedical", 100000.00, 2),
        ("Manufacturing Tech", 26.50, 3),
        ("Senior R&D Technician", 74688.00, 3),
        ("Medical Equipment Tech", 30.20, 4),
        ("Assembler", 19.00, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Gwenni", "Domenicone", 1, null),
        ("Crichton", "Pegler", 2, 1),
        ("Gwendolin", "Shermore", 3, null),
        ("Carroll","Bewshea", 4, null),
        ("Vidovik", "Whitwam", 5, null),
        ("Brandon", "McGibbon", 6, null),
        ("Rey","Belt", 7, null),
        ("Orland", "Hansana", 8, null),
        ("Matilda", "Janacek", 9, null),
        ("Violante", "Rodliff", 10, null);