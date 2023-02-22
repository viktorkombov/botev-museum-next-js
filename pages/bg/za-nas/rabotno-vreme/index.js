import { Fragment } from 'react';
import FloatingImagesPage from '@/components/Layouts/FloatingImagesPage/FloatingImagesPage';
import Post from '@/components/Layouts/Post';
import PostBody from '@/components/Layouts/Post/PostBody';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import Delimiter from '@/components/UI/Delimiter';
import houseMuseumIMG from '@/assets/uploads/muzey-1.jpg';
import PostAsideWrapper from '@/components/Layouts/Post/PostAsideWrapper';
import { aboutUsCardsContent } from '@/utils/data';
import SEO from '@/components/SEO/SEO';

function WorkingHours() {
    const pageTitle = 'Работно време';
    return (
        <Fragment>
            <SEO
                title={pageTitle}
                description="Работно време на Национален музей „Христо Ботев” - гр. Калофер"
                image={houseMuseumIMG.src}
                keywords="работно време на къща музей христо ботев, работно време калофер, работно време музей христо ботев"
            />
            <CarouselBootstrap items={[{ src: houseMuseumIMG.src, title: pageTitle }]}></CarouselBootstrap>
            <Post>
                <PostBody history={{ nachalo: 'Начало', null: 'За нас', pageTitle }}>
                    <FloatingImagesPage withoutStyledFirstLetter>
                        <Fragment>
                            <h2>{pageTitle}</h2>
                            <div style={{ paddingBottom: '2rem', position: 'relative' }}>
                                <p><strong>Лятно работно време</strong></p>
                                <p>8.30 ч. – 17.30 ч.</p>
                                <p><i>Касата спира да продава билети в 17.00 ч. До 17.30 ч. посетителите напускат сградите и  територията на музея.</i></p>
                                <Delimiter fullWidth />
                            </div>
                            <div style={{ padding: '2rem 0', position: 'relative' }}>
                                <p><strong>Зимно работно време</strong></p>
                                <p>8.30 ч. – 17.00 ч.</p>
                                <p><i>Касата спира да продава билети в 16.30 ч. До 17.00 ч. посетителите напускат сградите и  територията на музея.</i></p>
                                <Delimiter fullWidth />
                            </div>
                            <div style={{ padding: '2rem 0 1rem 0', position: 'relative' }}>
                                <p><strong>Mузеят работи без почивен ден!</strong></p>
                            </div>
                            <p><strong>МУЗЕЯТ НЕ РАЗПОЛАГА СЪС СЪОРЪЖЕНИЯ ЗА  ДОСТЪП НА ПОСЕТИТЕЛИ СЪС СПЕЦИФИЧНИ (ДОПЪЛНИТЕЛНИ) ПОТРЕБНОСТИ!</strong></p>
                        </Fragment>
                    </FloatingImagesPage>
                </PostBody>
                <PostAsideWrapper cardsData={aboutUsCardsContent} currentPageTitle={pageTitle} />

            </Post>
        </Fragment>

    );
}

export default WorkingHours;