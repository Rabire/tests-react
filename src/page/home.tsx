import { Link } from 'react-router-dom';
import { routes } from 'App';

export function Home() {
  return (
    <div>
      <ul>
        {routes.map((route) => (
          <li>
            <Link to={route.path}>{`/${route.path}`}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
