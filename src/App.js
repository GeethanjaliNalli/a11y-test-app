import React from "react";

function App() {
  return (
    <div>
      <h1>Accessibility Test App</h1>

      {/* ❌ Missing alt */}
      <img src="https://via.placeholder.com/150" />

      {/* ❌ Empty button */}
      <button></button>

      {/* ❌ Input without label */}
      <input type="text" placeholder="Enter name" />

      {/* ❌ Low contrast */}
      <p style={{ color: "#ccc", backgroundColor: "#fff" }}>
        Low contrast text
      </p>

      {/* ❌ Wrong heading order */}
      <h4>Heading jump</h4>

      {/* ❌ Link without href */}
      <a>Click here</a>

      {/* ❌ Form without labels */}
      <form>
        <input type="email" />
        <button type="submit">Submit</button>
      </form>

      {/* ❌ ARIA misuse */}
      <div role="button">Fake button</div>
    </div>
  );
}

export default App;