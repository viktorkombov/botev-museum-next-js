import { Link } from '@mui/material';
import { Fragment } from 'react';
import FloatingImage from '@/components/Layouts/FloatingImagesPage/FloatingImage';
import FloatingImagesPage from '@/components/Layouts/FloatingImagesPage/FloatingImagesPage';
import Post from '@/components/Layouts/Post';
import PostAside from '@/components/Layouts/Post/PostAside';
import PostAsideWrapper from '@/components/Layouts/Post/PostAsideWrapper';
import PostBody from '@/components/Layouts/Post/PostBody';
import Card from '@/components/UI/Card';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import Delimiter from '@/components/UI/Delimiter';
import Gallery from '@/components/UI/Gallery';
import TwoColumnsTable from '@/components/UI/TwoColumnsTable';
import { aboutUsCardsContent, uploadsUrl } from '@/utils/data';
import classes from './InformationForVisitors.module.scss';

function InformationForVisitors({ ticketsTableData, rentTableData }) {
    const pageTitle = 'Дейности и услуги';
    return (
        <Fragment>
            <CarouselBootstrap items={[{ src: `${uploadsUrl}/muzey-9.jpg`, title: pageTitle }]}></CarouselBootstrap>
            <Post>
                <PostBody history={{ nachalo: 'Начало', null: 'За нас', pageTitle: pageTitle }}>
                    <div style={{ paddingBottom: '2rem' }}>
                        <TwoColumnsTable data={ticketsTableData} title="ВХОДНИ ТАКСИ И БЕСЕДИ" />
                    </div>
                    <div style={{ paddingBottom: '2rem' }}>
                        <TwoColumnsTable data={rentTableData} title="НАЕМ НА ЛЕКЦИОННА ЗАЛА ЗА ПРОВЕЖДАНЕ НА СЪБИТИЯ ОТ ВЪНШНИ ЛИЦА И ОРГАНИЗАЦИИ:" />
                    </div>
                    <div style={{ paddingBottom: '1rem' }}>
                        <p>Музеят разполага с лекционна зала с 60 места и щанд за сувенири.</p>
                    </div>
                    <div style={{ paddingBottom: '2rem' }}>
                        <p>Входните такси за всички музейни обекти се заплащат на касата на Национален музей „Христо Ботев”.</p>
                    </div>
                    <div style={{ paddingBottom: '2rem' }}>
                        <p style={{ whiteSpace: 'pre-line' }}><strong>УВАЖАЕМИ ПОСЕТИТЕЛИ,<br />
                            Церемониите по тържественото връчване на свидетелства на учащите се извършва ИЗВЪН СГРАДАТА на Даскал Ботевото училище (Музей на просветното дело)!</strong></p>
                    </div>
                    <div style={{ paddingBottom: '1rem' }}>
                        <p><strong>ГОДИШЕН ОТЧЕТ ЗА  ДЕЙНОСТТА НА НМ &quot;ХРИСТО БОТЕВ&quot;, КАЛОФЕР ЗА 2016 Г. (<Link>ТУК</Link>)</strong></p>
                    </div>
                    <div>
                        <p><strong>ГОДИШЕН ОТЧЕТ ЗА  ДЕЙНОСТТА НА НМ &quot;ХРИСТО БОТЕВ&quot;, КАЛОФЕР ЗА 2017 Г. (<Link>ТУК</Link>)</strong></p>
                    </div>
                </PostBody>
                <PostAsideWrapper cardsData={aboutUsCardsContent} currentPageTitle={pageTitle} />

            </Post>
        </Fragment>

    );
}

export function getStaticProps() {
    const createTicketsTableData = (Услуга, Цена) => {
        return { Услуга, Цена };
    };
    const createRentTableData = (Услуга, Цена) => {
        return { Услуга, Цена };
    };

    const ticketsTableData = [
        createTicketsTableData('Учащи се', '2,00 лв.'),
        createTicketsTableData('Не учащи', '4,00 лв.'),
        createTicketsTableData('Пенсионери', '2,00 лв'),
        createTicketsTableData('Семеен билет (родители с лица в учебна възраст)', ' 9,00 лв.'),
        createTicketsTableData('Лица, под 7 години  и такива в неравностойно положение', 'БЕЗПЛАТНО'),
        createTicketsTableData('Екскурзоводска беседа  до 30мин', '15,00 лв'),
        createTicketsTableData('Специализирана екскурзоводска беседа  до 60мин', '20,00 лв'),
        createTicketsTableData('Видеофилм', '5,00 лв')
    ]

    const rentTableData = [
        createRentTableData('Ползване на залата с климатизация', '50,00 лв. / за 1 час'),
        createRentTableData('Ползване на залата без климатизация', '30,00 лв. / за 1 час'),
        createRentTableData('Ползване на наша мултимедия в нея', '20,00 лв. / за 1 час')
    ]
    return {
        props: {
            ticketsTableData,
            rentTableData
        }
    }
}

export default InformationForVisitors;