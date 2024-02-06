import Login from "./Components/Login";
import Signup from "./Components/Signup";
import UploadCSV from "./pages/UploadCSV";
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
      path:"/signup",
      element:<Signup/>
    },
    {
      path: "/upload",
      element: <UploadCSV />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}>
        <Login />
        <UploadCSV />
      </RouterProvider>
    </>
  );
}
