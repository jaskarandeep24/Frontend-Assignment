function DataTable({ data, onView }) {
  return (
    <table border="1" width="100%" style={{ marginTop: "20px" }}>
      <thead>
        <tr>
          <th>Code</th>
          <th>Name</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {data.map(item => (
          <tr key={item.codigo}>
            <td>{item.codigo}</td>
            <td>{item.nome}</td>
            <td>
              <button onClick={() => onView(item)}>View</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;