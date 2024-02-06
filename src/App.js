import Login from "./Components/Login";
import Dashboard from "./pages/Dashboard";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}>
        <Login />
        <Dashboard />
      </RouterProvider>
    </>
  );
}
