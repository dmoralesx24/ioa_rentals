import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


interface IPhotoCarouselProps {
    photos?: IImg[];
}
interface IImg {
    id: number;
    src: string;
}

class PhotoCarousel extends Component<IPhotoCarouselProps> {
    DisplayPhotos = () => this.props.photos.map((img, i) => (
        <div key={i}>
            <Image key={i} src={img.src} />
        </div>
    ));

    render() {
        return (
            <Carousel>
                {this.DisplayPhotos()}
            </Carousel>
        );
    }
};

export default PhotoCarousel