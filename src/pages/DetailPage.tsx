import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchImageById, clearCurrentImage } from '../store/imagesSlice';
import { LikeButton } from '../components/LikeButton';

export function DetailPage() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const imageFromList = useAppSelector((state) =>
    state.images.images.find((img) => img.id === id)
  );

  const {
    currentImage,
    currentImageStatus,
    error,
  } = useAppSelector((state) => state.images);

  const image = imageFromList || currentImage;
  const loading = currentImageStatus === 'loading';

  useEffect(() => {
    if (!id || imageFromList) {
      return;
    }

    if (id) {
      dispatch(fetchImageById(id));
    }

    return () => {
      dispatch(clearCurrentImage());
    };
  }, [id, dispatch, imageFromList]); 


  if (loading) {
    return (
      <div className="text-center">
        <span className="loading loading-lg loading-spinner"></span>
      </div>
    );
  }

  if (error && !imageFromList) { 
    return (
      <div className="text-center text-red-500">
        <h2 className="text-2xl font-bold">Error</h2>
        <p>{error}</p>
        <Link to="/" className="btn btn-outline btn-primary mt-4">
          ← Back to Gallery
        </Link>
      </div>
    );
  }

  if (!image) {
    return (
      <div className="text-center">
        <p>Image not found.</p>
        <Link to="/" className="btn btn-outline btn-primary mt-4">
          ← Back to Gallery
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="lg:w-2/3">
        <img
          src={image.download_url}
          alt={image.author}
          className="w-full h-auto rounded-lg shadow-xl"
        />
      </div>

      <div className="lg:w-1/3">
        <h1 className="text-4xl font-bold mb-4">
        <span className="font-normal text-3xl block">Photo by</span>
        {image.author}
        </h1>

        <div className="stats stats-vertical shadow w-full">

          <div className="stat">
            <div className="stat-title">Dimensions</div>
            <div className="stat-value text-2xl">
              {image.width} x {image.height} px
            </div>
          </div>

          <div className="stat">
            <div className="stat-title">View Original (on Unsplash)</div>
            <div className="stat-desc">
              <a 
                href={image.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="link link-primary break-all"
              >
                {image.url}
              </a>
            </div>
          </div>
        <div className="flex items-center gap-4 mt-8">
          <LikeButton image={image} />
          <Link to="/" className="btn btn-outline">
            ← Back to Gallery
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}