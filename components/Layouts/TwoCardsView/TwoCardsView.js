import SideImageCard from '../../UI/SideImageCard';
import image from '../../../images/museum.jpg';
import image1 from '../../../images/uchilishte.jpg';
import classes from './TwoCardsView.module.scss';
import SectionHeader from '../../UI/SectionHeader/SectionHeader';
import { Children } from 'react';
import Delimiter from '../../UI/Delimiter';

const TwoCardsView = props => {
    const { whiteHeader, className } = props;
    const children = Children.toArray(props.children);
    return (
        <section id="content" className={`${classes['page-wrapper']} ${className ? className : ''}`}>
            <SectionHeader white={whiteHeader}>
                {children[0]}
                {!whiteHeader && <Delimiter white/>}
            </SectionHeader>
            <section className={classes['cards-wrapper']}>
                <div className={classes.card}>
                    <SideImageCard link={props.links[0]} image={props.images[0]} title={props.titles[0]} content={props.contents[0]} />
                </div>
                <div className={classes.card}>
                    <SideImageCard link={props.links[1]} image={props.images[1]} title={props.titles[1]} content={props.contents[1]} />
                </div>
            </section>
            {children[1]}
            {whiteHeader && <Delimiter white/>}
        </section>
    );
}

export default TwoCardsView;