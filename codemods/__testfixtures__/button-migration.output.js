import { Button } from "ui-core";

function App() {
  return (
    <div>
      <Button variant="solid" size="sm" onClick={() => alert("hi")}>
        Click
      </Button>
      <Button kind="secondary">Another</Button>
    </div>
  );
}
