import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import AdminRegister from "./pages/AdminRegister";
import AdminHome from "./pages/AdminHome";
import AdminWork from "./pages/AdminWork";
import Login from "./pages/Login";
import AdminNavbar from "./components/AdminNavbar";
import Footer from "./components/Footer";
import AdminItem from "./pages/AdminItem";
import UserRegister from "./pages/UserRegister";
import "./style.scss"

const Layout = () => {
  return (
    <>
      <AdminNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/admin-home",
        element: <AdminHome />,
      },
      {
        path: "/admin-work",
        element: <AdminWork />,
      },
      {
        path: "/admin-register",
        element: <AdminRegister />,
      },
      {
        path: "/admin-item/:id",
        element: <AdminItem />,
      },
    ],
  },
  {
    path: "/admin-registration",
    element: <AdminRegister />,
  },
  {
    path: "/admin-work",
    element: <AdminWork />,
  },
  {
    path: "/admin-home",
    element: <AdminHome />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/user-register",
    element: <UserRegister />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
