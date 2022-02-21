import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Grid } from 'semantic-ui-react'
import Home from './pages/Home/HomePage';
import Navbar from './components/Navbar/Navbar';
import './App.css';


const App = () => {
    return (
        <Router className='full-page'>
            <Navbar />
            <Container fluid className='App'>
                <Grid centered>
                    <Grid.Row>
                        <Grid.Column>
                            <Routes>
                                <Route exact path="/" element={<Home />} />
                                {/* <Route path='/rate-engine' exact component={RateEngine} />
                                <Route path='/reporting' exact component={Reporting} />
                                <Route path='/rate-lookup' exact component={RateLookup} />
                                <Route path='/rate-items' exact component={RateItems} />
                                <Route path='/payable-entities' exact component={PayableEntities} />
                                <Route path='/rates/:id' exact component={RateCard} />
                                <Route path='/:object' exact component={LookupTable} /> */}
                            </Routes>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Router>
    );
}

export default App;