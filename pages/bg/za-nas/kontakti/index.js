import { FacebookRounded } from '@mui/icons-material';
import { Fragment } from 'react';
import TwoColumnsView from '@/components/Layouts/TwoColumnsView';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import IconRounded from '@/components/UI/IconRounded';
import classes from './Contacts.module.scss';
import houseMuseumIMG from '@/assets/uploads/muzey-7.jpg';
import SEO from '@/components/SEO/SEO';

function Contacts() {
    const pageTitle = 'Контакти';
    return (
        <Fragment>
            <SEO
                title={pageTitle}
                description="Контакти - Музей „Христо Ботев”"
                image={houseMuseumIMG.src}
                keywords="музей христо ботев контакти"
            />
            <CarouselBootstrap items={[{ src: houseMuseumIMG.src, title: pageTitle }]}></CarouselBootstrap>
            <TwoColumnsView history={{ nachalo: 'Начало', null: 'За нас', pageTitle: pageTitle }}>
                <h2>{pageTitle}</h2>
                <Fragment>
                    <p><strong>Адрес:</strong> 4370 Калофер, ул. „Христо Ботев” № 5</p>
                    <p><strong>тел/факс:</strong> 03133/52-71 – екскурзоводи</p>
                    <p><strong>тел.</strong> 03133/54-07 – директор</p>
                    <p><strong>моб. тел.</strong> 088 666 38 38</p>
                    <p><strong>e-mail:</strong> musei_botev@abv.bg</p>
                    <br />
                    <p><strong>Социални мрежи:</strong></p>
                    <ul className={classes['social-networks-links']}>
                        <li className={classes['icon-list-item']}><IconRounded link="https://www.facebook.com/muzeibotev" icon={<FacebookRounded />} large /></li>
                    </ul>
                </Fragment>
                <iframe width="100%" height="300" style={{ border: 0 }} loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJO7O5TAW7qUARjnOnBrBd1g0&key=AIzaSyBXvSkO_vTWQzKm8gANoDT1i3j7XS80p9E"></iframe>
            </TwoColumnsView>
        </Fragment>

    );
}

export default Contacts;