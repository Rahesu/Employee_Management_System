# Employee Management System

A full-stack web application for managing employee records. Users can view, add, update, and delete employees.

- **Frontend:** React (Vite) + Bootstrap
- **Backend:** Spring Boot (Java) REST API
- **Database:** MySQL <!-- change if you use H2, PostgreSQL, etc. -->

<!-- Add a screenshot: save it as docs/screenshot.png, then uncomment the line below -->
<!-- ![Employee list](docs/screenshot.png) -->

## Features

- List all employees in a table
- Add a new employee
- Update an existing employee
- Delete an employee
- REST API with Spring Boot, connected to a React UI

## Project structure

```
Employee Management System/
├── <backend-folder>/        Spring Boot REST API
├── Ems_FrontEnd/
│   └── ems-frontend/        React app
├── .gitignore
└── README.md
```

## Prerequisites

- Java 17 or higher (`java -version`)
- Node.js 18 or higher (`node -v`)
- MySQL running locally (or the database you configured)
- Maven (or use the included `mvnw` wrapper)

## Getting started

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

### 2. Run the backend

1. Create the database:
   ```sql
   CREATE DATABASE ems;
   ```
2. Open `<backend-folder>/src/main/resources/application.properties` and set your database details:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/ems
   spring.datasource.username=YOUR_DB_USERNAME
   spring.datasource.password=YOUR_DB_PASSWORD
   spring.jpa.hibernate.ddl-auto=update
   ```
3. Start the server:
   ```bash
   cd <backend-folder>
   ./mvnw spring-boot:run
   ```
   On Windows PowerShell use `.\mvnw.cmd spring-boot:run`.

The API runs at `http://localhost:8080`.

### 3. Run the frontend

In a second terminal:

```bash
cd Ems_FrontEnd/ems-frontend
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

> On Windows PowerShell, if `npm` is blocked by the execution policy, use `npm.cmd install` and `npm.cmd run dev`.

## API endpoints

<!-- Adjust these to match your controller -->

| Method | Endpoint                | Description         |
|--------|-------------------------|---------------------|
| GET    | `/api/employees`        | Get all employees   |
| GET    | `/api/employees/{id}`   | Get one employee    |
| POST   | `/api/employees`        | Create an employee  |
| PUT    | `/api/employees/{id}`   | Update an employee  |
| DELETE | `/api/employees/{id}`   | Delete an employee  |

## Troubleshooting

- **Frontend shows no data:** make sure the backend is running on port 8080.
- **CORS error in the browser:** add `@CrossOrigin(origins = "http://localhost:5173")` to your controller.
- **Backend fails to start:** check the database is running and the credentials in `application.properties` are correct.

## Author

**<Your Name>**
GitHub: [@<Rahesu>](https://github.com/<Rahesu>)
