import { Fragment } from 'react';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import Delimiter from '@/components/UI/Delimiter';
import SectionHeader from '@/components/UI/SectionHeader/SectionHeader';
import TwoColumnsTable from '@/components/UI/TwoColumnsTable';
import classes from './InformationForVisitorsEN.module.scss';
import info_0_img from '@/assets/uploads/muzey-10.jpg';
import SEO from '@/components/SEO/SEO';

function InformationForVisitorsEN({ ticketsTableData }) {
    const pageTitle = 'Information for visitors';

    const images = [
        { src: info_0_img.src, title: pageTitle }
    ];

    return (
        <Fragment>
            <SEO
                title={pageTitle}
                description="Working hours and tickets and prices."
                image={images[0].src}
                keywords="hristo botev, hristo botev museum tickets, hristo botev museum working hours"
            />
            <CarouselBootstrap items={[images[0]]} en></CarouselBootstrap>

            <SectionHeader id="content"><h2>Working hours and tickets and prices</h2></SectionHeader>
            <section className={classes.content}>
                <h3>Working hours</h3>
                <div style={{ padding: '2rem 0', position: 'relative' }}>
                    <p><strong>April - October</strong></p>
                    <p>8.30 – 17.30</p>
                    <Delimiter fullWidth />
                </div>
                <div style={{ padding: '2rem 0', position: 'relative' }}>
                    <p><strong>November - March</strong></p>
                    <p>8.30 – 17.00</p>
                    <Delimiter fullWidth />
                </div>
                <div style={{ padding: '2rem 0' }}>
                    <TwoColumnsTable data={ticketsTableData} title="Tickets and prices" />
                </div>
            </section>
        </Fragment>
    );
}

export function getStaticProps() {
    const createTicketsTableData = (Ticket, Price) => {
        return { Ticket, Price };
    };

    const ticketsTableData = [
        createTicketsTableData('Students', '3,00 BGN'),
        createTicketsTableData('Standard ticket', '5,00 BGN'),
        createTicketsTableData('Pensioners', '3,00 BGN'),
        createTicketsTableData('Family ticket', ' 12,00 BGN'),
        createTicketsTableData('Children under 7 years old and people with disabilities visit the museum free of charge.', 'FREE'),
        createTicketsTableData('Guided tour - 30 min.', '20,00 BGN'),
        createTicketsTableData('Guided tour - 60 min.', '30,00 BGN'),
        createTicketsTableData('Documentary movie', '10,00 BGN')
    ]
    return {
        props: {
            ticketsTableData: ticketsTableData
        }
    }
}

export default InformationForVisitorsEN;