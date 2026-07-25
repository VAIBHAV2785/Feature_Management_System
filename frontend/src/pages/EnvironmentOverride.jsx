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

export default function EnvironmentOverride() {

  const [overrides, setOverrides] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [modalOpen, setModalOpen] = useState(false);

  const [selectedOverride, setSelectedOverride] = useState(null);

  useEffect(() => {
    loadOverrides();
  }, []);

  async function loadOverrides() {

    try {

      const response = await getOverrides();

      setOverrides(response.data);

    } catch (error) {

      console.error(error);

      toast.error("Failed to load Overrides");

    } finally {

      setLoading(false);

    }

  }

  async function handleSubmit(data) {

    try {

      if (selectedOverride) {

        await updateOverride(
          selectedOverride.id,
          data.value
        );

        toast.success("Override Updated");

      } else {

        await createOverride(data);

        toast.success("Override Created");

      }

      closeModal();

      loadOverrides();

    } catch (error) {

      console.error(error);

      toast.error("Operation Failed");

    }

  }

  async function handleDelete(id) {

    if (!window.confirm("Delete this Override?")) return;

    try {

      await deleteOverride(id);

      toast.success("Override Deleted");

      loadOverrides();

    } catch (error) {

      console.error(error);

      toast.error("Delete Failed");

    }

  }

  function handleEdit(override) {

    setSelectedOverride(override);

    setModalOpen(true);

  }

  function handleCreate() {

    setSelectedOverride(null);

    setModalOpen(true);

  }

  function closeModal() {

    setModalOpen(false);

    setSelectedOverride(null);

  }

  const filteredOverrides = overrides.filter((override) =>
    override.flag_name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (loading) {

    return (

      <div className="flex justify-center items-center h-[60vh]">

        <h2 className="text-2xl font-bold">

          Loading Overrides...

        </h2>

      </div>

    );

  }

  return (

    <div className="space-y-8">

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold">

            🔀 Environment Overrides

          </h1>

          <p className="text-gray-500 mt-2">

            Override Feature Flags for individual environments

          </p>

        </div>

        <button
          onClick={handleCreate}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl"
        >
          + New Override
        </button>

      </div>

      <div className="flex justify-between items-center">

        <SearchBar
          value={search}
          onChange={setSearch}
        />

        <span className="font-semibold text-gray-600">

          Total Overrides : {filteredOverrides.length}

        </span>

      </div>

      <OverrideTable
        overrides={filteredOverrides}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <Modal
        isOpen={modalOpen}
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