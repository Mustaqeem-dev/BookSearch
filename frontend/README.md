# Book Search Application

A web application that allows users to search for books, manage their favorites, and handle user authentication using JWT. Built with React for the frontend and Node.js with Express for the backend.

## Features

- **User Authentication**: 
  - Registration and login functionality.
  - JWT token storage for persistent sessions.

- **Book Search**: 
  - Search for books using a search bar.
  - Displays a list of books with titles, authors, and thumbnails.

- **Book Details**: 
  - View detailed information about a specific book.

- **Favorites Management**: 
  - Save books to a favorites list.
  - View and delete books from the favorites list.

- **State Management**: 
  - Uses Redux Toolkit for global state management (authentication, books, favorites).

- **Responsive Design**: 
  - Built with Tailwind CSS for a modern and responsive UI.

## Technologies Used

- **Frontend**: 
  - React
  - Redux Toolkit
  - Tailwind CSS

- **Backend**: 
  - Node.js
  - Express
  - MongoDB
  - JWT for authentication

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB instance (local or cloud) for the database.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/book-search-app.git
   cd book-search-app
   ```

2. **Install backend dependencies**:
   ```bash
   cd backend
   npm install
   ```

3. **Set up environment variables**:
   - Create a `.env` file in the `backend` directory and add your MongoDB URI:
     ```
     MONGODB_URI=your_mongodb_uri
     JWT_SECRET=your_jwt_secret
     ```

4. **Start the backend server**:
   ```bash
   node index.js
   ```

5. **Install frontend dependencies**:
   ```bash
   cd ../frontend
   npm install
   ```

6. **Start the frontend application**:
   ```bash
   npm start
   ```

### Usage

- Navigate to `http://localhost:3000` in your browser to access the application.
- Register a new account or log in with an existing account.
- Use the search bar to find books and manage your favorites.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.