import { useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchImages, setPage } from '../store/imagesSlice';
import { LikeButton } from './LikeButton';

export function Gallery() {
  const dispatch = useAppDispatch();
  const { images, page, status, error } = useAppSelector(
    (state) => state.images
  );

  const loading = status === 'loading';

  useEffect(() => {
    dispatch(fetchImages(page));
  }, [page, dispatch]);

  const handleNextPage = () => {
    dispatch(setPage(page + 1));
  };

  const handlePrevPage = () => {
    dispatch(setPage(Math.max(1, page - 1)));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Online Museum</h1>

      <div className="flex justify-center mb-8">
        <div className="join">
          <button
            className="join-item btn"
            onClick={handlePrevPage}
            disabled={page === 1 || loading}
          >
            « Prev
          </button>
          <button className="join-item btn btn-ghost no-animation">
            Page {page}
          </button>
          <button
            className="join-item btn"
            onClick={handleNextPage}
            disabled={loading}
          >
            Next »
          </button>
        </div>
      </div>

      {loading && (
        <div className="text-center">
          <span className="loading loading-lg loading-spinner"></span>
        </div>
      )}

      {error && (
        <div className="text-center text-red-500">{error}</div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <Link
              to={`/image/${image.id}`}
              key={image.id}
              className="card card-compact bg-base-100 shadow-xl transition-transform hover:scale-105"
            >
              <figure>
                <img
                  src={image.download_url}
                  alt={image.author}
                  className="aspect-video object-cover"
                />
              </figure>
            <div className="card-body p-2 flex-row justify-end">
            <LikeButton image={image} size="sm" />
          </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}