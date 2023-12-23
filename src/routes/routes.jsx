import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../layout/Main";
import Chocolates from "../pages/Home/Chocolates/Chocolates";
import AddChocolate from "../pages/AddChocolate/AddChocolate";
import Home from "../pages/Home/Home";
import UpdateChocolate from "../pages/updateChocolate/updateChocolate";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/chocolates')
            }
            ,
            {
                path: '/add-chocolate',
                element: <AddChocolate></AddChocolate>
            }, {
                path: '/update-chocolate/:id',
                element: <UpdateChocolate></UpdateChocolate>,
                loader: ({ params }) => fetch(`http://localhost:5000/chocolates/${params.id}`)
            }
        ]
    },
]);

export default router;