import { useEffect } from "react";
import { useState } from "react";
import List from "./Home";

function App() {
  // ?
  const [data, setData] = useState("");

  useEffect(() => {
    const apiData = () => {
      fetch("http://localhost:5000/data")
        .then((res) => res.json())
        .then((data) => console.log(data.api))
        .catch((error) => console.log("ERROR"));
    };
  });

  return (
    <div>
      <List />
    </div>
  );
}
export default App;
