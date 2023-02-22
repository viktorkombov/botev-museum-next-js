import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { navigationItems } from '../../../utils/data'
import { Link, useLocation, useNavigate } from "react-router-dom";
import IconRounded from "../IconRounded";
import classes from './NavDrawer.module.scss';
import { FacebookRounded, Phone } from "@mui/icons-material";

const NavDrawer = ({ closeDrawer, toggleDrawer, open }) => {
    const [lang, setLang] = React.useState('bg');
    const location = useLocation();
    const navigate = useNavigate();

    React.useEffect(() => {
        const currLang = location.pathname.split('/')[1];
        if (lang !== location.pathname.split('/')[1]) {
            setLang(currLang);
        }
    }, [location]);

    const onLangIconClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const path = lang === 'en' ? '/bg/nachalo' : '/en/home';
        setLang(lang === 'en' ? 'bg' : 'en');
        navigate(path);
    }

    const accordions = ['museum', 'botev', 'kalofer', 'aboutUs'];

    return (
        <Drawer className="drawer" anchor="left" open={open} onClose={toggleDrawer(false)} transitionDuration={0}>
            <Box className="drawer-box" sx={{ width: '370px', "*": { fontFamily: '"Comfortaa", sans-serif !important' } }} role="presentation">
                <List>
                    <List>
                        <ListItem>
                            <Box>
                                <ul className={classes['social-networks-links']}>
                                    <li className={classes['icon-list-item']}><IconRounded link="telephone" icon={<Phone />} /></li>
                                    <li className={classes['icon-list-item']}><IconRounded link="facebook" icon={<FacebookRounded />} /></li>
                                    <li className={classes['icon-list-item']}><IconRounded icon={lang === 'bg' ? 'en' : 'bg'} lang onClick={onLangIconClick} /></li>
                                </ul>
                            </Box>
                        </ListItem>
                        {lang !== 'bg' ? (<React.Fragment>
                            <ListItem>
                                <ListItemButton component={Link} href="/bg/nachalo">
                                    <ListItemText primary="Начало" />
                                </ListItemButton>
                            </ListItem>
                            {accordions.map(accordion => <ListItem key={accordion}>
                                <Accordion
                                    square
                                    disableGutters
                                    className="accordion"
                                    TransitionProps={{ timeout: 0 }}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography sx={{ pr: "2rem" }}>{navigationItems[accordion].name}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <List>
                                            {navigationItems[accordion].items.map(item => <ListItem key={item.name} disablePadding>
                                                <ListItemButton component={Link} href={item.link}>
                                                    <ListItemText primary={item.name} />
                                                </ListItemButton>
                                            </ListItem>)}
                                        </List>
                                    </AccordionDetails>
                                </Accordion>
                            </ListItem>)}
                            <ListItem >
                                <ListItemButton component={Link} href="/bg/boteva-cheta">
                                    <ListItemText primary="Ботева чета" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem >
                                <ListItemButton component={Link} href="/bg/botev-poet-publitsist">
                                    <ListItemText primary="Ботев - поет и публицист" />
                                </ListItemButton>
                            </ListItem>
                        </React.Fragment>) : 
                        (<React.Fragment>
                            <ListItem>
                                <ListItemButton component={Link} href="/en/home">
                                    <ListItemText primary="Home" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton component={Link} href="/en/information-for-visitors">
                                    <ListItemText primary="Information for visitors" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton component={Link} href="/en/contacts">
                                    <ListItemText primary="Contacts" />
                                </ListItemButton>
                            </ListItem>
                        </React.Fragment>)
                        }
                    </List>
                </List>
            </Box>
        </Drawer>
    );
};
export default NavDrawer;
