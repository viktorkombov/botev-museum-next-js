import Card from '../Card';
import classes from './SideImageCard.module.scss';
import image from '../../../images/museum.jpg'
import Link from 'next/link';
import Image from 'next/image';

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
                        <button><span className={classes['button-content']}>Виж повече</span><span style={{ marginLeft: '1rem' }}><i class="fa fa-info-circle" aria-hidden="true"></i></span></button>
                    </section>
                </section>
                <section className={classes['image-wrapper']}>
                    <div className={classes['image']}>
                        <Image src={props.image} alt="" fill />
                    </div>
                </section>
            </div>
        </Link>
    );
}

export default SideImageCard;