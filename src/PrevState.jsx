import { useEffect, useRef, useState } from "react";

const PrevState = () => {
  const [term, setTerm] = useState("javascript");

  const prevStateTerm = useRef("");

  useEffect(() => {
    prevStateTerm.current = term;
  }, [term]);

  const prevTerm = prevStateTerm.current;

  console.log(term);
  console.log(prevTerm);

  return (
    <div className="App">
      <input
        type="text"
        className="form-control"
        id="exampleFormControlInput1"
        onChange={(e) => setTerm(e.target.value)}
        value={term}
      />

      <p>Current term: {term}</p>
      <p>Prev Term: {prevTerm}</p>

      <p>
        1-define use ref <br />
        2-prevTerm = undefined;
        <br />
        3-render
        <br />
        4-use effect - use ref - javascript
        <br />
        5-update state (term) javascript 2<br />
        6-render - print state (javascript2) / print use ref (javascript)
        <br />
        7-use effect - use ref - javascript2
        <br />
      </p>
    </div>
  );
};

export default PrevState;
