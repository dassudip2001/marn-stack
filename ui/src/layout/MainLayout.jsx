import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <header>Main Header</header>
      <main>
        <Outlet /> {/* Render child routes */}
      </main>
      <footer>Main Footer</footer>
    </div>
  );
};

export default MainLayout;
