import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Fade from 'react-bootstrap/Fade';
import Link from 'next/link';

import classes from './DropDown.module.scss';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <div
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
    </div>
));

CustomToggle.displayName = 'CustomToggle';

const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
        const [value, setValue] = useState('');

        return (
            <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >
                <ul className={classes["dropdown-items"]}>
                    {React.Children.toArray(children).filter(
                        (child, i) =>
                            (!value || child.props.children.toLowerCase().startsWith(value)) && i !== 0,
                    )}
                </ul>
            </div>
        );
    },
);

CustomMenu.displayName = 'CustomMenu';


const DropDown = props => {
    const [isActive, setIsActive] = useState(false);
    const [show, setShow] = useState(false);

    const showDropdown = (e) => {
        setShow(true);
        setIsActive(true)
    }
    const hideDropdown = e => {
        setShow(false);
        setIsActive(false);
    }

    const onToggle = (show, ui) => {
        setIsActive(show);
    }

    return (
        <Dropdown onToggle={onToggle} className={isActive ? props.activeClass : ''} show={show} onMouseEnter={showDropdown}
            onMouseLeave={hideDropdown} >
            {/* <Dropdown onToggle={onToggle} className={isActive ? props.activeClass : ''}> */}
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                {React.Children.toArray(props.children)[0]}
            </Dropdown.Toggle>
            <Fade in={isActive}>
                <Dropdown.Menu as={CustomMenu} className={classes['dropdown-menu']}>
                    {React.Children.toArray(props.children).map((child, i, array) =>
                        <Dropdown.Item key={i} onClick={hideDropdown} as={Link} href={child.props['data-link']} className={classes['dropdown-item']} eventKey={i}>
                            <span onClick={hideDropdown}>{child}</span></Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Fade>
        </Dropdown>
    );
}

export default DropDown;