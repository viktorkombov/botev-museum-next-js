import { useState } from "react";
import LoadingSpinner from "../../LoadingSpinner";
import classes from './CarouselImg.module.scss';

const CarouselImg = props => {
    const [loading, setLoading] = useState(true);
    const { src, type } = props;
    const bgElement = document.querySelector("body");
    let preloaderImg = document.createElement("img");
    preloaderImg.src = src;
    preloaderImg.addEventListener('load', (event) => {
        setLoading(false);
    });
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
        {(loading && type === 'gallery') && <div className={classes.loading}>
            <LoadingSpinner />
        </div>}
    </div>);
}

export default CarouselImg;