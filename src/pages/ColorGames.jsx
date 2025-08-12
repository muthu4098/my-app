import { useState } from "react";

export function ColorGames() {
  const [color, setColor] = useState("pink");
  const styles = {
    background: color,
  };

  const intial = ["pink", "purple", "plum", "orange"];
  const [addcolor, setaddColor] = useState(intial);

  return (

    <div className="colorgame-contain">

      <input
        value={color}
        style={styles}
        onChange={(event) => setColor(event.target.value)}
        type="text" />
      <button onClick={(() => setaddColor([...addcolor, color]))}>➕ Add</button>
      {addcolor.map(clr => <ColorBox clr={clr} />
      )}


    </div>
  );
}
function ColorBox({ clr }) {
  const boxStyles = {
    background: clr,
    height: "25px",
    width: "225px",
    marginTop: "8px",
  };

  return <div style={boxStyles}></div>;
}
