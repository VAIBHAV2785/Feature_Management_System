import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import toast from "react-hot-toast";

import SearchBar from "../components/featureflag/SearchBar";
import FeatureFlagTable from "../components/featureflag/FeatureFlagTable";
import FeatureFlagForm from "../components/featureflag/FeatureFlagForm";
import Modal from "../components/common/Modal";

import {
  getFeatureFlags,
  createFeatureFlag,
  updateFeatureFlag,
  deleteFeatureFlag,
} from "../services/featureFlagService";

export default function FeatureFlag() {

  const [flags, setFlags] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [modalOpen, setModalOpen] = useState(false);

  const [selectedFlag, setSelectedFlag] = useState(null);

  useEffect(() => {

    loadFlags();

  }, []);

  async function loadFlags() {

    try {

      const response = await getFeatureFlags();

      setFlags(response.data);

    }

    catch {

      toast.error("Unable to load Feature Flags");

    }

    finally {

      setLoading(false);

    }

  }

  async function handleSubmit(data) {

    try {

      if (selectedFlag) {

        await updateFeatureFlag(selectedFlag.id, data);

        toast.success("Feature Flag Updated");

      }

      else {

        await createFeatureFlag(data);

        toast.success("Feature Flag Created");

      }

      closeModal();

      loadFlags();

    }

    catch {

      toast.error("Operation Failed");

    }

  }

  async function handleDelete(id) {

    if (!window.confirm("Delete this Feature Flag?")) return;

    try {

      await deleteFeatureFlag(id);

      toast.success("Feature Flag Deleted");

      loadFlags();

    }

    catch {

      toast.error("Delete Failed");

    }

  }

  function handleEdit(flag) {

    setSelectedFlag(flag);

    setModalOpen(true);

  }

  function handleCreate() {

    setSelectedFlag(null);

    setModalOpen(true);

  }

  function closeModal() {

    setSelectedFlag(null);

    setModalOpen(false);

  }

  const filteredFlags = flags.filter(flag =>

    flag.key.toLowerCase().includes(search.toLowerCase())

  );

  if (loading) {

    return <h2>Loading...</h2>;

  }

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

            🚀 Feature Flags

          </h1>

          <p
            style={{
              color:"#64748B",
              marginTop:6
            }}
          >

            Manage application feature rollout

          </p>

        </div>

        <button

          onClick={handleCreate}

          style={{

            background:"#2563EB",

            color:"white",

            padding:"14px 24px",

            borderRadius:12,

            border:"none",

            display:"flex",

            alignItems:"center",

            gap:10,

            fontWeight:600

          }}

        >

          <Plus size={20}/>

          Create Flag

        </button>

      </div>

      <SearchBar

        value={search}

        onChange={setSearch}

      />

      <div style={{marginTop:25}}>

        <FeatureFlagTable

          flags={filteredFlags}

          onEdit={handleEdit}

          onDelete={handleDelete}

        />

      </div>

      <Modal

        isOpen={modalOpen}

        onClose={closeModal}

        title={

          selectedFlag

          ?

          "Edit Feature Flag"

          :

          "Create Feature Flag"

        }

      >

        <FeatureFlagForm

          initialData={selectedFlag}

          onSubmit={handleSubmit}

        />

      </Modal>

    </div>

  );

}