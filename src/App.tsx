import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Grid } from 'semantic-ui-react'
import Home from './pages/Home/HomePage';
import Booking from './pages/Bookings/Booking';
import Navbar from './components/Navbar/Navbar';
import './App.css';


const App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Container fluid className='App'>
                    <Grid centered>
                        <Grid.Row>
                            <Grid.Column>
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/bookings" element={<Booking />} />
                                </Routes>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Router>    
        </>
    );
}


export default App;