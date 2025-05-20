import { Button } from "ui-lib";

function App() {
  return (
    <div>
      <Button kind="primary" small onClick={() => alert("hi")}>
        Click
      </Button>
      <Button kind="secondary">Another</Button>
    </div>
  );
}
