import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";

export default function Root(props) {
  return (
    console.log(props),
    (
      <>
        <Header />
        <section className=" vh-100 ">
          <Outlet></Outlet>
        </section>
        <Footer />
      </>
    )
  );
}
