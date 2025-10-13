import { Box } from "./graphics/components/box";
import { WorldCanvas } from "./graphics/components/world-canvas";
import "./index.css";

function App() {
  return (
    <WorldCanvas>
      <Box />
    </WorldCanvas>
  );
}

export default App;
