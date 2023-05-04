import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import SingleChef from "../pages/SingleChef/SingleChef";
import Recipe from "../pages/Home/Recipe";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Error from "../pages/Error/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=>fetch("http://localhost:5000/recipes")
            },
            {
                path: "recipes/:id",
                element: <PrivateRoutes><SingleChef></SingleChef></PrivateRoutes>,
                loader: ({params})=>fetch(`http://localhost:5000/recipes/${params.id}`)
            },
            {
                path:"/login",
                element: <Login></Login>
            },
            {
                path:"/register",
                element: <Register></Register>
            },
            {
                path:"/blog",
                element: <Blog></Blog>
            },
            
        ]
    },
   
    
]);
export default router;
