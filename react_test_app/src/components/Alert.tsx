import type { ReactNode } from "react";

interface Prop {
  text: ReactNode;
}

function Alert(props: Prop) {
  return (
    <div className="alert alert-primary"> You have selected {props.text}</div>
  );
}

export default Alert;
