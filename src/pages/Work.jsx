import React, { useState } from "react";

export default function Work() {
  return (
    <div className={`${layout.section} bg-lightBlue text-darkBlue h-[100vh]`}>
      <Navbar bg="lightBlue" />
      <NotReady />
    </div>
  );
}
