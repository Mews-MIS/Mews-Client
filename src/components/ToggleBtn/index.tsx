import { useState } from "react";
import * as s from "./styles";

const ToggleBtn = () => {
  const [isOn, setIsOn] = useState(false);
  const toggleHandler = () => {
    setIsOn(!isOn);
  };

  return (
    <s.Wrapper>
      <s.ToggleContainer onClick={toggleHandler}>
        <div className={`toggle-container ${isOn ? "toggle--checked" : ""}`} />
        <div className={`toggle-circle ${isOn ? "toggle--checked" : ""}`} />{" "}
      </s.ToggleContainer>
      <s.ToggleText>{isOn ? "ON" : "OFF"}</s.ToggleText>
    </s.Wrapper>
  );
};

export default ToggleBtn;
