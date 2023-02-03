
import PostSummary from '../../UI/PostSummary';
import img from '../../../images/watch.jpg';
import image from '../../../images/museum.jpg';
import image1 from '../../../images/uchilishte.jpg';
import classes from './Aside.module.scss';
import Card from '../../UI/Card';

const Aside = props => {
    const { children } = props;
    return (
        <section className={classes.aside}>
            <section className={classes.body}>
                {children}
               
            </section>
        </section>
    );
}

export default Aside;