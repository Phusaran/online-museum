import { useAppSelector } from '../store/hooks';
import { Link } from 'react-router-dom';
import { LikeButton } from '../components/LikeButton'; 

export function CollectionPage() {
  const collection = useAppSelector((state) => state.images.collection);

  if (collection.length === 0) {
    return (
      <div>
        <h1 className="text-4xl font-bold text-center mb-8">My Collection</h1>
        <p className="text-center text-lg">You haven't liked any photos yet.</p>
        <div className="text-center mt-4">
          <Link to="/" className="btn btn-primary">
            Find Photos to Like
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-8">My Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {collection.map((image) => (
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
    </div>
  );
}