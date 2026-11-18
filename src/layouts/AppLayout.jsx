import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AppLayout() {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />

      <main id="main-content" className="page-content" tabIndex="-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
