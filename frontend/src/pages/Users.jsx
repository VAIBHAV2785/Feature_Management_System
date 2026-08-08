import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

import UserTable from "../components/user/UserTable";
import UserForm from "../components/user/UserForm";
import SearchBar from "../components/user/SearchBar";
import Modal from "../components/common/Modal";

import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../services/userService";

export default function Users() {
  const { t } = useTranslation();

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch {
      toast.error(t("users.loadFailed"));
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(data) {
    try {
      if (selectedUser) {
        await updateUser(selectedUser.id, data);
        toast.success(t("users.updated"));
      } else {
        await createUser(data);
        toast.success(t("users.created"));
      }

      closeModal();
      loadUsers();
    } catch {
      toast.error(t("users.operationFailed"));
    }
  }

  async function handleDelete(id) {
    if (!window.confirm(t("users.deleteConfirm"))) return;

    try {
      await deleteUser(id);
      toast.success(t("users.deleted"));
      loadUsers();
    } catch {
      toast.error(t("users.deleteFailed"));
    }
  }

  function closeModal() {
    setSelectedUser(null);
    setModalOpen(false);
  }

  const filtered = users.filter((user) =>
    (user.username || "")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (loading)
    return (
      <h2 className="text-xl font-semibold">
        {t("common.loading")}
      </h2>
    );

  return (
    <div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <div>

          <h1
            style={{
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            👤 {t("users.title")}
          </h1>

          <p
            style={{
              color: "#64748B",
            }}
          >
            {t("users.subtitle")}
          </p>

        </div>

        <button
          onClick={() => setModalOpen(true)}
          style={{
            background: "#2563EB",
            color: "white",
            border: "none",
            borderRadius: 12,
            padding: "14px 24px",
            display: "flex",
            alignItems: "center",
            gap: 10,
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          <Plus size={20} />
          {t("users.create")}
        </button>

      </div>

      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <div style={{ marginTop: 25 }}>
        <UserTable
          users={filtered}
          onEdit={(user) => {
            setSelectedUser(user);
            setModalOpen(true);
          }}
          onDelete={handleDelete}
        />
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        title={
          selectedUser
            ? t("users.editTitle")
            : t("users.createTitle")
        }
      >
        <UserForm
          initialData={selectedUser}
          onSubmit={handleSubmit}
        />
      </Modal>

    </div>
  );
}