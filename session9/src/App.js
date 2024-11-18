import "./App.css";
import { useEffect, useState } from "react";
import UsersList from "./components/user-list";
import usersMock from "./users.json";
import SalesChart from "./components/charts/sales-chart";
function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(users);
  useEffect(() => {
    setLoading(true);
    /**
     * fetch("https://randomuser.me/api/?key=SR6W-832J-JVF1-XUIT&results=20")
      .then((response) => response.json())
      .then((data) => setUsers(data.results))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
     */
    setUsers(usersMock);
    setLoading(false);
  }, []);
  return (
    <div className="App">
      <main>
        {/**
       *   {error ? (
          <h3>{error}</h3>
        ) : (
          <>
            {loading ? (
              <h3>Cargando...</h3>
            ) : (
              <section className="users-section">
                <h1>Lista de Usuarios</h1> <UsersList users={users} />
              </section>
            )}
          </>
        )}
       */}
        <SalesChart />
      </main>
    </div>
  );
}

export default App;
