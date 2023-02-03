
import NavDrawerMobile from '@/components/UI/NavDrawerMobile';
import ScrollToTop from '@/components/UI/ScrollToTop';
import { Fragment, useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import classes from './layout.module.scss';

function Layout(props) {
    const [lang, setLang] = useState('bg');
    const [mobileNavigationIsShown, setMobileNavigationIsShown] = useState(false);

    return (
        <Fragment>
            {mobileNavigationIsShown && <NavDrawerMobile onClose={hideMobileNavigation} />}
            <Header />
            <main>{props.children}</main>
            <div className={classes['fake-footer']}></div>
            <ScrollToTop />
            <Footer lang={lang} />
        </Fragment>
    );
}

export default Layout;