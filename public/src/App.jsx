import { useState } from "react";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Clients from "./pages/Clients";
import Complaints from "./pages/Complaints";

export default function App() {
  const [page, setPage] = useState("dashboard");

  const renderPage = () => {
    switch(page){
      case "clients": return <Clients />;
      case "complaints": return <Complaints />;
      default: return <Dashboard />;
    }
  };

  return (
    <Layout setPage={setPage}>
      {renderPage()}
    </Layout>
  );
}
