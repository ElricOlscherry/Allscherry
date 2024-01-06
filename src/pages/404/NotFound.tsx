import { Link as RouterLink } from "react-router-dom";
import './NotFound.scss'


export default function NotFound() {
  return (
    <>
    <div className="notFound">
        <h1>Uh oh!</h1>
        <p>We couldn't find the page you were looking for.</p>
        <RouterLink to="/">
          <button className="btn btn-primary">Go Home</button>
        </RouterLink>
    </div>
    </>
  );
}

