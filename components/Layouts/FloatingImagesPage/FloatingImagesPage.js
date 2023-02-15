import { Children, Fragment } from 'react';
import classes from './FloatingImagesPage.module.scss';

const FloatingImagesPage = props => {
    const { withoutStyledFirstLetter } = props;
    const children = Children.toArray(props.children);

    return (
        <Fragment>
            <section className={`${classes.container} ${withoutStyledFirstLetter && classes['without-styled-first-letter']}`}>
                {children[0]}
                {children[1]}
            </section>
        </Fragment>
    );

}

export default FloatingImagesPage;