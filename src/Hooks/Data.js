import React, { useState, useEffect } from "react";

const Data = () => {
  const [data, setData] = useState(0);
  const [value, setValue] = useState(20);
  //   const[varaibleName, setVariable] = useState(initialValue)

  useEffect(()=>{         //useEffect(function,[stateVariable])
    window.alert("value updated");
  }, [value])
  

  return (
    <>
      <div className="text-center">
        <h1>{data}</h1>
        <button className="btn btn-primary" onClick={() => setData(data + 1)}>
          Click to Increase
        </button>
        <button className="btn btn-warning" onClick={() => setData(data - 1)}>
          Click to Decrease
        </button>

        <h1>{value}</h1>
        {value < 200 && (
          <button
            className="btn btn-primary"
            onClick={() => {
              setValue(value + 20);
            }}
          >
            Click to Increase
          </button>
        )}

        {value > 0 && (
          <button
            className="btn btn-warning"
            onClick={() => {
              setData(data + 1);
              setValue(value - 20);
            }}
          >
            Click to Decrease
          </button>
        )}
      </div>
    </>
  );
};
export default Data;
