import { useRef, useState } from "react";
import myStyled, { styled } from "styled-components";

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: #6fa484;
  text-align: center;
  line-height: 90px;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 20px;
  transition: 0.5s;
`;

const UseRef3 = () => {
  const boxRef = useRef(null);
  let [num, setNum] = useState(1);

  const nextRotate = () => {
    setNum(++num);
    boxRef.current.style.transform = `rotate(${num * 15}deg)`;
  };
  const prevRotate = () => {
    setNum(--num);
    boxRef.current.style.transform = `rotate(${num * 15}deg)`;
  };

  return (
    <div className="borderTop">
      <button onClick={nextRotate}>오른쪽으로</button>
      <button onClick={prevRotate}>왼쪽으로</button>

      <Box ref={boxRef}>box</Box>
    </div>
  );
};

export default UseRef3;
