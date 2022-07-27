import styles from "../styles/Home.module.css";
import ResumeStyles from "../styles/Resume.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMouse } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Mypic from "../public/Images/MyImage.jpg";
import gsap from "gsap";
import { NextSeo } from "next-seo";
import bitcoGame from "../public/Images/bitcogame-image-min.png";
import GoEscape from "../public/Images/GoEscape-Image-min.png";
import MahanCement from "../public/Images/MahanCement-Image-min.png";

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

function Resume(props) {
  console.log(props);
  const [displayMouse, setDisplayMouse] = useState("d-inline");
  const [listSkills, setListSkills] = useState([
    {
      skill: "ReactJs",
      rate: "70%",
    },
    {
      skill: "NextJs",
      rate: "60%",
    },
    {
      skill: "TailwindCss",
      rate: "40%",
    },
    {
      skill: "Bootstrap",
      rate: "80%",
    },
    {
      skill: "Redux",
      rate: "70%",
    },
    {
      skill: "Redux-toolkit",
      rate: "45%",
    },
    {
      skill: "TypeScript",
      rate: "50%",
    },
  ]);
  const viewer = useRef("hello");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
      if (window.scrollY >= 5) {
        setDisplayMouse("d-none");
      }
      if (window.scrollY === 0) {
        setDisplayMouse("d-inline");
      }
      if (window.scrollY >= 860) {
        listSkills.map((skill, index) => {
          gsap.to(`.Progress${skill.skill}`, {
            width: skill.rate,
            duration: 2,
            ease: "power1",
          });
        });

        // gsap.to(".ProgressCss", { width: "90%", ease: "elastic", duration: 2 });
        // gsap.to(".ProgressBootstrap", {
        //   width: "95%",
        //   ease: "elastic",
        //   duration: 3,
        // });
        // gsap.to(".ProgressJavascript", {
        //   width: "80%",
        //   ease: "elastic",
        //   duration: 4,
        // });
        // gsap.to(".ProgressJquery", {
        //   width: "80%",
        //   ease: "elastic",
        //   duration: 5,
        // });
        // gsap.to(".ProgressReactJs", {
        //   width: "90%",
        //   ease: "elastic",
        //   duration: 6,
        // });
        // gsap.to(".ProgressSeo", { width: "70%", ease: "elastic", duration: 7 });
        // gsap.to(".ProgressNextJs", {
        //   width: "85%",
        //   ease: "elastic",
        //   duration: 8,
        // });
        // gsap.to(".ProgressRedux", {
        //   width: "85%",
        //   ease: "elastic",
        //   duration: 9,
        // });
      }
    });
  }, []);
  return (
    <>
      <NextSeo title="Resume Mehdi Rezaii" />
      <div className="container">
        <div className="row justify-content-center mt-5 pt-5">
          <div className="col-md-9 text-center mt-5  mb-5">
            <h1 className="text-light center_text_page_anim">RESUME</h1>
            <Link href="/">
              <a className="mt-5 pt-5 LinkHome text-secondary">Home</a>
            </Link>
          </div>
          <div className="col-md-12 text-center mt-5 pt-5">
            <FontAwesomeIcon
              icon={faMouse}
              className="text-light Resume MouseIcon"
            />
          </div>
          {/* about me */}
          <div className={`col-md-12 ${ResumeStyles.ColAboutMe}`}>
            <p className={`h4 ${ResumeStyles.TextAboutMe} pb-4 text-light`}>
              درباره من
            </p>
            <Image
              src={Mypic}
              className="rounde-circle"
              style={{ borderRadius: "50%", float: "right" }}
              width="100px"
              height="100px"
            />
            <p
              className={`d-inline-block ${ResumeStyles.Description} text-light  text-center`}
            >
              با سلام بنده مهدی رضایی عاشق برنامه نویسی رشته بنده طراحی گرافیک
              هستش پس میتونم قالب رو طراحی و سپس ان را تبدیل به کد کنم <br />{" "}
              تجربه کاری بنده حدودا 3 سال هستش پس میتونم کمکتون کنم که یک سایت
              زیبا به روز و شکیل داشته باشین{" "}
              <span className="text-info">:)</span>
            </p>
            <div className="row">
              <div className="col-md-4 text-center">
                <p className="text-info">
                  نام : <span className="text-light">مهدی</span>
                </p>
              </div>
              <div className="col-md-4 text-center">
                <p className="text-info">
                  نام خانوادکی: <span className="text-light">رضایی</span>
                </p>
              </div>

              <div className="col-md-4 text-center">
                <p className="text-info">
                  سن: <span className="text-light">21</span>
                </p>
              </div>

              <div className="col-md-4 text-center mt-3">
                <p className="text-info">
                  شغل: <span className="text-light">برنامه نویس وب</span>
                </p>
              </div>
              <div className="col-md-4 text-center mt-3">
                <p className="text-info">
                  ایمیل:{" "}
                  <span className="text-light">99mehdirezaii99@gmail.com</span>
                </p>
              </div>
              <div className="col-md-4 text-center mt-3">
                <p className="text-info">
                  محل زندکی: <span className="text-light">تهران - گیشا</span>
                </p>
              </div>
            </div>
          </div>
          {/* END about me */}
        </div>
        {/* Download cv */}
        {/* <div className="row px-4 mx-5">
          <div className="col-12">
            <a className="btn btn-outline-info">دانلود رزومه</a>
          </div>
        </div> */}
        {/* END Download cv */}
        <div className="row pe-3 justify-content-center mt-5">
          {/* EDUCATION */}
          <div className={`col-md-6  mt-3 ${ResumeStyles.ColEducation}`}>
            <p className={`text-light h4 pb-5 ${ResumeStyles.Education}`}>
              تحصیلات
            </p>
            <p
              className={`${ResumeStyles.EducationDate} me-4 px-2 pt-1 rounded mb-0 text-light border d-inline-block border-info`}
            >
              2021
            </p>

            <p className="text-light">
              <b className=" mt-3 d-inline-block">دانشگاه علمی کاربردی تهران</b>{" "}
              <br />{" "}
              <span className="mt-3 pt-3 d-inline-block">مقطع فوق دیپلم</span>
              <br />
              <span className="d-inline-block mt-3"> رشته گرافیک</span>
              <br />
              <span>ترم دوم</span>
            </p>
            <p
              className={`${ResumeStyles.EducationDate1} me-4 px-2 pt-1 rounded mb-0 text-light border d-inline-block border-info`}
            >
              2022
            </p>
          </div>
          {/* END EDUCATION */}
          {/* EXPERIENCE */}
          <div className={`col-md-6 ${ResumeStyles.ColExperience}`}>
            <p className={`text-light h4 pb-5 ${ResumeStyles.Experience}`}>
              تجربه
            </p>
            <p
              className={`${ResumeStyles.ExperienceDate} me-4 px-2 pt-1 rounded mb-0 text-light border d-inline-block border-info`}
            >
              2021
            </p>
            <p className="text-light mt-3">
              <b>هولدینگ بین المللی ساغر</b>
            </p>
            <p className="text-light">وظایف : fron-end developer</p>
            <p
              className={`${ResumeStyles.ExperienceDate1} me-4 px-2 pt-1 rounded mb-0 text-light border d-inline-block border-info`}
            >
              2022
            </p>
          </div>
          {/* END EXPERIENCE */}
        </div>
        {/* SKILLS */}
        <div className="row justify-content-center pt-5 mt-5">
          <div className={`col-md-12 ${ResumeStyles.ColSkills}`}>
            <p className={`h4 ${ResumeStyles.Skills} text-light mb-4`}>
              مهارت ها
            </p>

            {/*  */}
            {listSkills.map((skill) => {
              console.log(skill);
              return (
                <>
                  <span className="text-light">{skill.skill}</span>
                  <div style={{ height: "20px" }} className="progress mb-4">
                    <div
                      className={`progress-bar-striped Progress${skill.skill} progress-bar-animated bg-dark progress-bar`}
                      style={{
                        height: "20px",
                        width: skill.rate + 10,
                        transition: "none",
                      }}
                    >
                      {skill.rate}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        {/* END SKILLS */}
        {/* P O R T F O L I O */}
        <div className="row mb-5">
          <div className={`col-12 mt-5 ${ResumeStyles.ColPortoFolio}`}>
            {/* title */}
            <p className={`h4 ${ResumeStyles.PortoFolio}`}>نمونه کار ها</p>
            {/* END title */}
          </div>
          {/* BITCOGAME */}
          <div className="col-md-4 mt-5" style={{ position: "relative" }}>
            <div className={`${ResumeStyles.BoxPortfolio}`}>
              <a href="https://bitcogame.com">
                <Image className="rounded w-100 img-fluid" src={bitcoGame} />
                <div
                  className={`${ResumeStyles.CoverHoverPortfolio} pt-2 px-3 text-center rounded`}
                >
                  ساخته شده با : ReactJs , bootstrap 5 , redux , gsap , pusher{" "}
                  <br />
                  اپلیکیشن realTime و دارایه قابلیت چت
                  <br />
                  <span className="text-primary text-center d-inline-block">
                    مشاهده سایت
                  </span>
                </div>
              </a>
            </div>
          </div>
          {/* END BITCOGAME */}
          {/* GOESCAPE */}
          <div className="col-md-4 mt-5" style={{ position: "relative" }}>
            <div className={`${ResumeStyles.BoxPortfolio}`}>
              <a href="https://goescape.ir/index/fa">
                <Image className="rounded w-100 img-fluid" src={GoEscape} />
                <div
                  className={`${ResumeStyles.CoverHoverPortfolio} pt-2 px-3 text-center rounded`}
                >
                  رزرو آنلاین اتاق فرار با استفاده از : html , bootstrap ,
                  Leaflet , css
                  <br />
                  <span className="text-primary text-center d-inline-block">
                    مشاهده سایت
                  </span>
                </div>
              </a>
            </div>
          </div>
          {/* END GOESCAPE */}
          {/* MAHANCEMENT */}
          <div className="col-md-4 mt-5" style={{ position: "relative" }}>
            <div className={`${ResumeStyles.BoxPortfolio}`}>
              <a href="https://mahancement.ir/">
                <Image className="rounded w-100 img-fluid" src={MahanCement} />
                <div
                  className={`${ResumeStyles.CoverHoverPortfolio} pt-2 px-3 text-center rounded`}
                >
                  سفارش آنلاین سیمان با استفاده از : html , css ,bootstrp
                  <br />
                  <span className="text-primary text-center d-inline-block">
                    مشاهده سایت
                  </span>
                </div>
              </a>
            </div>
          </div>
          {/* END MAHANCEMENT */}
        </div>
        {/* END P O R T F O L I O */}
      </div>
    </>
  );
}

export default Resume;
