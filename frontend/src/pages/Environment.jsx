import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import EnvironmentTable from "../components/environment/EnvironmentTable";
import EnvironmentForm from "../components/environment/EnvironmentForm";
import SearchBar from "../components/environment/SearchBar";
import Modal from "../components/common/Modal";

import {
  getEnvironments,
  createEnvironment,
  updateEnvironment,
  deleteEnvironment,
} from "../services/environmentService";

export default function Environment() {
  const [environments, setEnvironments] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [modalOpen, setModalOpen] = useState(false);

  const [selectedEnvironment, setSelectedEnvironment] = useState(null);

  useEffect(() => {
    loadEnvironments();
  }, []);

  async function loadEnvironments() {
    try {
      const response = await getEnvironments();
      setEnvironments(response.data);
    } catch (error) {
      toast.error("Failed to load Environments");
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(data) {
    try {
      if (selectedEnvironment) {
        await updateEnvironment(selectedEnvironment.id, data);
        toast.success("Environment Updated");
      } else {
        await createEnvironment(data);
        toast.success("Environment Created");
      }

      closeModal();
      loadEnvironments();

    } catch (error) {
      toast.error("Operation Failed");
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Delete this Environment?")) return;

    try {
      await deleteEnvironment(id);
      toast.success("Environment Deleted");
      loadEnvironments();

    } catch (error) {
      toast.error("Delete Failed");
    }
  }

  function handleEdit(environment) {
    setSelectedEnvironment(environment);
    setModalOpen(true);
  }

  function handleCreate() {
    setSelectedEnvironment(null);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setSelectedEnvironment(null);
  }

  const filteredEnvironments = environments.filter((env) =>
    env.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <h2 className="text-2xl font-bold">
        Loading Environments...
      </h2>
    );
  }

  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-4xl font-bold">
            🌍 Environments
          </h1>

          <p className="text-gray-500">
            Manage application environments.
          </p>

        </div>

        <button
          onClick={handleCreate}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg"
        >
          + New Environment
        </button>

      </div>

      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <EnvironmentTable
        environments={filteredEnvironments}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        title={
          selectedEnvironment
            ? "Edit Environment"
            : "Create Environment"
        }
      >
        <EnvironmentForm
          initialData={selectedEnvironment}
          onSubmit={handleSubmit}
        />
      </Modal>

    </div>
  );
}