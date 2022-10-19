import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";

export default function Master() {
  return (
    <>
      <Footer />
      <Outlet />
    </>
  );
}
