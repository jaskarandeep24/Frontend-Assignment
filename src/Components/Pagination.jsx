function Pagination({ total, currentPage, setCurrentPage }) {
  const totalPages = Math.ceil(total / 10);

  return (
    <div style={{ marginTop: "20px" }}>
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      <span style={{ margin: "0 10px" }}>
        {currentPage} / {totalPages}
      </span>

      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;