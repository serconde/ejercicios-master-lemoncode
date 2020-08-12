import React from 'react';
import { css } from 'emotion';
import { PictureCardComponent } from './picture-card.component';
import { PictureInfo } from 'common/vm/picture.vm';

interface PictureListProps {
  pictures: PictureInfo[];
  onSelectPicture: (pictureId: string, selected: boolean) => void;
}

const pictureContainer = css`
  display: flex;
  justify-content: space-between;
`;

export const PictureListComponent: React.FC<PictureListProps> = ({
  pictures,
  onSelectPicture,
}) => {
  return (
    <div className={pictureContainer}>
      {pictures.map(p => (
        <PictureCardComponent
          key={p.id}
          picture={p}
          onSelectPicture={onSelectPicture}
        ></PictureCardComponent>
      ))}
    </div>
  );
};
