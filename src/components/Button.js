import React from "react";

function Button(props) {
  const attributes = {
    id: props.id,
    className: props.className,
    onClick: props.onClick,
    value: props.value
  };

  return <button {...attributes}>{props.value}</button>;
}

export default Button;
