import { ExpandMore } from '@mui/icons-material';
import  Link from 'next/link';
import DropDown from '../DropDown';
import classes from './NavBarDropDown.module.scss';

const NavBarDropDown = ({ dropDownItems }) => {
    const buttonText = dropDownItems.name;
    const classList = dropDownItems.classList;
    const items = dropDownItems.items;
    return (
        <DropDown activeClass={classList.active}>
            <span className={classList.toggleWrapper}>
                <span className={classList.textItem}>{buttonText}</span>
                <span className={classList.dropDownArrow}>
                    <ExpandMore style={{ verticalAlign: 'top'}}  />
                </span>
            </span>
            {items.map((item, i) => <span data-link={item.link} key={item.name} >{item.name}</span>)}
        </DropDown>
    );
}

export default NavBarDropDown;