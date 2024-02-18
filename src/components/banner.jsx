import "../index.css"; 
import { FaInstagram } from "react-icons/fa6"; 
import { FaSquareFacebook } from "react-icons/fa6"; 
import Carousel from '../components/Carousel'; 
import { motion } from "framer-motion"; 
import { Link } from "react-router-dom";
import background from "../assets/Background.png";

function Banner() {
  return (
    <section className="home h-full w-full tablet:flex desktop:flex items-center justify-between  bg-cover    " 
    style={{ backgroundImage: `url(${background})` }}>
      <div className="text-left  smartphone:text-center desktop:ml-[100px] desktop:mr-[-200px] ">
        <div className="relative top-[-120px] pt-40">
          <h1 className="text-8xl font-bold text-[#F8D100] smartphone:text-6xl">RJM</h1>
          <p className="text-2xl font-normal smartphone:text-sm text-white">RIAN JAYA MOTOR</p>
        </div>
        <div className="relative bottom-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl text-white font-medium smartphone:text-3xl"
          >
            JUAL BELI MOTOR <br />
            BEKAS{" "}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-[#F8D100] font-bold"
            >
              {" "}
              <i>BERKUALITAS</i>
            </motion.span>
          </motion.h1>
        </div>
        <div className="relative bottom-16">
          <button className="border border-[#F8D100] shadow-lg shadow-yellow-500/50 text-white py-2 px-2 rounded bg-transparent hover:bg-[#F8D100] hover:text-[#545454]">
            <Link to="/catalog">BELI SEKARANG</Link>
          </button>
        </div>
        <div className="flex space-x-6 smartphone:mt-[-32px] smartphone:justify-center">
          <a href="https://www.instagram.com/gojo_mb?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={40} className="icon"/>
          </a>
          <a href="https://web.facebook.com/marketplace/bandung/search?query=rian%20aris%20setiawan" target="_blank" rel="noopener noreferrer" >
            <FaSquareFacebook size={40} className="icon"/>
          </a>
        </div>
      </div>
  
      <div className=" ">
        <Carousel /> {/* Memanggil komponen Carousel untuk ditampilkan */}
      </div>
    </section>
  );
}

export default Banner;
