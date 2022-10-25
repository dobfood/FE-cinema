import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import MenuBar from "../menu/menu";


export default function Master() {
  return (
    <>
      {/* <MenuBar/> */}
      <Outlet />
    </>
  );
}
