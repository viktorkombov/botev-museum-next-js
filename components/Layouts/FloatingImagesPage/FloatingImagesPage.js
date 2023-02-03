import { Children } from 'react';
import { Fragment } from 'react';
import Gallery from '../../UI/Gallery';
import Image from '../../UI/Image';
import SectionHeader from '../../UI/SectionHeader/SectionHeader';
import History from '../History';
import classes from './FloatingImagesPage.module.scss';

const FloatingImagesPage = props => {
    const { withoutStyledFirstLetter } = props;
    const children = Children.toArray(props.children);

    return (
        <Fragment>
            {/* <History/> */}
            <section className={`${classes.container} ${withoutStyledFirstLetter && classes['without-styled-first-letter']}`}>
                {children[0]}
                {children[1]}
            </section>
        </Fragment>
    );

}

export default FloatingImagesPage;