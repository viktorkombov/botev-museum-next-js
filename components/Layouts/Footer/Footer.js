import { Email, FacebookRounded, Instagram, Phone, Room, YouTube } from '@mui/icons-material';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { navigationItems, navigationItemsWitoutDropdowns } from '../../../utils/data';
import { useResizeObserver } from '../../../utils/userResizeObserver';
import IconRounded from '../../UI/IconRounded';
import classes from './Footer.module.scss';

const Footer = props => {
    const lang = props.lang;
    const ref = useRef(null);
    // Optional callback to access the full DOMRect object if required.
    const optionalCallback = (entry) =>
        document.body.style.setProperty('--footer-height', (entry.height + 64) + 'px');

    // Access the width and the height returned from the observed element.
    useResizeObserver(ref, optionalCallback);

    return (
        <footer className={classes.footer} ref={ref}>
            {lang !== 'en' ? (<div className={classes.container}>
                <section className={classes['find-us']}>
                    <div className={classes['social-networks']}>
                        <h5>Свържете се с нас</h5>
                        <ul className={classes['social-networks-links']}>
                            <li className={classes['icon-list-item']}><IconRounded link="telephone" icon={<Phone />} large /></li>
                            <li className={classes['icon-list-item']}><IconRounded link="facebook" icon={<FacebookRounded />} large /></li>
                            <li className={classes['icon-list-item']}><IconRounded link="youtube" icon={<YouTube />} large /></li>
                            <li className={classes['icon-list-item']}><IconRounded link="instagram" icon={<Instagram />} large /></li>
                        </ul>
                    </div>
                    <div>
                        <ul className={classes.contacts}>
                            <li><Room /><span>Адрес: гр. Калофер, пл. "Христо Ботев" 1</span></li>
                            <li><Phone /><span>Телефон: 03353 23 21</span></li>
                            <li><Email /><span>E-mail: musei_botev@abv.bg</span></li>
                        </ul>
                    </div>
                </section>
                <section className={classes['footer-nav']}>
                    <section className={classes['main-nav']}>
                        <div>
                            <h5>{navigationItems.museum.name}</h5>
                            <ul>
                                {navigationItems.museum.items.map(item => <li key={item.link}><Link href={item.link}>{item.name}</Link></li>)}
                            </ul>
                        </div>
                        <div>
                            <h5>{navigationItems.botev.name}</h5>
                            <ul>
                                {navigationItems.botev.items.map(item => <li key={item.link}><Link href={item.link}>{item.name}</Link></li>)}
                            </ul>
                        </div>
                        <div>
                            <h5>{navigationItems.kalofer.name}</h5>
                            <ul>
                                {navigationItems.kalofer.items.map(item => <li key={item.link}><Link href={item.link}>{item.name}</Link></li>)}
                            </ul>
                        </div>
                        <div>
                            <h5>{navigationItems.aboutUs.name}</h5>
                            <ul>
                                {navigationItems.aboutUs.items.map(item => <li key={item.link}><Link href={item.link}>{item.name}</Link></li>)}
                            </ul>
                        </div>
                    </section>
                    <ul className={classes['news']}>
                        <li><Link href={navigationItemsWitoutDropdowns.botevaCheta.botevaCheta.link}>Ботва чета</Link></li>
                        <li><Link href={navigationItemsWitoutDropdowns.botevPoetJournalist.botevPoetJournalist.link}>Ботев - поет и публицист</Link></li>
                        <li><Link href="/news">Новини</Link></li>
                    </ul>
                </section>
            </div>) : (<div className={classes.container}>
                <section className={`${classes['find-us']} ${classes['find-us--en']}`}>
                    <div className={classes['social-networks']}>
                        <h5>Contacts</h5>
                        <ul className={classes['social-networks-links']}>
                            <li className={classes['icon-list-item']}><IconRounded link="telephone" icon={<Phone />} large /></li>
                            <li className={classes['icon-list-item']}><IconRounded link="facebook" icon={<FacebookRounded />} large /></li>
                            <li className={classes['icon-list-item']}><IconRounded link="youtube" icon={<YouTube />} large /></li>
                            <li className={classes['icon-list-item']}><IconRounded link="instagram" icon={<Instagram />} large /></li>
                        </ul>
                    </div>
                    <div>
                        <ul className={classes.contacts}>
                            <li><Room /><span>Address: 4370 Kalofer, Hristo Botev Str. 5</span></li>
                            <li><Phone /><span>Phone number: 03133/52-71</span></li>
                            <li><Email /><span>E-mail: musei_botev@abv.bg</span></li>
                        </ul>
                    </div>
                </section>
            </div>)}
        </footer >
    );
}

export default Footer;