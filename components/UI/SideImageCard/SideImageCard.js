import Card from '../Card';
import classes from './SideImageCard.module.scss';
import image from '../../../images/museum.jpg'
import Link from 'next/link';
import Image from 'next/image';
import Button from '../Button';

const SideImageCard = props => {
    const { link } = props;
    const sideImageCardClasses = `${classes['card']} ${classes['right']}`;
    return (
        <Link href={link}>
            <div className={sideImageCardClasses} style={{ height: '100%' }}>
                <section className={classes.content}>
                    <section className={classes['title-wrapper']}>
                        <h4 className={classes.title}>
                            {props.title}
                        </h4>
                    </section>
                    <section className={classes['content-wrapper']}>
                        <p>
                            {props.content}
                        </p>
                    </section>
                    <section className={classes['button-wrapper']}>
                        {/* <button onClick={props.onButtonClicked}>
                        {props.button}
                    </button> */}
                        <Button className={classes['button-content']}>Виж още...</Button>
                    </section>
                </section>
                <section className={classes['image-wrapper']}>
                    <div className={classes['image']}>
                        <Image src={props.image} alt={props.title} fill />
                    </div>
                </section>
            </div>
        </Link>
    );
}

export default SideImageCard;