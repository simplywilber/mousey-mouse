import Button from "./components/Button";
import CustomCursor from "./components/customMouse";

function App() {
  return (
    <main className="w-screen h-screen">

      <CustomCursor />
      <div>
        <Button />
      </div>
    </main>
  );
}

export default App;
