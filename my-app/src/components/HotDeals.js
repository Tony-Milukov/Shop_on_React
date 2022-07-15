import "../App.css"
import {Link} from "react-router-dom"
const HotDeals = () => {

    return (
        <div className="hot_deals">
            <div className="hot">
                <Link className={"hotDealsLink"} to={"/products/bags"}> <div className="hot-deal-1"><p className="p-hot ">30% OFF <br/>
                    <span className="hot-rosa">BAGS</span> </p></div></Link>
                <Link className={"hotDealsLink"} to={"/products/t-shirts"}><div className="hot-deal-2"><p className="p-hot  ">HOT DEAL<br/>
                    <span className="hot-rosa">T-SHIRTS</span>  </p></div></Link>

                <Link className={"hotDealsLink"} to={"/products/accessories"}><div className="hot-deal-3"><p className="p-hot ">NEW ARRIVALS<br/>
                    <span className="hot-rosa">ACCESSORIES</span>  </p></div></Link>


            </div>
           <div> <Link  className={"hotDealsLink"} to={"/products/denim"}><div className="hot-deal-4"><p className="p-hot-2">NEW ARRIVALS <br/>
               <span className="hot-rosa-2">DENIM</span>  </p></div>
           </Link></div>
            </div>
            )
            }

export default HotDeals