import "./home.scss";
import Button from "@mui/material/Button";
import { useState } from "react";
import { FaBackspace } from "react-icons/fa";

const data = [
  "AC",
  "",
  "x",
  "",
  "7",
  "8",
  "9",
  "",
  "4",
  "5",
  "6",
  "",
  "1",
  "2",
  "3",
  "+",
  "0",
  "",
  "=",
];

const HomePage = () => {
  const [calcTextArea, setCalcTextArea] = useState("");
  const [isEqualClicked, setIsEqualClicked] = useState(false);

  const calculateExpression = () => {
    if (!isNaN(calcTextArea.charAt(calcTextArea.length - 1))) {
      let answer = calcTextArea
        .split("+")
        .map((e) => +e)
        .reduce((sum, e) => sum + e);
      setCalcTextArea(answer);
      setIsEqualClicked(true);
    }
  };
  const onButtonClick = (button) => {
    let currentExpression = calcTextArea;
    if (isEqualClicked) {
      setIsEqualClicked(false);
      currentExpression = "";
    }
    switch (button) {
      case "=":
        calculateExpression();
        break;
      case "AC":
        setCalcTextArea("");
        break;
      case "x":
        setCalcTextArea(currentExpression.slice(0, -1));
        break;
      default:
        if (isNaN(+button)) {
          if (!isNaN(currentExpression.charAt(currentExpression.length - 1))) {
            setCalcTextArea(currentExpression + button);
          }
        } else {
          setCalcTextArea(currentExpression + button);
        }
    }
  };

  return (
    <form class="calc" name="calc">
      <textarea class="top-header" name="txt" value={calcTextArea}></textarea>
      <div class="lower-div">
        <div class="div-row">
          {data.map((e) => (
            <div class={e === "0" ? "item2" : "item"}>
              <div
                class={
                  e === "AC" || e === "" || e === "x"
                    ? "b1"
                    : e === "0"
                    ? "b4"
                    : !isNaN(+e)
                    ? "b2"
                    : "b3"
                }
                onClick={() => onButtonClick(e)}
              >
                {e === "x" ? <FaBackspace /> : e}
              </div>
            </div>
          ))}
        </div>
      </div>
    </form>
  );
};

export default HomePage;
