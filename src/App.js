import "./styles.css";
import { useRef, useState } from "react";

const deleteButtonStyle = {
  marginLeft: "5px",
  color: "red",
  borderRadius: "50%",
  border: "none",
  background: "none",
  cursor: "pointer"
};

export default function App() {
  const inp1 = useRef();
  const [values, setValues] = useState([]);

  const addToList = (e) => {
    e.preventDefault();
    if (inp1.current.value.trim() !== "") {
      setValues([...values, inp1.current.value]);
      inp1.current.value = "";
    }
  };

  return (
    <div className="App" style={{ textAlign: "left" }}>
      <form onSubmit={addToList}>
        <input type="text" ref={inp1} style={{ marginRight: "10px" }} />
        <button type="submit" style={{ cursor: "pointer" }}>
          Add to list
        </button>
      </form>
      <br />
      <ul>
        {values.map((item, key) => (
          <li key={key}>
            {item}
            <button
              onClick={() => {
                delete values[key];
                let vals = values.filter((item) => item !== undefined);
                setValues([...vals]);
              }}
              style={deleteButtonStyle}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      {values.length !== 0 && (
        <>
          <br />
          <br />
          <button onClick={() => setValues([])} style={{ cursor: "pointer" }}>
            Clear All
          </button>
        </>
      )}
    </div>
  );
}
