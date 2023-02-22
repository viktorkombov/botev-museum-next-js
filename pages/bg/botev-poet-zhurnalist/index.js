import TwoCardsView from '@/components/Layouts/TwoCardsView';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import PageTransition from '@/components/UI/PageTransition';
import { uploadsUrl } from '@/utils/data';
import classes from './BotevPoetPublisher.module.scss';
import poet_0_img from '@/assets/uploads/vestnik-zname.jpg';
import poet_1_img from '@/assets/uploads/proshtalno-pismo.png';
import SEO from '@/components/SEO/SEO';
import { Fragment } from 'react';

function BotevPoetPublisher() {
    const pageTitle = 'Ботев - поет и публицист';

    const images = [
        { src: poet_0_img.src, title: pageTitle },
        { src: poet_1_img.src },
    ];

    return (
        <Fragment>
            <SEO
                title={pageTitle}
                description="„Само онзи, който е свободен, само той може да се нарече човек в пълня смисъл на думата; а който умре за свободата, той не умира само за своето отечество, а за сичкия свят.”"
                image={images[0].src}
                keywords="Ботев поет, ботев публицист, ботев вестници, ботев стихотворения"
            />
            <CarouselBootstrap items={[images[0]]}></CarouselBootstrap>

            <TwoCardsView className={classes.wrapper}
                links={['/bg/botev-poet-zhurnalist/stihotvorenia', '/bg/botev-poet-zhurnalist/publitsistika']}
                images={[images[1].src, images[0].src]}
                titles={['Ботеви стихотворения', 'Ботеви вестници']}
                contents={['Вижте всички стихотворения на Христо Ботев', 'Вестниците, с които Христо Ботев е свързан']}
            >
                <h2>Ботев - поет и публицист</h2>
                <section className={classes.content}>
                    <p><i>
                        „Само онзи, който е свободен, само той може да се нарече човек в пълня смисъл на думата; а който умре за свободата, той не умира само за своето отечество, а за сичкия свят.”
                    </i></p>
                    <p>Макар и малко на брой, словесните и духовните ценности, които ни е завещал Ботев, не само запазват, но и увеличават значението си във времето. В неговото творчество има всичко - могъщия размах на размирния ХІХ век, страданията на поробения ни народ, надеждите и въжделенията на свободомислещите хора. В гениалната му поезия и огнена публицистика идеите за свободата, патриотизма, вярата в силата на разума имат не само национално, а общочовешко измерение.</p>
                    <p>През краткия си житейски път – 28 години - Христо Ботев написва 20 стихотворения и издава 4 самостоятелни вестника.  Христо Ботев е съредактор и най-ценен сътрудник на Любен  Каравелов при издаването на вестниците „Свобода” и „Независимост”.</p>
                </section>
            </TwoCardsView>
        </Fragment>
    );
}

export default BotevPoetPublisher;