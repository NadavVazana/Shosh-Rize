import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const HomeSlideShow = () => {
    const images = [
        "https://res.cloudinary.com/ds8xkm0ue/image/upload/v1669132191/Shosh%20Rize/hero-fade-6_f7o0rb.jpg",
        "https://res.cloudinary.com/ds8xkm0ue/image/upload/v1669132247/Shosh%20Rize/hero-fade-4_ncofxa.jpg",
        "https://res.cloudinary.com/ds8xkm0ue/image/upload/v1669132208/Shosh%20Rize/hero-fade-5_smluky.jpg",
        "https://res.cloudinary.com/ds8xkm0ue/image/upload/v1669132190/Shosh%20Rize/hero-fade-3_rcayqc.jpg"
    ];

    return (
        <section className="slideshow">
                        <h1 className="title">שוש רייז</h1>
            <h3 className="subtitle">מדריכה להתפתחות תינוקות ויועצת שינה</h3>
            
             <Fade duration={1000} infinite={true} canSwipe={false} arrows={false} autoplay  >
          
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[3]})` }}>
                </div>
            </div>
        </Fade>

        </section>
       
    );
};

export default HomeSlideShow;