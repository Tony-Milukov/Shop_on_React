import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { useSelector,  } from "react-redux";

const Footer = () => {
    const links = useSelector((state) => state.links);
    return (
        <>
            <div className={"footerMainBack"}>
                <footer className="footerMain">
                    <div className="subscribe-us">
                        <p className="subscribe"><span className="subscribe-span">SUBSCRIBE <br/></span>
                            FOR OUR NEWLETTER AND PROMOTION</p>
                        <div className="input-sub">
                            <input className="input" type="text" placeholder="Enter your Email"/>
                                <button className="button-send">Subscribe</button></div>
                    </div>

                </footer>
            </div>
            <div className="container-footer">
                <div className="contacts">
                    <p className="copy">&copy; 2021 Brand All Rights Reserved.</p>
                    <div className="social-links">
                        <a target="_blank" href={links.facebook}>
                            <div className="facebook box-link">

                                <FacebookIcon/>
                            </div>
                        </a>
                        <a target="_blank" href={links.instagram}>
                            <div className="instagram box-link">
                                <InstagramIcon/>
                            </div>

                        </a>
                        <a target="_blank" href={links.pinterest}>
                            <div  className="pinterest box-link">
                               <PinterestIcon/>
                               </div>
                        </a>
                        <a target="_blank" href={links.twitter}>
                            <div className="twitter box-link">
                                <TwitterIcon/></div></a>
                    </div>
                </div>
        </div>
            </>
    )
}

export default Footer