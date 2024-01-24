import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./Routes";
import Layout from "./layouts/Layout";

function App() {
  const routers = createBrowserRouter(routes);
  return (
    <Layout>
      <RouterProvider router={routers} />
    </Layout>
  );
}

export default App;
