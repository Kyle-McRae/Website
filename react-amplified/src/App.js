/* src/App.js */
import React, { useEffect, useState } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { createTodo } from './graphql/mutations'
import { listTodos } from './graphql/queries'
import './App.css'
import awsExports from "./aws-exports";
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Resume from './pages/resume';
import Halloween from './pages/halloween';
Amplify.configure(awsExports);


const App = () => {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/halloween' element={<Halloween />} />
        </Routes>
    </Router>
);
}


export default App;