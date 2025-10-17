import React from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { toggleCollection } from '../store/imagesSlice';
import type { Image } from '../store/imagesSlice'; 

interface Props {
  image: Image;
  size?: 'sm' | 'md' | 'lg'; 
}

export function LikeButton({ image, size }: Props) {
  const dispatch = useAppDispatch();

  const isLiked = useAppSelector((state) =>
    state.images.collection.some((img) => img.id === image.id)
  );

  const handleLikeClick = (e: React.MouseEvent) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    dispatch(toggleCollection(image)); 
  };

  const btnSize = size === 'sm' ? 'btn-sm' : '';
  const btnActive = isLiked ? 'btn-primary' : ''; 

  return (
    <button
      className={`btn btn-outline ${btnSize} ${btnActive}`}
      onClick={handleLikeClick}
    >
      {isLiked ? '♥ Liked' : '♡ Like'}
    </button>
  );
}