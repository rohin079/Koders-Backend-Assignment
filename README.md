# Expense Tracker Assignment by KODERS

## Project Overview

Expense Tracker is a Node.js application built with Express.js to manage personal expenses. It allows users to perform CRUD (Create, Read, Update, Delete) operations on expenses and automatically updates recurring expenses daily using a cron job. The app uses a Strapi backend for data storage.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete expenses.
- **Recurring Expenses**: Automatically updates recurring expenses based on their frequency (Daily, Weekly, Monthly, Quarterly, Yearly).
- **Express.js**: Robust and scalable server framework.
- **Strapi Integration**: Uses Strapi as the backend for data management.
- **Cron Jobs**: Uses `node-cron` to schedule daily updates for recurring expenses.
- **Docker Support**: Dockerfile and docker-compose configuration for easy containerization and deployment.

## Technologies Used

- **Node.js**
- **Express.js**
- **Axios**
- **Node-cron**
- **Strapi**
- **Docker**
- **Docker Compose**

## Setup and Installation

### Prerequisites

- Node.js and npm installed on your machine.
- Docker and Docker Compose installed on your machine.

### Clone the Repository

1. Clone the repository to your local machine:
   ```sh
   git clone https://github.com/koders-in/expense-tracker.git
   cd expense-tracker
   ```

2. Install the required dependencies:
   ```sh
   npm install
   ```

3. Start the server:
   ```sh
   npm start
   ```

4. Build and run the Docker container:
   ```sh
   docker-compose up --build

   ```
5. Stop the Docker containers:
   ```sh
   docker-compose down

   ```

## Credits

This project was completed by Rohin Mehrotra as an assignment for Backend Developer Intern by Koders.


## Licence

This project is licensed under the MIT License.