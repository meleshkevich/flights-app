import { useEffect, useState } from "react";
import { Flight } from "./Flight";
import Alert from "react-bootstrap/Alert";

export function SearchResults({ from, to, isChecked }) {
  const [searchResults, setSearchResults] = useState(null);
  const [showSpinner, setShowSpinner] = useState("");

  //const url = '';

  //const url = `https://api.skypicker.com/flights?fly_from=${props.from}&fly_to=${props.to}&partner=data4youcbp202106`;
  const fetchData = async () => {
    //console.log(isChecked);
    let url = "";
    if (isChecked === true) {
      url = `https://api.skypicker.com/flights?fly_from=${from}&fly_to=${to}&partner=data4youcbp202106&max_stopovers=0`;
    } else {
      url = `https://api.skypicker.com/flights?fly_from=${from}&fly_to=${to}&partner=data4youcbp202106`;
    }

    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    setSearchResults(data.data);
    // if (data.data) {
    //     setSearchResults(data.data);
    // } else {
    //     {
    //         alert(data.error);
    //     }
    // }

    //console.log(data);
  };

  //   const Spinner = () => {
  //     return <img src="../img/spinner.svg" alt="spinner" />;
  //   };

  useEffect(() => {
    if (from && to) {
      fetchData();
    }
    setShowSpinner("");
  }, [from, to, isChecked]);

  useEffect(() => {
    setShowSpinner("none");
  }, [searchResults]);

  return (
    <div className="results-container">
      {searchResults ? (
        <>
          <div style={{ display: showSpinner, alignContent: "center" }}>
            <img src="../img/spinner.svg" alt="spinner" />
          </div>
          <div className="flights">
            {searchResults.map((item, i) => (
              <Flight key={i} data={item} />
            ))}
          </div>
        </>
      ) : (
        <div>
          <Alert variant={"info"} style={{ marginTop: "5em" }}>
            No flights are found on the selected route
          </Alert>
        </div>
      )}
    </div>
  );
}
