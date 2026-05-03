function Filter({ setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search by name..."
      onChange={(e) => setSearch(e.target.value)}
      style={{ padding: "5px", marginBottom: "10px" }}
    />
  );
}

export default Filter;