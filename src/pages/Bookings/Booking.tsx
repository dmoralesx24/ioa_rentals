import React from 'react';
import { Container, Card, Button, CardContent, CardDescription } from 'semantic-ui-react';
import Images from './photos';
import PhotoCarousel from '../../components/Carousel/Carousel';
import Reserve from '../../components/Reserve/Reserve';

const Booking = () => {

    return (
        <Container textAlign='center'>
            <h1 className='black-text'>Bookings Page</h1> 
            <br/>
            <Card link color='blue' fluid centered >
                <PhotoCarousel photos={Images.propertyOne}/>
                <Card.Content>
                    <Card.Header>
                        3BR Townhouse with HOT TUB & KINGBED! Free Disney+
                    </Card.Header>
                    <CardDescription>
                        3 bedrooms - 4 beds - 1 bath
                    </CardDescription>
                </Card.Content>
                <Card.Content>
                    <h3>$145/night</h3>
                    <Reserve floated='right'/>
                </Card.Content>
            </Card>
        </Container>
    )
}

export default Booking