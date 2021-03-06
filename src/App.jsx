import React from "react";
import styles from "./App.module.scss";
import PortraitContainer from "./containers/PortraitContainer";
import { useState, useEffect } from "react";


const App = () => {
  const [numberOfSheaFaces, updateFaceNum] = useState(0);
  const [hallOfFaces, updateHallOfFaces] = useState([]);
  useEffect(() => {
    getTheRandomNum();
  }, []);

  const getTheRandomNum = () => {
    fetch(
      "https://www.random.org/integers/?num=1&min=1&max=15&col=1&base=10&format=plain&rnd=new",
    )
      .then((result) => result.json())
      .then((result) => {
        let randomNum = result;
        console.log(randomNum);
        updateFaceNum(randomNum);
        console.log(numberOfSheaFaces);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const printTheGallery = (numOfSheaFaces) => {
    let sheaFaceArray = [];

    const sheaFaceCard = (
      <div>
        <PortraitContainer />
      </div>
    );

    for (let i = 0; i < numOfSheaFaces; i++) {
      sheaFaceArray.push(sheaFaceCard);
    }

    updateHallOfFaces(sheaFaceArray);
  };

  return (
    <section className={styles.app}>
      <h1>Rotating Eyes</h1>
      <p>
        Input an angle into the box, and click the image to rotate his eyes!
      </p>
      <button onClick={() => printTheGallery(numberOfSheaFaces)}>
        Print faces!
      </button>
      <div className={styles.faces}>{hallOfFaces}</div>
    </section>
  );
};

export default App;
