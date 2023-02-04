import { useState } from "react";
import LoadingSpinner from "../../LoadingSpinner";
import classes from './CarouselImg.module.scss';

const CarouselImg = props => {
    const { src, type } = props;
    return (<div
        style={{
            backgroundImage: `url(${src})`,
            backgroundSize: type === 'gallery' ? 'contain' : 'cover',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "100%",
            backgroundColor: "#000",
            position: 'relative'
        }}
        // className={`d-block w-100 ${classes['img-' + (i + 1)]}`}
        alt="First slide">
    </div>);
}

export default CarouselImg;