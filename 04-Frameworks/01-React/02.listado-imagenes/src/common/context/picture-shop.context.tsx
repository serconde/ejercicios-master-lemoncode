import React from 'react';
import { PictureInfo } from 'common/vm/picture.vm';

interface PictureShopContext {
  selectedPictures: PictureInfo[];
  setSelectedPictures: (pictures: PictureInfo[]) => void;
}

export const ShopContext = React.createContext<PictureShopContext>({
  selectedPictures: [],
  setSelectedPictures: pictures => {},
});

export const PictureShopContextProvider = ({ children }) => {
  const [selectedPictures, setSelectedPictures] = React.useState([]);

  return (
    <ShopContext.Provider value={{ selectedPictures, setSelectedPictures }}>
      {children}
    </ShopContext.Provider>
  );
};
