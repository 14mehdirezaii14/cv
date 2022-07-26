import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import GifLoptop from "../public/gif/1633781838_8721_gif-url.gif";
import { NextSeo } from "next-seo";
import MyImage from "../public/Images/MyImage.jpg";
export default function Home(props) {
  console.log(props);
  useEffect(() => {
    const typed = new Typed(".element", {
      strings: ["FRONT END DEVELOPER"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: false,
      cursorChar: "0",
      shuffle: true,
      autoInsertCss: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <NextSeo
        title="Mehdi Rezaii Front-End Developer"
        description="سلام بنده مهدی رضایی هستم برنامه نویس وب"
        openGraph={{
          url: "",
          images: [
            {
              url: "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMyImage.bfbbd434.jpg&w=128&q=75",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
            {
              url: "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMyImage.bfbbd434.jpg&w=128&q=75",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
              type: "image/jpeg",
            },
            {
              url: "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMyImage.bfbbd434.jpg&w=128&q=75",
            },
            {
              url: "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMyImage.bfbbd434.jpg&w=128&q=75",
            },
          ],
          site_name: "MehdiRezaii",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <div className="container">
        <div className="row justify-content-center mt-5 pt-5">
          <div className="col-md-9 text-center mt-5 ">
            <h1 className="text-light center_text_page_anim">
              IM MEHDI REZAII
            </h1>
            <p
              className={`${styles.jobText} element text-center mb-5  text-secondary`}
            >
              FRONT END DEVELOPER
            </p>
            <Image
              src={GifLoptop}
              width="150px"
              height="150px"
              className="img-fluid mt-2"
              style={{ position: "relative", marginTop: "100px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
