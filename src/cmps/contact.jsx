import { useState } from 'react'

export const Contact=({setPhoneModal,isPhoneModal,isMailModal,setMailModal})=>{
    const [isUserMsg,setUserMsg] = useState(false)
    const handleCopyClick=(value)=>{
        navigator.clipboard.writeText(value)
        setUserMsg(true)
        setTimeout(() => {
            setUserMsg(false)
        }, 3000);
    }
    return(
        <section className="contact">
            <div className={isUserMsg? 'user-msg open-msg' : 'user-msg'}>
                <h1>הועתק!</h1>
            </div>
            <h1>צרי קשר</h1>
            <div className={isPhoneModal ? 'phone-modal open-modal' : 'phone-modal'}>
            <h1 className='name'>שוש רייז</h1>

                <h1 className='phone'> 058-7828009 &nbsp; &nbsp; &nbsp;</h1>
                <img onClick={()=>handleCopyClick('058-7828009')} src={require('../assets/imgs/copy-svgrepo-com.svg').default} alt="" />
            </div>

            <div className="ways">
              <a href="https://www.facebook.com/shoshrize" target={'_blank'}>  <img src={require('../assets/imgs/facebook-svgrepo-com (7).svg').default} alt="" /></a>
               <a href="https://www.instagram.com/shoshrize/" target={'_blank'}><img src={require('../assets/imgs/instagram-2-1-logo-svgrepo-com.svg').default} alt="" /></a>
                <img onClick={()=>{setPhoneModal(true)}} src={require('../assets/imgs/phone-svgrepo-com.svg').default} alt="" />
               <a href="https://api.whatsapp.com/send?phone=972587828009" target={'_blank'}> <img src={require('../assets/imgs/whatsapp-symbol-logo-svgrepo-com.svg').default} alt="" /></a>
            </div>
        </section>
    )
}