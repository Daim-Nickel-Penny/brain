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
          <p>
            Congratulations! 🎊 You're a winner and a total cool kid. You're the
            envy of all your friends, and you can do no wrong. People will look
            up to you and admire your good fortune.
          </p>
          <img
            src={"https://media.giphy.com/media/CAYVZA5NRb529kKQUc/giphy.gif"}
            width="400rem"
            height="300rem"
            style={{ borderRadius: "12px", marginBottom: "1rem" }}
          />

          <h6>
            Just remember, coin tosses are just a bit of fun, and there's no
            such thing as a real winner or loser. So don't take it too
            seriously, and just have a good time. And remember, it's all just a
            joke!
          </h6>
        </div>
      ) : (
        <div>
          <h1>Tails</h1>
          <p>
            You're not a loser, you're just...experiencing some temporary bad
            luck. It's not the end of the world, and you can still turn things
            around.
          </p>
          <img
            src={"https://media.giphy.com/media/u03ahOT8hXFUGYaZ1n/giphy.gif"}
            width="400rem"
            height="350rem"
            style={{ borderRadius: "12px", marginBottom: "1rem" }}
          />

          <h6>
            Just remember, coin tosses are just a bit of fun, and there's no
            such thing as a real winner or loser. So don't take it too
            seriously, and just have a good time. And remember, it's all just a
            joke!
          </h6>
        </div>
      )}
    </div>
  );
}
