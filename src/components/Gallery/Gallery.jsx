import { nanoid } from 'nanoid';
import { useMemo } from 'react';
import css from './Gallery.module.css';

const GalleryItem = ({ original, description }) => (
  <li className={css.gallery__item}>
    <img className={css.gallery__image} src={original} alt={description} />
  </li>
);

export const Gallery = ({ friends }) => {
  const galleryItems = useMemo(
    () =>
    friends.map(({ original, description }) => (
      <GalleryItem key={nanoid()} original={original} description={description} />
      )),
    [friends]
  );

  return (
    <ul className={css.gallery}>
      {galleryItems}
    </ul>
  );
};
