
import NavDrawerMobile from '@/components/UI/NavDrawerMobile';
import ScrollToTop from '@/components/UI/ScrollToTop';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import classes from './layout.module.scss';

function Layout(props) {
    const [lang, setLang] = useState('bg');
    const [mobileNavigationIsShown, setMobileNavigationIsShown] = useState(false);

    const router = useRouter();
    useEffect(() => {
        const currLang = router.pathname.split('/')[1];
        if (lang !== router.pathname.split('/')[1]) {
            setLang(currLang)
        }
    }, [router.pathname]);

    const showMobileNavigation = () => {
        setMobileNavigationIsShown(true);
    }

    const hideMobileNavigation = () => {
        setMobileNavigationIsShown(false);
    }

    return (
        <Fragment>
            {mobileNavigationIsShown && <NavDrawerMobile lang={lang} onClose={hideMobileNavigation} />}
            <Header onShowMobileNavigation={showMobileNavigation} lang={lang} />
            <main className={classes.main}>{props.children}</main>
            <div className={classes['fake-footer']}></div>
            <ScrollToTop />
            <Footer lang={lang} />
        </Fragment>
    );
}

export default Layout;