import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      {/* <header>Auth Header</header> */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default AuthLayout;
