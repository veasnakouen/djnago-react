import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponent() {
  // const display = false;
  // if (display) {
  //   return <Welcome />;
  // } else {
  //   return <Code />;
  // }
  // let message;
  const display = true;

  // if (display) {
  //   message = <h1>This is the message 1.</h1>;
  // } else {
  //   message = <h1>This is the message 2.</h1>;
  // }
  // return message;

  return display ? <Welcome /> : <Code />;
}
