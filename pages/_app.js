import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1 onClick = {() => setCounter(counter + 1)}>Counter Externo: {counter}</h1>
      <Component {...pageProps} counter={counter} />;
    </>
  );
}
