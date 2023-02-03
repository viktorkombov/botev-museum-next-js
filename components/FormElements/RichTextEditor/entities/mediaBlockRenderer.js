import React from "react";
import Image from "../../../UI/Image";

export const mediaBlockRenderer = block => {
    if (block.getType() === "atomic") {
        return {
            component: Media,
            editable: false
        };
    }

    return null;
};

const ImageComponent = props => {
    if (!!props.rec) {
        return (
            <div style={{ maxWidth: '450px' }}>
                <Image
                    type="post"
                    rec={{ src: 'http://localhost:5000/' + props.rec.src }}
                />
                <div className="image-title">
                    {props.rec.alt}
                </div>
            </div>
        );
    }
    return null;
};

const Media = props => {
    const entity = props.contentState.getEntity(props.block.getEntityAt(0));
    const { src, alt } = entity.getData();
    const type = entity.getType();

    let media;

    if (type === "IMAGE") {
        media = <ImageComponent rec={{ src, alt }} />;
    }

    return media;
};