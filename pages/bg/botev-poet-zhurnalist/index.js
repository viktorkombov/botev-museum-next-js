import TwoCardsView from '@/components/Layouts/TwoCardsView';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import PageTransition from '@/components/UI/PageTransition';
import { uploadsUrl } from '@/utils/data';
import classes from './BotevPoetPublisher.module.scss';

function BotevPoetPublisher() {
    return (
        <PageTransition>
            <CarouselBootstrap items={[{ src: "https://muzeibotev.com/css/skins/custom/152/images/PC280921.JPG", title: "Ботев - поет и публицист" }]} title="Ботев - поет и публицист" />

            <TwoCardsView className={classes.wrapper}
                links={['/bg/botev-poet-zhurnalist/stihotvorenia', '/bg/botev-poet-zhurnalist/publitsistika']}
                images={[`${uploadsUrl}/muzey-1.jpg`, `${uploadsUrl}/uchilishte-1.jpg`]}
                titles={['Национален музей "Христо Ботев"', 'Даскал Ботево училище']}
                contents={['В него се съхраняват експонати, свързани с живота и делото на Христо Ботев, неговото семейство и съратниците му ... ', ' Училището е изградено по инициатива на Ботьо Петков – бащата на Христо Ботев, изцяло с дарения и доброволната помощ на калоферци ... ']}
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
        </PageTransition>
    );
}

export default BotevPoetPublisher;