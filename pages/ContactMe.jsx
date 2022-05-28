import  Link  from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMouse , faPhoneAlt , faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ContactStyle from '../styles/contact.module.css'
const ContactMe = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5 pt-5">
          <div className="col-md-9 text-center mt-5  mb-5">
            <h1 className="text-light center_text_page_anim">CONTACT ME</h1>
            <Link href="/">
              <a className="mt-5 pt-5 LinkHome text-secondary">Home</a>
            </Link>
          </div>
          <div className="col-md-12 text-center mt-5 pt-5">
            <FontAwesomeIcon icon={faMouse} className="text-light MouseIcon" />
          </div>
        </div>
        {/* CONTACT ME */}
        <div className="row">
            <div className={`col-md-12 mb-3 ${ContactStyle.ColContact}`}>
                <p className={`h4 text-light ${ContactStyle.TitleContact}`}>تماس با من</p>
            </div>
            {/* Phone */}
            <div className="col-md-4 text-center mt-5">
                <FontAwesomeIcon icon={faPhoneAlt} className='text-light' />
                <p className="h5 text-light d-inline-block pe-3">تلفن</p>
                <p className="text-light">09038517751</p>
            </div>
            
            {/* END Phone */}
            {/* Email */}
            <div className="col-md-4 text-center mt-5 mb-5 pb-5">
                <FontAwesomeIcon icon={faEnvelope} className='text-light' />
                <p className="h5 text-light d-inline-block pe-3">ایمیل</p>
                <p className="text-light">99mehdirezaii99@gmail.com</p>
            </div>
            {/* END Email */}
            {/* address */}
            <div className="col-md-4 text-center mt-5 mb-5 pb-5">
                <FontAwesomeIcon icon={faEnvelope} className='text-light' />
                <p className="h5 text-light d-inline-block pe-3">آدرس</p>
                <p className="text-light">تهران - گیشا</p>
            </div>
            {/* END address */}
        </div>
        {/* END CONTACT ME */}
      </div>
    </>
  );
};

export default ContactMe;
