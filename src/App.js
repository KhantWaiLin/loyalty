import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./layouts/Layout";
import Routers from "./Routes";

function App() {
  return (
    <Router>
      <Layout>
        <Routers />
      </Layout>
    </Router>
  );
}

export default App;
