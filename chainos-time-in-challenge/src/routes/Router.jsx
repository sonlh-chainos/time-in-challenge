import Layout from "../layouts/Layout";
import HomePage from "../pages/home/HomePage";
import Statistics from "../pages/statistics/Statistics";

const Router = () => [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/statistics", element: <Statistics /> },
    ],
  },
];
export default Router;
