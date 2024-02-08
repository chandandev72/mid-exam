import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./Components/Layout/Main";
import About from "./Components/About/About";
import Error from "./Components/Layout/Error";
import { useToggleContext } from "./Hooks/useToggle";
// import Login from "./Components/Login/Login";
// import Register from "./Components/Register/Register";
import Home from "./Components/Home/Home";
import Courses from "./Components/Courses/Courses";
import Faq from "./Components/Faq/Faq";
import RegLog from "./Components/RegLog/RegLog";
import Contact from "./Components/Contact/Contact";
import CourseDetails from "./Components/Courses/CourseDetails";
import toast, { Toaster } from 'react-hot-toast';
import PrivateRoute from "./Components/Route/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <PrivateRoute><Home /></PrivateRoute>,
          loader: async () => await fetch("fakeData.json"),
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/courses",
          element: <PrivateRoute><Courses /></PrivateRoute>,
          loader: async () => await fetch("fakeData.json"),
        },
        {
          path: "/faq",
          element: <Faq />,
        },
        {
          path: "/login",
          element: <RegLog />,
        },
        {
          path: "/register",
          element: <RegLog />,
        },
        {
          path: "*",
          element: <Error />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/course-details/:id",
          element: <PrivateRoute><CourseDetails /></PrivateRoute>,
          // loader: async ()=> await fetch('fakeData.json')
        },
      ],
    },
  ]);
  const { mode } = useToggleContext();
  return (
    <>
      <div className={mode ? mode : ""}>
        <Toaster position="bottom-center" reverseOrder={false} />
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
