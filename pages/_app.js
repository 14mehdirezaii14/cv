import "../styles/globals.css";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <small className="text-secondary reverseText">© 2022 Glitche. All rights reserved.</small>
    </>
  );
}

export default MyApp;
