import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
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
            Manage application environments.
          </p>

        </div>

        <button

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

        </button>

      </div>

      <SearchBar

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

}