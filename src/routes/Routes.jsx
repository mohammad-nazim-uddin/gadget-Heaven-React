import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../pages/Home";
import ProductsCard from "../components/ProductsCard";
import ProductDetails from "../components/ProductDetails";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../components/ErrorPage";
import GadgetBlogs from "../pages/GadgetBlogs";
import Statistics from "../pages/Statistics";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement:<ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('../categories.json'),
                children: [
                    {
                        path: "/",
                        element: <ProductsCard></ProductsCard>,
                        loader: () => fetch('../products.json'),
                    },
                    {
                        path: "/allproducts",
                        element: <ProductsCard></ProductsCard>,
                        loader: () => fetch('../products.json'),
                    },
                    {
                        path: "/categories/:category",
                        element: <ProductsCard></ProductsCard>,
                        loader: () => fetch('../products.json'),
                    },
                ]


            },

            {
                path: "/product/:id",
                element: <ProductDetails />,
                loader: () => fetch('../products.json')
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path:'/statistics',
                element:<Statistics/>
            },
            {
                path:'/blogs',
                element:<GadgetBlogs/>
            },


        ]
    }
]);

export default router;