import { useState } from "react";

export default function ToggleVisibility() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h2>{show === true ? "Hide Me" : ""}</h2>
      <button onClick={() => setShow(!show)}>
        {show === true ? "Hide" : "Show"}
      </button>
      <div className="description">
        <h3>Description:</h3>
        <p>
          The toggle visibility widgit allows a user to toggle between
          visibility for an element.
        </p>
        <ul>
          <li>Press the Hide/Show button to toggle between visibility</li>
        </ul>
      </div>
    </div>
  );
}
