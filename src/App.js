// App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./layouts/Layout";
import Routers from "./Routes";
import { LanguageProvider } from "./LanguageContext";

function App() {
  return (
    <Router>
      <LanguageProvider>
        <Layout>
          <Routers />
        </Layout>
      </LanguageProvider>
    </Router>
  );
}

export default App;
