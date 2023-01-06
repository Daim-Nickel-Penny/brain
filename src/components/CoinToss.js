import React from "react";

export default function CoinToss() {
  const [val, setVal] = React.useState(Math.floor(Math.random() * 10));

  // React.useEffect(() => {
  //   setVal(Math.floor(Math.random() * 10));
  // }, []);

  return (
    <div>
      {val % 2 === 0 ? (
        <div>
          <h1>Heads</h1>
          <img
            src={"https://media.giphy.com/media/CAYVZA5NRb529kKQUc/giphy.gif"}
            width="400rem"
            height="300rem"
            style={{ borderRadius: "12px", marginBottom: "1rem" }}
          />
        </div>
      ) : (
        <div>
          <h1>Tails</h1>
          <img
            src={"https://media.giphy.com/media/u03ahOT8hXFUGYaZ1n/giphy.gif"}
            width="400rem"
            height="350rem"
            style={{ borderRadius: "12px", marginBottom: "1rem" }}
          />
        </div>
      )}
    </div>
  );
}
