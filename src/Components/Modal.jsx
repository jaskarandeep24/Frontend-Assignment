function Modal({ item, onClose }) {
  return (
    <div style={{
      position: "fixed",
      top: "30%",
      left: "40%",
      background: "white",
      padding: "20px",
      border: "2px solid black"
    }}>
      <h2>Details</h2>
      <p><b>Code:</b> {item.codigo}</p>
      <p><b>Name:</b> {item.nome}</p>

      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default Modal;