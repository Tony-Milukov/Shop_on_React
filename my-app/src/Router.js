import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage"
import SearchPage from "./components/SearchPage"
import HeaderMenu from "./components/HeaderMenu"
import Filtered from "./components/Filtered"
import Footer from "./components/Footer"
import Registration from "./pages/Registration"
import Profile from "./pages/Profile"
import Orders from "./pages/Orders";
import Order from "./pages/Order";

const Router = () => {
    return (
        <div className={"Routers"}>
            <BrowserRouter>
                <HeaderMenu/>
                <Routes>
                    <Route path={"/"} element={<HomePage/>}></Route>
                    <Route path={"/cart"} element={<CartPage/>}></Route>
                    <Route path={"/filtered"} element={<Filtered/>}>
                    </Route>
                   <Route path={"/products"} element={<SearchPage isFiltered={false} isHome={false}/>}>
                       <Route path={"/products/:type/"}>
                           <Route path={"/products/:type/:gender"}>
                               <Route path={"/products/:type/:gender/:itemID"}></Route>
                           </Route>
                       </Route>
                   </Route>
                    <Route path={"/cart"} element={<CartPage/>}></Route>
                    <Route path={"/registration"} element={<Registration/>}></Route>
                  <Route path={"/login"} element={<Registration/>}></Route>
                  <Route path={"/profile"} element={<Profile/>}></Route>
                  <Route path={"/orders/:ID"} element={<Order/>}></Route>
                  <Route path={"/orders"} element={<Orders/>}></Route>
                </Routes>
                    <Footer/>
            </BrowserRouter>

        </div>
    )
}
export default Router