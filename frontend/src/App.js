// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Home from './components/Pages/Home';
import Favorites from './components/Pages/Favorites';
import BookSearch from './components/Books/BookList'; 
import ProtectedRoute from './components/protectedRoute';
import { ThemeProvider } from './Themecontext'; // Import ThemeProvider
import ThemeToggle from './components/Themetoggle'; 
import './index.css'; 
const App = () => {
   
    return (
        <ThemeProvider>
        <Router>
           <div className="app-container">
                    <ThemeToggle /> {/* Add the ThemeToggle component here */}
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/favorites" element={
                            <ProtectedRoute>
                                <Favorites />
                            </ProtectedRoute>
                        } />
                        <Route path="/" element={<Login />} /> {/* Redirect to login page by default */}
                        <Route path="/home" element={
                            <ProtectedRoute>
                                <BookSearch /> {/* Use BookSearch component on the home route */}
                            </ProtectedRoute>
                        } />
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    );
};

export default App;