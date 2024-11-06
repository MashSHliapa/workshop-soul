import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import './Layout.scss';

export function Layout() {
  return (
    <div className="Layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
