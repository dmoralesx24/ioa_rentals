import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import bgImage from '../../images/background.jpg';
import './HomePage.css';
import GuestSearch from '../../components/GuestSearch/GuestSearch';


const Home = () => {
    return (
        <Container textAlign='center'>
            <div className='full-page'>
                <Image className='full-image' src={bgImage} />
            </div>
            <h1>IOA Rentals</h1> 
            <GuestSearch />
        </Container>
    )
}

export default Home