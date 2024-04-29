**README.md**

# Nuxt 3 JSON Server App

This project consists of a client file and a server file. The server file is a JSON server, and the client is a Nuxt 3 app.

## Prerequisites

Before running the application, ensure you have Node.js installed, preferably version 21.5.0.

## Installation

1. Clone this repository:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```bash
    cd employee-management
    ```

3. Install dependencies for both client and server:

    ```bash
    cd client
    yarn install

    cd ../server
    yarn install
    ```

## Running the Application

To run the application, follow these steps:

1. **Start the JSON server:**

    ```bash
    cd server
    yarn start
    ```

    This will start the JSON server at `http://localhost:8000`.

2. **Start the Nuxt 3 client app:**

    ```bash
    cd client
    yarn dev
    ```

    This will start the Nuxt 3 app at `http://localhost:3000`.

## Accessing the Application

Once both the server and client are running, you can access the application at `http://localhost:3000`.
