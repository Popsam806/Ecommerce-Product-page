import React from "react";
import MobileHeader from "../Header/MobileHeader";

function MobileLayout({children}) {
  return (
    <div>
      <MobileHeader />
      <div>{children}</div>
    </div>
  );
}

export default MobileLayout;
