import { Fragment } from 'react';
import FloatingImagesPage from '@/components/Layouts/FloatingImagesPage/FloatingImagesPage';
import Post from '@/components/Layouts/Post';
import PostAsideWrapper from '@/components/Layouts/Post/PostAsideWrapper';
import PostBody from '@/components/Layouts/Post/PostBody';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';

import { aboutUsCardsContent } from '@/utils/data';
import houseMuseumIMG from '@/assets/uploads/muzey-5.jpg';
import SEO from '@/components/SEO/SEO';

function Partners() {
    const pageTitle = 'Партньори';
    return (
        <Fragment>
            <SEO
                title={pageTitle}
                description="Партньорите на Музей „Христо Ботев”"
                image={houseMuseumIMG.src}
                keywords="музей христо ботев партньори"
            />
            <CarouselBootstrap items={[{ src: houseMuseumIMG.src, title: pageTitle }]}></CarouselBootstrap>
            <Post>
                <PostBody history={{ nachalo: 'Начало', null: 'За нас', pageTitle: pageTitle }}>
                    <FloatingImagesPage>
                        <Fragment>
                            <p>С безценните си реликви, богати фондове и музейни специалисти Национален музей „Христо Ботев” се е превърнал в утвърден център на ботевознанието. Музеят си сътрудничи с различни сродни музеи в страната, научни институти, държавни и обществени организации (Общонародна фондация „Христо Ботйов”, Общобългарски комитет и Фондация „Васил Левски” и др.). Музеят е включен е и в различни специализирани световни каталози - Museums of The World, The World of Learning и др.</p>
                        </Fragment>
                    </FloatingImagesPage>

                </PostBody>
                <PostAsideWrapper cardsData={aboutUsCardsContent} currentPageTitle={pageTitle} />
            </Post>
        </Fragment>

    );
}

export default Partners;