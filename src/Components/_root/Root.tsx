import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";

export default function Root() {
  return (
    <>
      <Header />
      <section className=" vh-100 pt-5">
        <Outlet></Outlet>
      </section>
      <Footer />
    </>
  );
}
