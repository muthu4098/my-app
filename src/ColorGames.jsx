import { useState } from "react";

export function ColorGames() {
  const [color, setColor] = useState("pink");
  const styles = {
    background: color,
  };

  const intial = ["pink", "purple", "plum", "orange"];
  const [addcolor, setaddColor] = useState(intial);

  return (

    <div>
      {/* Task 2.2 - Update the background the input */}

      <input
        value={color}
        style={styles}
        onChange={(event) => setColor(event.target.value)}
        type="text" />
      {/* Task 3.2 - Uses colors - Display Color Box */}
      <button onClick={(() => setaddColor([...addcolor, color]))}>➕ Add</button>
      {addcolor.map(clr => <ColorBox clr={clr} />
      )}


      {/* Task 3.1 - Uses colors - Display Color Box */}
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
