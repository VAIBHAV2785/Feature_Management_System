import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import OverrideTable from "../components/override/OverrideTable";
import OverrideForm from "../components/override/OverrideForm";
import SearchBar from "../components/override/SearchBar";
import Modal from "../components/common/Modal";

import {
  getOverrides,
  createOverride,
  updateOverride,
  deleteOverride,
} from "../services/overrideService";

export default function Override() {

  const [overrides, setOverrides] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [open, setOpen] = useState(false);

  const [selectedOverride, setSelectedOverride] = useState(null);

  useEffect(() => {
    loadOverrides();
  }, []);

  async function loadOverrides() {

    try {

      const response = await getOverrides();

      setOverrides(response.data);

    } catch {

      toast.error("Failed to load Overrides");

    } finally {

      setLoading(false);

    }
  }

  async function handleSubmit(data) {

    try {

      if (selectedOverride) {

        await updateOverride(selectedOverride.id, data);

        toast.success("Override Updated");

      } else {

        await createOverride(data);

        toast.success("Override Created");

      }

      closeModal();

      loadOverrides();

    } catch {

      toast.error("Operation Failed");

    }

  }

  async function handleDelete(id) {

    if (!window.confirm("Delete Override?")) return;

    try {

      await deleteOverride(id);

      toast.success("Override Deleted");

      loadOverrides();

    } catch {

      toast.error("Delete Failed");

    }

  }

  function handleEdit(item) {

    setSelectedOverride(item);

    setOpen(true);

  }

  function handleCreate() {

    setSelectedOverride(null);

    setOpen(true);

  }

  function closeModal() {

    setSelectedOverride(null);

    setOpen(false);

  }

  const filtered = overrides.filter((o) =>
    o.flag_name?.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {

    return (
      <h2 className="text-2xl font-bold">
        Loading Overrides...
      </h2>
    );

  }

  return (

    <div className="space-y-6">

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold">
            ⚙ Environment Overrides
          </h1>

          <p className="text-gray-500">
            Manage environment specific feature flags.
          </p>

        </div>

        <button

          onClick={handleCreate}

          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl"

        >
          + New Override
        </button>

      </div>

      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <OverrideTable
        overrides={filtered}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <Modal
        isOpen={open}
        onClose={closeModal}
        title={
          selectedOverride
            ? "Edit Override"
            : "Create Override"
        }
      >
        <OverrideForm
          initialData={selectedOverride}
          onSubmit={handleSubmit}
        />
      </Modal>

    </div>

  );

}