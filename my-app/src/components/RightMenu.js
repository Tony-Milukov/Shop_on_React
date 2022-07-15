import profileIcon from "../imgs/mobile-menu-icon-my-profule.svg";
import cartIcon from "../imgs/mobile-menu-icon-cart.svg";
import { Link, useNavigate } from "react-router-dom";
import {logOutRedux} from "../store/user/actions";
import { useDispatch, useSelector } from "react-redux";
const RightMenu = (props) => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()

  const logOut = () => {
    dispatch(logOutRedux())
    navigate("/login")
  }

    return (
        <ul className={props.isMenu ? "mobile-menu show" : "mobile-menu"}>
            <h1 className="menu-burger">menu <button onClick={() => props.setMenu(false)} className="x">x</button>
            </h1>
            <div className="mobile-menu-icons">
                <div className="profileIcon">
                        <Link to={"/login"}><img src={profileIcon} alt="profile/registration"/></Link>
                </div>
                <div className="cartIcon"><Link to={"/cart"}><img
                    src={cartIcon} alt="cart"/></Link></div>
            </div>
          {user.sessionData.loggedIn ? <a onClick={logOut} className={"logRightMenu"}>LogOut</a> : <Link to={"login"} className={"logRightMenu"}>Login</Link>}
            <h1 className="man-burger">man</h1>
                <li className="menu-burger-link"><Link to={"/products/accessories/man"}> Accessories</Link></li>
                <li className="menu-burger-link"><Link to={"/products/bags/man"}> Bags</Link></li>
                <li className="menu-burger-link"><Link to={"/products/denim/man"}> Denim</Link></li>
                <li className="menu-burger-link"><Link to={"/products/t-shirts/man"}> T-Shirts</Link></li>

            <h1 className="man-burger">woman</h1>
                <li className="menu-burger-link"><Link to={"/products/accessories/woman"}> Accessories</Link></li>
                <li className="menu-burger-link"><Link to={"/products/bags/woman"}> Bags</Link></li>
                <li className="menu-burger-link"><Link to={"/products/denim/woman"}> Denim</Link></li>
                <li className="menu-burger-link"><Link to={"/products/t-shirts/woman"}> T-Shirts</Link></li>

            <h1 className="man-burger">kids</h1>
                <li className="menu-burger-link"><Link to={"/products/accessories/kids/"}> Accessories</Link></li>
                <li className="menu-burger-link"><Link to={"/products/bags/kids"}> Bags</Link></li>
                <li className="menu-burger-link"><Link to={"/products/denim/kids"}> Denim</Link></li>
                <li className="menu-burger-link"><Link to={"/products/t-shirts/kids"}> T-Shirts</Link></li>
        </ul>)

}
export default RightMenu