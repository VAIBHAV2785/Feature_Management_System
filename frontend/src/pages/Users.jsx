import { useEffect, useState } from "react";
<<<<<<< HEAD
import { Plus } from "lucide-react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
=======
import toast from "react-hot-toast";
>>>>>>> bcd60838 (MILESTONE 2)

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
<<<<<<< HEAD
  const { t } = useTranslation();

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
=======
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [open, setOpen] = useState(false);

  const [selectedUser, setSelectedUser] = useState(null);
>>>>>>> bcd60838 (MILESTONE 2)

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    try {
      const response = await getUsers();
      setUsers(response.data);
<<<<<<< HEAD
    } catch {
      toast.error(t("users.loadFailed"));
=======
    } catch (error) {
      console.error(error);
      toast.error("Failed to load Users");
>>>>>>> bcd60838 (MILESTONE 2)
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(data) {
    try {
      if (selectedUser) {
        await updateUser(selectedUser.id, data);
<<<<<<< HEAD
        toast.success(t("users.updated"));
      } else {
        await createUser(data);
        toast.success(t("users.created"));
      }

      closeModal();
      loadUsers();
    } catch {
      toast.error(t("users.operationFailed"));
=======
        toast.success("User Updated Successfully");
      } else {
        await createUser(data);
        toast.success("User Created Successfully");
      }

      setOpen(false);
      setSelectedUser(null);

      loadUsers();
    } catch (error) {
      console.error(error);
      toast.error("Operation Failed");
>>>>>>> bcd60838 (MILESTONE 2)
    }
  }

  async function handleDelete(id) {
<<<<<<< HEAD
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
=======
    if (!window.confirm("Delete this User?")) return;

    try {
      await deleteUser(id);
      toast.success("User Deleted");
      loadUsers();
    } catch (error) {
      console.error(error);
      toast.error("Delete Failed");
    }
  }

  function handleEdit(user) {
    setSelectedUser(user);
    setOpen(true);
  }

  function handleCreate() {
    setSelectedUser(null);
    setOpen(true);
  }

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <h2 className="text-2xl font-bold text-gray-600">
          Loading Users...
        </h2>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold text-slate-800">
            👤 Users
          </h1>

          <p className="text-gray-500 mt-2">
            Manage application users
>>>>>>> bcd60838 (MILESTONE 2)
          </p>

        </div>

        <button
<<<<<<< HEAD
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
=======
          onClick={handleCreate}
          className="bg-gradient-to-r
          from-blue-600 to-indigo-600
          hover:from-blue-700 hover:to-indigo-700
          text-white px-6 py-3 rounded-xl
          shadow-lg transition duration-300
          hover:scale-105"
        >
          + Create User
>>>>>>> bcd60838 (MILESTONE 2)
        </button>

      </div>

<<<<<<< HEAD
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
=======
      {/* Search */}

      <div className="flex justify-between items-center">

        <SearchBar
          value={search}
          onChange={setSearch}
        />

        <div className="text-gray-500 font-medium">
          Total Users :
          <span className="font-bold text-blue-600 ml-2">
            {filteredUsers.length}
          </span>
        </div>

      </div>

      {/* Table */}

      <UserTable
        users={filteredUsers}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Modal */}

      <Modal
        isOpen={open}
        onClose={() => {
          setOpen(false);
          setSelectedUser(null);
        }}
        title={
          selectedUser
            ? "Edit User"
            : "Create User"
>>>>>>> bcd60838 (MILESTONE 2)
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