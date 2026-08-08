import Modal from "./Modal";

export default function DeleteModal({
  isOpen,
  onClose,
  onDelete,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Delete Confirmation"
    >
      <p
        style={{
          marginBottom: "25px",
          fontSize: "16px",
        }}
      >
        Are you sure you want to delete this record?
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "12px",
        }}
      >
        <button
          onClick={onClose}
          style={{
            padding: "10px 18px",
            borderRadius: "8px",
            border: "1px solid #CBD5E1",
            background: "#fff",
            cursor: "pointer",
          }}
        >
          Cancel
        </button>

        <button
          onClick={onDelete}
          style={{
            padding: "10px 18px",
            borderRadius: "8px",
            border: "none",
            background: "#DC2626",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Delete
        </button>
      </div>
    </Modal>
  );
}