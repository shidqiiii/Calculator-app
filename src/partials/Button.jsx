import React from "react";

function Button(props) {
  return (
    <div className="input-button">
      <button className="btn" value={7} onClick={props.inputNumber}>
        7
      </button>
      <button className="btn" value={8} onClick={props.inputNumber}>
        8
      </button>
      <button className="btn" value={9} onClick={props.inputNumber}>
        9
      </button>
      <button className="btn btn-del" onClick={props.deleteNumber}>
        Del
      </button>
      <button className="btn " value={4} onClick={props.inputNumber}>
        4
      </button>
      <button className="btn" value={5} onClick={props.inputNumber}>
        5
      </button>
      <button className="btn" value={6} onClick={props.inputNumber}>
        6
      </button>
      <button className="btn btn-operator" value={"+"} onClick={props.inputOperator}>
        &#43;
      </button>
      <button className="btn" value={1} onClick={props.inputNumber}>
        1
      </button>
      <button className="btn" value={2} onClick={props.inputNumber}>
        2
      </button>
      <button className="btn" value={3} onClick={props.inputNumber}>
        3
      </button>
      <button className="btn btn-operator" value={"-"} onClick={props.inputOperator}>
        &minus;
      </button>
      <button className="btn" value={"."} onClick={props.inputNumber}>
        ,
      </button>
      <button className="btn" value={0} onClick={props.inputNumber}>
        0
      </button>
      <button className="btn btn-operator" value={"/"} onClick={props.inputOperator}>
        &divide;
      </button>
      <button className="btn btn-operator" value={"*"} onClick={props.inputOperator}>
        &times;
      </button>
      <button className="btn btn-reset" onClick={props.reset}>
        Reset
      </button>
      <button className="btn btn-sum" onClick={props.total}>
        &#61;
      </button>
    </div>
  );
}

export default Button;
