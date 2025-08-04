import { useState } from "react";

export default function ToggleGreeting() {
  const [greeting, setGreeting] = useState(true);

  return (
    <div>
      <h2>{greeting === true ? "Hello" : "Goodbye"}</h2>
      <button onClick={() => setGreeting(!greeting)}>Toggle Me</button>
      <div className="description">
        <h3>Description:</h3>
        <p>
          The toggle greeting widgit allows a user to toggle between Hello and
          Goodbye.
        </p>
        <ul>
          <li>
            Press the Toggle Me button to toggle between Hello and Goodbye
          </li>
        </ul>
      </div>
    </div>
  );
}
