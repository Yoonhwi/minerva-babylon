import "./index.css";

import { Box } from "./graphics/components/box";
import { WorldCanvas } from "./graphics/components/world-canvas";

function App() {
  return (
    <WorldCanvas>
      <Box />
    </WorldCanvas>
  );
}

export default App;
