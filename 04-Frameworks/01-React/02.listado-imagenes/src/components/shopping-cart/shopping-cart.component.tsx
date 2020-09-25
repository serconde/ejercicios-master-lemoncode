import React from 'react';
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  List,
  ListItemAvatar,
  Avatar,
  IconButton,
  withStyles,
  Button
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DeleteIcon from '@material-ui/icons/Delete';
import { css } from 'emotion';
import { PictureInfo } from 'common/vm/picture.vm';

const headerStyles = css`
  box-sizing: border-box;
  padding-left: 12px;
  display: grid;
  grid-template-columns: 0.3fr 1.2fr 1fr;
`;

const headerTitleStyles = css`
  margin-block-start: 0;
  margin-block-end: 0;
  margin-left: 10px;
`;

const EmptyTrashButton = withStyles({
  root: {
    boxSizing: 'border-box',
    paddingTop: '7px',
  },
})(IconButton);


const CheckoutButton = withStyles({
  root: {
    backgroundColor: "#d2a679",
    '&:hover': {
      backgroundColor: "#604020",
      color: '#fff',
    }
  },
})(Button)

interface ShoppingCartProps {
  pictures: PictureInfo[];
  onRemovePicture: (pictureId: string) => void;
  onEmptyShoppingCart: () => void;
}

export const ShoppingCartComponent: React.FC<ShoppingCartProps> = ({
  pictures,
  onRemovePicture,
  onEmptyShoppingCart,
}) => {
  const handleClickRemove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    onRemovePicture(event.currentTarget.dataset.id);
  };

  const handleClickEmptyCart = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ): void => {
    onEmptyShoppingCart();
  };

  return (
    <div>
      <div className={headerStyles}>
        <ShoppingCartIcon style={{ fontSize: 40 }}></ShoppingCartIcon>
        <h2 className={headerTitleStyles}>Cart</h2>
        {pictures.length > 0 && (
          <EmptyTrashButton onClick={handleClickEmptyCart}>
            <DeleteIcon />
          </EmptyTrashButton>
        )}
      </div>
      <List>
        {pictures.map((p) => {
          return (
            <ListItem button key={p.id}>
              <ListItemAvatar>
                <Avatar alt={p.name} src={'images/' + p.picUrl} />
              </ListItemAvatar>
              <ListItemText primary={p.name} />
              <ListItemIcon data-id={p.id} onClick={handleClickRemove}>
                <DeleteIcon />
              </ListItemIcon>
            </ListItem>
          );
        })}
      </List>
      {pictures.length > 0 && (
        <CheckoutButton variant="contained">
          Go to Checkout
        </CheckoutButton>
      )}
    </div>
  );
};
