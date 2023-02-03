import { Fragment } from "react";
import Card from "../../../UI/Card";

const PostAsideWrapper = props => {
    const { cardsData, currentPageTitle } = props;

    return (
        <Fragment>
            <h3>Виж още</h3>
            {cardsData.map(card =>
                card.title !== currentPageTitle && (<Card
                    light
                    key={card.id}
                    maxWidth="350px"
                    title={card.title}
                    content={card.content}
                    link={card.link}
                    button="Виж повече..."
                />
                )
            )}
        </Fragment>
    )
}

export default PostAsideWrapper;