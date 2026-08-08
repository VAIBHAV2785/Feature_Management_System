import { useEffect, useState } from "react";
<<<<<<< HEAD
import { Plus } from "lucide-react";
import toast from "react-hot-toast";

import SearchBar from "../components/featureflag/SearchBar";
import FeatureFlagTable from "../components/featureflag/FeatureFlagTable";
import FeatureFlagForm from "../components/featureflag/FeatureFlagForm";
=======
import toast from "react-hot-toast";
import {
  Plus,
  RefreshCw,
  Download,
} from "lucide-react";

import FeatureFlagTable from "../components/featureFlag/FeatureFlagTable";
import FeatureFlagForm from "../components/featureFlag/FeatureFlagForm";
import SearchBar from "../components/featureFlag/SearchBar";
>>>>>>> bcd60838 (MILESTONE 2)
import Modal from "../components/common/Modal";

import {
  getFeatureFlags,
  createFeatureFlag,
  updateFeatureFlag,
  deleteFeatureFlag,
} from "../services/featureFlagService";

export default function FeatureFlag() {
<<<<<<< HEAD

  const [flags, setFlags] = useState([]);

=======
  const [flags, setFlags] = useState([]);
>>>>>>> bcd60838 (MILESTONE 2)
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

<<<<<<< HEAD
  const [modalOpen, setModalOpen] = useState(false);
=======
  const [open, setOpen] = useState(false);
>>>>>>> bcd60838 (MILESTONE 2)

  const [selectedFlag, setSelectedFlag] = useState(null);

  useEffect(() => {
<<<<<<< HEAD

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

=======
    loadFlags();
  }, []);

  async function loadFlags() {
    try {
      const response = await getFeatureFlags();
      setFlags(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load Feature Flags");
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(data) {
    try {
      if (selectedFlag) {
        await updateFeatureFlag(selectedFlag.id, data);
        toast.success("Feature Flag Updated");
      } else {
        await createFeatureFlag(data);
        toast.success("Feature Flag Created");
      }

      setOpen(false);
      setSelectedFlag(null);

      loadFlags();
    } catch (error) {
      console.error(error);
      toast.error("Operation Failed");
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Delete this Feature Flag?")) return;

    try {
      await deleteFeatureFlag(id);
      toast.success("Feature Flag Deleted");
      loadFlags();
    } catch (error) {
      console.error(error);
      toast.error("Delete Failed");
    }
  }

  function handleEdit(flag) {
    setSelectedFlag(flag);
    setOpen(true);
  }

  function handleCreate() {
    setSelectedFlag(null);
    setOpen(true);
  }

  function exportData() {
    const blob = new Blob(
      [JSON.stringify(flags, null, 2)],
      { type: "application/json" }
    );

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "feature_flags.json";
    a.click();
  }

  const filteredFlags = flags.filter((flag) =>
    flag.key.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">

        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600"></div>

      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* Hero */}

      <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-600 p-8 text-white shadow-2xl">

        <div className="flex justify-between items-center">

          <div>

            <h1 className="text-4xl font-bold">
              🚀 Feature Flags
            </h1>

            <p className="mt-3 text-blue-100 text-lg">
              Manage rollout, targeting rules and feature releases.
            </p>

          </div>

          <button
            onClick={handleCreate}
            className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-blue-700 shadow-lg transition hover:scale-105"
          >
            <Plus size={20} />
            New Flag
          </button>

        </div>

      </div>

      {/* Toolbar */}

      <div className="rounded-2xl bg-white p-5 shadow-xl">

        <div className="flex flex-wrap items-center justify-between gap-4">

          <SearchBar
            value={search}
            onChange={setSearch}
          />

          <div className="flex items-center gap-3">

            <button
              onClick={loadFlags}
              className="flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 hover:bg-slate-200"
            >
              <RefreshCw size={18} />
              Refresh
            </button>

            <button
              onClick={exportData}
              className="flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2 text-white hover:bg-green-700"
            >
              <Download size={18} />
              Export
            </button>

            <div className="rounded-xl bg-blue-100 px-4 py-2 font-semibold text-blue-700">
              Total : {filteredFlags.length}
            </div>

          </div>

        </div>

      </div>

      {/* Table */}

      <div className="rounded-3xl bg-white shadow-xl overflow-hidden">

        <FeatureFlagTable
          flags={filteredFlags}
          onEdit={handleEdit}
          onDelete={handleDelete}
>>>>>>> bcd60838 (MILESTONE 2)
        />

      </div>

<<<<<<< HEAD
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

=======
      {/* Modal */}

      <Modal
        isOpen={open}
        onClose={() => {
          setOpen(false);
          setSelectedFlag(null);
        }}
        title={
          selectedFlag
            ? "Edit Feature Flag"
            : "Create Feature Flag"
        }
      >
        <FeatureFlagForm
          onSubmit={handleSubmit}
          initialData={selectedFlag}
        />
      </Modal>

    </div>
  );
>>>>>>> bcd60838 (MILESTONE 2)
}