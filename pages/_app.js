import { ToastContainer } from "react-toastify";
import "tailwindcss/tailwind.css";
import Layout from "./components/layout";

import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <ToastContainer />
    </Layout>
  );
}

export default MyApp;
