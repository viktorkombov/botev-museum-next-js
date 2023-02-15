import classes from "./CarouselBootstrap.module.scss";
import Carousel from "react-bootstrap/Carousel";
import { Fragment, useEffect, useState } from "react";
import Card from "../Card";
import Button from "../Button/Button";
import { Info, KeyboardDoubleArrowDown } from "@mui/icons-material";
import CarouselImg from "./CarouselImg";
import Link from 'next/link';
import LoadingSpinner from "../LoadingSpinner";

const CarouselBootstrap = (props) => {
  const [index, setIndex] = useState(props.index);
  const [isLoading, setIsLoading] = useState(true);

  const { type, items } = props;

  useEffect(() => {
    let preloaderImg = document.createElement("img");
    preloaderImg.src = items[0].src;
    const loadHandler = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    }
    preloaderImg.addEventListener('load', loadHandler);
    preloaderImg.addEventListener('error', loadHandler);
  }, []);

  const slide = type !== 'gallery';

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className={`${classes.wrapper} ${type === 'gallery' ? classes.gallery : ''}`}>
      {isLoading && <LoadingSpinner asOverlay positionAbsolute={type === 'gallery'} />}

      <Carousel
        className={`${classes.carousel} ${(type !== 'gallery' || items.length === 1) ? 'without-indicators' : ''} ${items.length === 1 ? 'without-arrows' : ''}`}
        pause={"hover"}
        fade
        slide={slide}
        activeIndex={index}
        onSelect={handleSelect}
      >
        {items.map((item, i) => (
          <Carousel.Item className={classes.item} key={i}>
            <CarouselImg src={item.src} type={type} />
            {/* <video style={{ objectFit: 'cover', height: '100%', width: '100%' }} src="https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/blurry-trees.mov" autoPlay loop playsinline muted></video> */}
            {type !== 'gallery' && <div className={classes.backdrop}></div>}
            {(type !== 'gallery') ? <div className={classes['scroll-button-wrapper']}>
              <div>
                <a href="#content">
                  <KeyboardDoubleArrowDown fontSize="large" />
                  <p>{!props.en ? 'Към съдържанието' : 'Go to the content'}</p>
                </a>
              </div>
            </div> : <div className={classes['gallery-caption-wrapper']}></div>}

            <Carousel.Caption>
              {!props.card &&
                <h1 className={`${classes.title} ${classes[type]}`}>
                  {item.title?.length > 100 ? `${item.title.substring(0, 100)}...` : item.title}
                </h1>}
              {props.card && (
                <>
                  <div className={classes['card-wrapper']}>
                    <Card
                      link={props.card.link}
                      width="350px"
                      title={props.card.title}
                      content={props.card.content}
                      button={props.card.button}
                    />
                  </div>
                  {item.title && (<Fragment><div className={classes.summary}>
                    <h2>{item.title}</h2>
                    <p>
                      {item.subtitle}
                    </p>
                    <Link href={item.link}><Button>Виж повече...</Button></Link>
                  </div>
                    <div className={classes['summary-info-button']}><Info fontSize="large" /></div>
                  </Fragment>
                  )}
                </>
              )}
              {/* <Card
            width="500px"
            title={titles[i]}
            content="Разгледайте нашия сайт, за да научите повече за живота и делото на Христо Ботев."
            button="Виж повече..."
            cardClasses={['card-light']}
          /> */}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselBootstrap;
