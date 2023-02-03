import React, { useCallback, useEffect, useState } from "react";
import classes from "./Image.module.scss";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  rec,
  placeholderImg,
  errorImg,
  onImageClick,
  type,
  ...props
}) => {
  const [imgSrc, setSrc] = useState(placeholderImg || rec.src);

  const wrapperClasses =
    !type
      ? classes["image-wrapper"]
      : `${classes["image-wrapper"]} ${classes["image-wrapper--" + type]}`;

  const onLoad = useCallback(() => {
    setSrc(rec.src);
  }, [rec.src]);

  const onError = useCallback(() => {
    setSrc(errorImg || placeholderImg);
  }, [errorImg, placeholderImg]);

  useEffect(() => {
    const img = new Image();
    img.src = rec.src;
    img.loading = "lazy";
    img.addEventListener("load", onLoad);
    img.addEventListener("error", onError);
    return () => {
      img.removeEventListener("load", onLoad);
      img.removeEventListener("error", onError);
    };
  }, [rec.src, onLoad, onError]);

  return (
    <div className={wrapperClasses} onClick={onImageClick}>
      <img {...props} alt={imgSrc} src={imgSrc} />
      {type === "gallery" && <h6 className={classes["image-title"]}>{rec.title}</h6>}
    </div>
  );
};
