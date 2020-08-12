import React from "react";
import { css } from "emotion";
import { Card } from "@material-ui/core";
import { PictureInfo } from "common/vm/picture.vm";

interface PictureCardProps {
  picture: PictureInfo;
  onSelectPicture: (pictureId: string, selected: boolean) => void;
}

const pictureCardStyles = css`
  box-sizing: border-box;
  padding: 20px;  
`;

const imageStyles = css`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 2px;
`;

const buyCheckStyles = css`
  margin: 0 4px 0 0;
`;

export const PictureCardComponent: React.FC<PictureCardProps> = ({
  picture,
  onSelectPicture,
}) => {
  const handleSelectPicture = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => onSelectPicture(event.target.value, event.target.checked);
    const img = require("images/" + picture.picUrl);
  return (
      <Card key={picture.id} className={pictureCardStyles}>
          <img
            className={imageStyles}
            src={img.default}
            alt={picture.name}
          ></img>
          <p>{picture.name}</p>
          <label>
            <input
              type="checkbox"
              name={"pic_" + picture.id}
              value={picture.id}
              checked={picture.selected}
              onChange={handleSelectPicture}
              className={buyCheckStyles}
            ></input>
            Buy
          </label>
      </Card>
  );
};
