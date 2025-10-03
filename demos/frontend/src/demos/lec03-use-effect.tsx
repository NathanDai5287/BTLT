import { useState, useEffect } from "react";

export function UseEffectDemo() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  useEffect(() => {
    console.log("useEffect(_): runs on every render");
  });

  useEffect(() => {
    console.log("useEffect([]): runs only on mount");
  }, []);

  useEffect(() => {
    console.log(`useEffect(a): runs when a changes: a=${a}`);
  }, [a]);

  return (
    <div>
      <div>
        <p>a={a}</p>
        <button onClick={() => setA(a+ 1)}>Increment a</button>
      </div>
      <div>
        <p>b={b}</p>
        <button onClick={() => setB(b+ 1)}>Increment b</button>
      </div>
    </div>
  );
}
