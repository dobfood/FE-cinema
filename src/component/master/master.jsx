import { Outlet } from "react-router-dom";
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
