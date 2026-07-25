import { useEffect, useState } from "react";
import toast from "react-hot-toast";

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
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [open, setOpen] = useState(false);

  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load Users");
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(data) {
    try {
      if (selectedUser) {
        await updateUser(selectedUser.id, data);
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
    }
  }

  async function handleDelete(id) {
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
          </p>

        </div>

        <button
          onClick={handleCreate}
          className="bg-gradient-to-r
          from-blue-600 to-indigo-600
          hover:from-blue-700 hover:to-indigo-700
          text-white px-6 py-3 rounded-xl
          shadow-lg transition duration-300
          hover:scale-105"
        >
          + Create User
        </button>

      </div>

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