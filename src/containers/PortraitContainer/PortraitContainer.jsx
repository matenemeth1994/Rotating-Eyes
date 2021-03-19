import React from "react";
import styles from "./PortraitContainer.module.scss";
import FaceCard from "../../components/FaceCard";
import { useState } from "react";

const PortraitContainer = () => {
  const [angle, updateAngle] = useState(0);

  return (
    <>
      <div className={styles.portraitContainer}>
        <div className={styles.portrait}>
          <FaceCard yourAngle={angle} />
        </div>
        <input
          type="text"
          name="angle"
          placeholder="Shea's angle here"
          onChange={(event) => updateAngle(event.target.value)}
        ></input>
      </div>
    </>
  );
};

export default PortraitContainer;
