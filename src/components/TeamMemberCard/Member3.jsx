import React from "react";
import Member3Image from "./../../images/Member3Image";
function Member3() {
  return (
    <div className="flex justify-center flex-col m-auto p-4">
      <Member3Image />
      <div className="block justify-center text-center">
        <p className="text-green font-sans font-normal text-xl uppercase">
          Jana Sanjakdar
        </p>
        <p className="text-green font-sans font-normal text-xl">
          Front-end Web Developer
        </p>
      </div>
    </div>
  );
}

export default Member3;
