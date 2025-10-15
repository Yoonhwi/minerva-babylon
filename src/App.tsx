import "./index.css";

import { Layout } from "./components/layout/layout";
import { Box } from "./graphics/components/box";
import { WorldCanvas } from "./graphics/components/world-canvas";

function App() {
  return (
    <Layout>
      <WorldCanvas>
        <Box />
      </WorldCanvas>
    </Layout>
  );
}

export default App;
