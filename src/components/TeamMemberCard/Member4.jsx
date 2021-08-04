import React from "react";
import Member4Image from "./../../images/Member4Image";
function Member4() {
  return (
    <div className="flex justify-center flex-col m-auto p-4">
      <Member4Image />
      <div className="block justify-center text-center">
        <p className="text-green font-sans font-normal text-xl uppercase">
          Cesar Maaz
        </p>
        <p className="text-green font-sans font-normal text-xl">
          Front-end Web Developer
        </p>
      </div>
    </div>
  );
}

export default Member4;
