import { Fragment, useState } from "react";
import CarouselBootstrap from "../CarouselBootstrap";
import ModalBootstrap from "../ModalBootstrap";
import classes from "./Gallery.module.scss";
import img from "../../../images/museum.jpg";
import inc from "../../../images/inc.jpg";
import Image from "../Image/Image";

const Gallery = (props) => {
    const {images, onImageClick, large} = props;

    return (
        <Fragment>
            <section className={`${classes.gallery} ${large && classes['gallery-large']}`}>
                {images &&
                    images.map((image, i) => (
                        <Image key={i} rec={image} type="gallery" onImageClick={() => onImageClick(i)}/>
                    ))}
            </section>
        </Fragment>
    );
};

export default Gallery;
