import React from "react";

type ColorBoxProps = {
  color: string;
};

const ColorBox: React.FC<ColorBoxProps> = ({ color }) => {
  const boxStyle: React.CSSProperties = {
    width: "200px",
    height: "200px",
    backgroundColor: color,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontWeight: "bold",
    margin: "10px",
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div style={boxStyle}>Box</div>
      <div>{color}</div>
    </div>
  );
};

export default ColorBox;
