import { Fragment } from 'react';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import Delimiter from '@/components/UI/Delimiter';
import SectionHeader from '@/components/UI/SectionHeader/SectionHeader';
import TwoColumnsTable from '@/components/UI/TwoColumnsTable';
import classes from './InformationForVisitorsEN.module.scss';

function InformationForVisitorsEN({ ticketsTableData }) {

    return (
        <Fragment>
            <CarouselBootstrap en items={[{ src: "https://muzeibotev.com/clients/152/files/images/PC280963.JPG", title: "Information for visitors" }]}></CarouselBootstrap>
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
                    <p>8.30 ч. – 17.00 ч.</p>
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
        createTicketsTableData('Students', '2,00 BGN'),
        createTicketsTableData('Standard ticket', '4,00 BGN'),
        createTicketsTableData('Pensioners', '2,00 BGN'),
        createTicketsTableData('Family ticket', ' 9,00 BGN'),
        createTicketsTableData('Children under 7 years old and people with disabilities visit the museum free of charge.', 'FREE'),
        createTicketsTableData('Guided tour - 30 min.', '15,00 BGN'),
        createTicketsTableData('Guided tour - 60 min.', '20,00 BGN'),
        createTicketsTableData('Documentary movie', '5,00 BGN')
    ]
    return {
        props: {
            ticketsTableData: ticketsTableData
        }
    }
}

export default InformationForVisitorsEN;