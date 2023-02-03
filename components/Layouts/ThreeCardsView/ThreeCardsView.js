import img from '../../../images/inc.jpg';
import image from '../../../images/museum.jpg';
import image1 from '../../../images/uchilishte.jpg';
import Card from '../../UI/Card';

import classes from './ThreeCardsView.module.scss';

const ThreeCardsView = props => {


    return (
        <div className={`${classes['first-section-body']} ${props.className || ''}`}>
            <div className={classes['cards-wrapper']}>
                {props.cards?.map(card => (
                <div className={classes.card}>
                    <Card
                        link={"/bg/novini/" + card.ID} 
                        media
                        img={'http://localhost:5000/' + card.CoverImage}
                        title={card.Title}
                        content={card.Subtitle ? card.Subtitle : 'Калофер - градът на Ботев'}
                        count={card.Count}
                        date={card.Date}
                        button="Виж повече..."
                    />
                </div>
                ))}
            </div>
            {props.children}
        </div>
    )
}

export default ThreeCardsView;