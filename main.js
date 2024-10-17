function JavascriptCalculator() {
  const { useState } = React;

  const [output, setOutput] = useState("");
  const operators = ["+", "-", "*", "/", "."];

  function handleCalc(value) {
    const operatorSign = /[+\-*/]/;

    if (output === "" && value === "0") return;
    if (value === ".") {
      const parts = output.split(operatorSign);
      if (parts[parts.length - 1].includes(".")) {
        return;
      }
    }
    if (value !== "-" && operatorSign.test(value)) {
      const last = output.slice(-1) || "";
      const secondLast = output.slice(-2, -1) || "";

      if (operatorSign.test(last)) {
        if (last === "-" && operatorSign.test(secondLast)) {
          setOutput(output.slice(0, -2) + value);
          return;
        }
        setOutput(output.slice(0, -1) + value);
        return;
      }
    }
    setOutput(output + value);
  }

  function handleEquals() {
    const result = math.evaluate(output);
    setOutput(String(result));
  }

  function handleDelete() {
    if (output === "") return;
    const value = output.slice(0, -1);
    setOutput(value);
  }

  function handleClear() {
    setOutput("");
  }

  return (
    <div id="calculator" className="container">
      <div className="output-screen" id="display">
        {output || "0"}
      </div>
      <div className="buttons">
        <button id="clear" onClick={handleClear}>
          AC
        </button>
        <button id="delete" onClick={handleDelete}>
          DEL
        </button>
        <button id="divide" onClick={() => handleCalc("/")}>
          /
        </button>
        <button id="multiply" onClick={() => handleCalc("*")}>
          x
        </button>
        <button id="seven" onClick={() => handleCalc("7")}>
          7
        </button>
        <button id="eight" onClick={() => handleCalc("8")}>
          8
        </button>
        <button id="nine" onClick={() => handleCalc("9")}>
          9
        </button>
        <button id="subtract" onClick={() => handleCalc("-")}>
          -
        </button>
        <button id="four" onClick={() => handleCalc("4")}>
          4
        </button>
        <button id="five" onClick={() => handleCalc("5")}>
          5
        </button>
        <button id="six" onClick={() => handleCalc("6")}>
          6
        </button>
        <button id="add" onClick={() => handleCalc("+")}>
          +
        </button>
        <button id="one" onClick={() => handleCalc("1")}>
          1
        </button>
        <button id="two" onClick={() => handleCalc("2")}>
          2
        </button>
        <button id="three" onClick={() => handleCalc("3")}>
          3
        </button>
        <button id="zero" onClick={() => handleCalc("0")}>
          0
        </button>
        <button id="decimal" onClick={() => handleCalc(".")}>
          .
        </button>
        <button id="equals" onClick={handleEquals}>
          =
        </button>
      </div>
    </div>
  );
}

ReactDOM.render(
  <JavascriptCalculator />,
  document.querySelector("#calculator-wrapper")
);
