import { useEffect, useState } from "react";
import { fetchCars } from "./services/api";
import DataTable from "./components/DataTable";
import Pagination from "./components/Pagination";
import Filter from "./components/Filter";
import Modal from "./components/Modal";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selected, setSelected] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const itemsPerPage = 10;

  useEffect(() => {
    fetchCars().then(setData);
  }, []);

  // FILTER
  let filteredData = data.filter(item =>
    item.nome.toLowerCase().includes(search.toLowerCase())
  );

  // SORT
  filteredData.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.nome.localeCompare(b.nome);
    } else {
      return b.nome.localeCompare(a.nome);
    }
  });

  // PAGINATION
  const start = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(start, start + itemsPerPage);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Car Models</h1>

      <Filter setSearch={setSearch} />

      <button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
        Sort: {sortOrder}
      </button>

      <DataTable data={paginatedData} onView={setSelected} />

      <Pagination
        total={filteredData.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {selected && (
        <Modal item={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
<div className="container"></div>

export default App;