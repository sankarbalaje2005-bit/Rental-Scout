import { Link } from "react-router-dom";
import StatusPanel from "../components/StatusPanel";
function NotFoundPage() {
  <StatusPanel variant="error" title="Page not found" headingLevel="h1">
    <p>The page you requested does not exist.</p>

    <Link className="primary-link" to="/">
      Return home
    </Link>
  </StatusPanel>;
}

export default NotFoundPage;
