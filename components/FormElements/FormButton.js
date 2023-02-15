import React from 'react';
import Link from 'next/link';

import classes from './FormButton.module.scss';

const FormButton = props => {
    const sizeClass = `button--${props.size || 'default'}`;
    const inverseClass = classes[`${props.inverse && 'button--inverse'}`];
    const dangerClass = classes[`${props.danger && 'button--danger'}`];

    const buttonClasses = `${classes.button} ${classes[sizeClass]} ${inverseClass} ${dangerClass}`;

    if (props.href) {
        return (
            <Link
                className={buttonClasses}
                href={props.href}
            >
                {props.children}
            </Link>
        );
    }

    return (
        <button
            className={buttonClasses}
            type={props.type}
            onClick={props.onClick}
            onMouseDown={props.onMouseDown}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
};

export default FormButton;
