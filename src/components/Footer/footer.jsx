import React from "react";
import FooterImg from "../../assets/website/footer-bg.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaMapMarker } from "react-icons/fa";
import { MdEmail, MdCall} from "react-icons/md";

const bgImg = {
    backgroundImage: `url(${FooterImg})`,
    backgroundPosition: "center",
    backgroudRepeat: "no-repeat",
    backgroundSize: "contain",
    minHeight: "400px",
    width: "100%",
}
const Footer = () => {
    return (
        <div style={bgImg} className="taxt-black mt-20 shadow-lg">
            <div className="bg-primary/20 dark:bg-gray-900/70 dark:text-white min-h-[400px]">
                <div className="container grid md:grid-cols-2 pb-20 pt-5">
                    <div>
                        <a href="#" className="uppercase border-b-8 border-primary font-semibold tracking-widest text-xl sm:text-3xl">
                            {" "}
                            Kansas Trading
                        </a>
                        <div className="pt-4 text-center flex text-primary">
                            {" "}
                             <FaMapMarker />Lemi Kura Sub-city, Summit-Goro road,
                             Infront of Saudi Arebia Embassy,
                             Addis Ababa Ethiopia
                        </div>
                        <div className="flex items-center gap-4 text-primary">
                            <MdCall /> +251987654321
                        </div>
                        <div className="flex items-center gap-4 text-primary">
                            <MdEmail /> kansastreding@gmail.com
                        </div>
                        <a href="#" className="uppercase border-b-8 border-primary font-semibold tracking-widest text-xl sm:text-3xl"> {" "} Explore Our Social Media</a>
                        <div className="pt-4 flex items-center text-primary gap-3 text-2xl">
                            <FaFacebook/>
                            <FaInstagram/>
                            <FaLinkedin/>
                            <FaTwitter/>
                        </div>
                    </div>
                    <div className="rounded-xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509123!2d38.8452993!3d9.0022193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b9b57e92f3b6f%3A0x3993dfb4e78fbf9a!2sPrime%20Travel!5e0!3m2!1sen!2s!4v1616161616161" 
                            frameBorder="0"
                            width="100%"
                            height="360"
                            allowfullscreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            style={{ borderRadius: "20px" }} 
                            allowFullScreen 
                            aria-hidden="false" 
                            tabIndex="0">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
