import { Fragment } from 'react';
import { Children } from 'react';
import History from '../History';
import classes from './TwoColumnsView.module.scss';

const TwoColumnsView = props => {
    const { table } = props;
    const children = Children.toArray(props.children);
    return (
        <Fragment>
            <History history={props.history} />
            {/* <SectionHeader className={table && classes.header}>{children[0]}</SectionHeader> */}
            <div className={`${classes.container} ${table && classes['with-table']}`}>
                <div className={classes.content}>
                    {children[1]}
                </div>
                <div className={classes.map}>
                    {children[2]}
                </div>
            </div>
        </Fragment>
    )
}

export default TwoColumnsView;