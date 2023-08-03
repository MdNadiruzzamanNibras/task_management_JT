import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Tasks from "../Page/Tasks";
import TaskPost from "../Page/TaskPost";
import EditTask from "../Page/EditTask";

export const router = createBrowserRouter([
  {
    path: "/",
        element: <App />,
    children: [
        {
        index: true,
        element:<Tasks/>
      },
        {
        path:'/post',
        element:<TaskPost/>
      },
        {
        path:'/edit/:id',
        element:<EditTask/>
      },
    ]
  },
]);
