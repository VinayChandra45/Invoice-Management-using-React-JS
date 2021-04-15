import React from "react";
import Logo from "../assets/logo.svg";
import LogoCompany from "../assets/companyLogo.svg";
import { pxToVh } from "../utils/theme";
import DashboardBody from "../components/DashBoardBody";

function DashboardHeader() {
  return (
    <div>
      <div style={{ color: "white", display: "flex", flexDirection: "row" }}>
        <img src={LogoCompany} alt="" style={{ top: 20, marginLeft: 30 }} />
        <h1 style={{ top: pxToVh(20), left: pxToVh(30) }}>ABC Products</h1>
        <img
          src={Logo}
          alt=""
          style={{ margin: "auto", top: pxToVh(20), left: pxToVh(30) }}
        />
      </div>
      <p
        style={{
          marginLeft: pxToVh(30),
          font: "normal normal normal pxToVh(28/32) Poppins",
          color: "#FFFFFF",
        }}
      >
        Invoice List
      </p>
      <DashboardBody />
    </div>
  );
}

export default DashboardHeader;
