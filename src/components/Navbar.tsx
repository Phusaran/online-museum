import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="container mx-auto">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            Online Museum
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/collection">My Collection</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}