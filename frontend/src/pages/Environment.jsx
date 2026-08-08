import { useEffect, useState } from "react";
<<<<<<< HEAD
import { Plus } from "lucide-react";
=======
>>>>>>> bcd60838 (MILESTONE 2)
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
<<<<<<< HEAD

  const [environments, setEnvironments] = useState([]);

=======
  const [environments, setEnvironments] = useState([]);
>>>>>>> bcd60838 (MILESTONE 2)
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [modalOpen, setModalOpen] = useState(false);

  const [selectedEnvironment, setSelectedEnvironment] = useState(null);

  useEffect(() => {
    loadEnvironments();
  }, []);

  async function loadEnvironments() {
<<<<<<< HEAD

    try {

      const response = await getEnvironments();

      setEnvironments(response.data);

    }

    catch {

      toast.error("Unable to load environments");

    }

    finally {

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

    }

    catch {

      toast.error("Operation Failed");

    }

  }

  async function handleDelete(id) {

    if (!window.confirm("Delete Environment?")) return;

    try {

      await deleteEnvironment(id);

      toast.success("Environment Deleted");

      loadEnvironments();

    }

    catch {

      toast.error("Delete Failed");

    }

  }

  function handleCreate() {

    setSelectedEnvironment(null);

    setModalOpen(true);

  }

  function handleEdit(env) {

    setSelectedEnvironment(env);

    setModalOpen(true);

  }

  function closeModal() {

    setSelectedEnvironment(null);

    setModalOpen(false);

  }

  const filtered = environments.filter((env) =>
    env.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <h2>Loading...</h2>;

  return (

    <div>

      <div
        style={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          marginBottom:30
        }}
      >

        <div>

          <h1
            style={{
              fontSize:34,
              fontWeight:700
            }}
          >
            🌍 Environments
          </h1>

          <p
            style={{
              color:"#64748B"
            }}
          >
=======
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
>>>>>>> bcd60838 (MILESTONE 2)
            Manage application environments.
          </p>

        </div>

        <button
<<<<<<< HEAD

          onClick={handleCreate}

          style={{

            background:"#2563EB",

            color:"white",

            border:"none",

            padding:"14px 24px",

            borderRadius:12,

            display:"flex",

            alignItems:"center",

            gap:10,

            cursor:"pointer",

            fontWeight:600

          }}

        >

          <Plus size={20}/>

          Create Environment

=======
          onClick={handleCreate}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg"
        >
          + New Environment
>>>>>>> bcd60838 (MILESTONE 2)
        </button>

      </div>

      <SearchBar
<<<<<<< HEAD

        value={search}

        onChange={setSearch}

      />

      <div style={{marginTop:25}}>

        <EnvironmentTable

          environments={filtered}

          onEdit={handleEdit}

          onDelete={handleDelete}

        />

      </div>

      <Modal

        isOpen={modalOpen}

        onClose={closeModal}

        title={

          selectedEnvironment

          ?

          "Edit Environment"

          :

          "Create Environment"

        }

      >

        <EnvironmentForm

          initialData={selectedEnvironment}

          onSubmit={handleSubmit}

        />

      </Modal>

    </div>

  );

=======
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
>>>>>>> bcd60838 (MILESTONE 2)
}