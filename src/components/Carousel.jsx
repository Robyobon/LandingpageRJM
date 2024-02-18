
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bannerImage1 from '../assets/image 1.png';
import bannerImage2 from '../assets/Group 5.png';
import bannerImage3 from '../assets/Group 2 (1).png';
import bannerImage4 from '../assets/Group 3.png';
import bannerImage5 from '../assets/Group 4.png';
import '../index.css';

const BannerSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    
    
  };

  return (
    <div className='flex relative smartphone:my-[-100px]'>
      <div className='w-[840px]'>
        {/* Slider di sini */}
        <Slider {...settings}>
          <div className='slider-item'>
            <img src={bannerImage1} alt='Banner 1' className='w-[840px] smartphone:w-[380px] relative smartphone:top-[140px]  top-[200px] transform hover:scale-110 transition-transform duration-300 rotate-x-6 hover:mt-[12px] tablet:hover:-mt-4 desktop:hover:scale-95 hover:mb-10' />
          </div>
          <div className='slider-item'>
            <img src={bannerImage2} alt='Banner 2' className='w-[840px] smartphone:w-[360px] smartphone:mb-32 relative right-[30px] top-[130px] transform hover:scale-110 transition-transform duration-300 rotate-x-6 hover:mt-[12px] tablet:hover:-mt-4 desktop:hover:scale-95 hover:mb-10'  />
          </div>
          <div className='slider-item'>
            <img src={bannerImage3} alt='Banner 3' className='w-[680px] smartphone:w-[300px] relative left-[40px] top-[80px] transform hover:scale-110 transition-transform duration-300 rotate-x-6 hover:mt-[12px] tablet:hover:-mt-4 desktop:hover:scale-95 hover:mb-10'/>
          </div>
          <div className='slider-item'>
            <img src={bannerImage4} alt='Banner 3' className='w-[600px] smartphone:w-[280px] relative left-[80px]  smartphone:top-[60px] top-[70px] transform hover:scale-110 transition-transform duration-300 rotate-x-6 hover:mt-[12px] tablet:hover:-mt-4 desktop:hover:scale-95 hover:mb-10 '/>
          </div>
          <div className='slider-item'>
            <img src={bannerImage5} alt='Banner 3' className='w-[640px] smartphone:w-[270px] smartphone:mb-36 relative left-[70px] smartphone:top-[100px] top-[120px] transform hover:scale-110 transition-transform duration-300 rotate-x-6 hover:mt-[12px] tablet:hover:-mt-4 desktop:hover:scale-95 hover:mb-10'/>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default BannerSlider;
