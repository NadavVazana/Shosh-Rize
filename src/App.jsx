import { useState } from "react";
import { useEffect } from "react";
import { Contact } from "./cmps/contact";
import { CourseInfo } from "./cmps/course-info";
import HomeSlideShow from "./cmps/home-swiper";
import { WhoAmI } from "./cmps/who-am-i";

export const App = ()=> {
  const [isModal,setModal] = useState(false)
  const [isPhoneModal,setPhoneModal] = useState(false)

  console.log(isPhoneModal);
  return (
    <section className="App">
                <div  onClick={()=>setPhoneModal(false)} className={isPhoneModal ? 'black-screen open-phone' : 'black-screen'}></div>


            <div className={isModal ? 'open modal' : 'modal'}>
             <a href="https://www.facebook.com/shoshrize" target={'_blank'}><img src={require('../src/assets/imgs/facebook-svgrepo-com (7).svg').default} alt="" /></a> 
             <a href="https://www.instagram.com/shoshrize/" target={'_blank'}><img src={require('../src/assets/imgs/instagram-2-1-logo-svgrepo-com.svg').default} alt="" /></a> 
             <a href="https://api.whatsapp.com/send?phone=972587828009" target={'_blank'}> <img src={require('./assets/imgs/whatsapp-symbol-logo-svgrepo-com.svg').default} alt="" /></a>

            </div>
            <img onClick={()=>setModal(!isModal)} className="logo" src={require('../src/assets/imgs/favicon.png')} alt="" />

      <HomeSlideShow />
      <WhoAmI/>
      <CourseInfo />
      <Contact isPhoneModal={isPhoneModal} setPhoneModal={setPhoneModal} />
    </section>
  );
}


