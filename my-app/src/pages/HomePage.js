import HeaderMenu from "../components/HeaderMenu";
import "../App.css"
import HotDeals from "../components/HotDeals"
import {useSelector } from 'react-redux'
import SearchPage from "../components/SearchPage"
import {Link} from "react-router-dom"

const HomePage = () => {
    const products = useSelector((state) => state.products);

    return (
        <>
            <div className="top-back">
                <div className="top">
                    <div className="top-text">
                        <p className="p-top"> THE BRAND <br/>
                            <span className="text_under-1">OF LUXERIOUS <span className="text-color-rosa">FASHION</span></span>
                        </p>
                    </div>
                </div>

            </div>
            <div className="main">
                <HotDeals></HotDeals>
                <SearchPage isFiltered={false} isHome={true}></SearchPage>

            </div>
            <div className="browse-div">
                <Link to={"/products"} className="browse">BROWSE ALL PRODUCTS</Link>
            </div>

        </>
    )

}

export default HomePage