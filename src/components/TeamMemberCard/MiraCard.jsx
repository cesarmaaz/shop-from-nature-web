import React from "react";
import MiraPhoto from "../../images/MiraPhoto";
function MiraCard() {
  return (
    <div className="flex justify-center flex-col m-auto p-4">
      <MiraPhoto />
      <div className="block justify-center text-center">
        <p className="text-green font-sans font-normal text-xl uppercase">
          Mira Chami
        </p>
        <p className="text-green font-sans font-normal text-xl">
          Front-end Web Developer
        </p>
      </div>
    </div>
  );
}

export default MiraCard;
