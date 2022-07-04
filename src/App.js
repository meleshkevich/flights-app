import "./App.css";
import { SearchResults } from "./SearchResults";
import OurDropDown from "./Dropdown";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  console.log(isChecked);
  return (
    <main>
      <OurDropDown
        setFrom={setFrom}
        setTo={setTo}
        setIsChecked={setIsChecked}
        isChecked={isChecked}
      />
      <SearchResults from={from} to={to} isChecked={isChecked} />
    </main>
  );
}

export default App;
