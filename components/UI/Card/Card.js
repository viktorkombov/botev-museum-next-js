import { AccessTime, RemoveRedEye } from '@mui/icons-material';
import Link from 'next/link';
import { convertToLocalDate } from '../../../utils/functions';
import classes from './Card.module.scss';

const Card = props => {
    const { media, link } = props;
    const cardClasses = props.cardClasses?.length ? props.cardClasses.map(cardClass => classes[cardClass]) : [];
    return (
        <Link href={link}><div className={`${classes.card} ${media && classes['card-media']} ${props.light && classes['card-light']} ${cardClasses.join(' ')}`} style={{
            backgroundImage: props.img ? `url(${props.img})` : 'none',
            backgroundSize: 'cover',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: props.width || '100%', maxWidth: props.maxWidth || '100%'
        }}>
            {props.img && <section className={classes.header}>
                <div className={classes['backdrop-gradient']}>
                </div>
            </section>}
            <section className={classes.body}>
                <section className={classes['title-wrapper']}>
                    <h4 className={classes.title}>
                        {props.title}
                    </h4>
                </section>
                <section className={`${classes['content-wrapper']} ${props.count ? classes['not-last-paragraph'] : ''}`}>
                    <p className={classes.content}>
                        {props.content.length > 75
                            ? props.content.substring(0, 75) + '...'
                            : props.content}
                    </p>
                </section>
                {(props.count || props.count === 0) && <section className={classes.count}>
                    <p>
                        <span><AccessTime /><span>{convertToLocalDate(props.date)}</span></span>
                        <span><RemoveRedEye /><span>{props.count}</span></span>
                    </p>
                </section>}
                <section className={classes['button-wrapper']}>
                    <button onClick={props.onButtonClicked}>
                        {props.button}
                    </button>
                </section>
            </section>
        </div>
        </Link>
    );
}

export default Card;