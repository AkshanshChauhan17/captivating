import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

var navigation = ["HOME", "ABOUT US", "OUR CLIENTS", "SALES AND MARKETING", "PUBLIC RELATIONS", "CONSULTANCY"];

export default function Footer() {
    return <div className="footer">
        <div className="left">
            <button>CONTACT US</button>
            <div className="content">Copyright 2025 captivating experiences Ltd.<br />Privacy Policy</div>
        </div>
        <div className="middle">
            {
                navigation.map((e, i)=>{
                    return <div className="nav" key={i}>{e}</div>
                })
            }
        </div>
        <div className="right">
            <div className="links">
                <AiFillFacebook />
                <AiFillInstagram />
                <AiFillLinkedin />
            </div>
            <div className="logo"></div>
        </div>
    </div>
}