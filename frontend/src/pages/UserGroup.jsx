import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import GroupTable from "../components/userGroup/GroupTable";
import GroupForm from "../components/userGroup/GroupForm";
import SearchBar from "../components/userGroup/SearchBar";
import Modal from "../components/common/Modal";

import {
  getGroups,
  createGroup,
  updateGroup,
  deleteGroup,
} from "../services/userGroupService";

export default function UserGroup() {

  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [modalOpen, setModalOpen] = useState(false);

  const [selectedGroup, setSelectedGroup] = useState(null);

  useEffect(() => {
    loadGroups();
  }, []);

  async function loadGroups() {

    try {

      const response = await getGroups();

      setGroups(response.data);

    } catch {

      toast.error("Failed to load Groups");

    } finally {

      setLoading(false);

    }

  }

  async function handleSubmit(data) {

    try {

      if (selectedGroup) {

        await updateGroup(selectedGroup.id, data);

        toast.success("Group Updated");

      } else {

        await createGroup(data);

        toast.success("Group Created");

      }

      closeModal();

      loadGroups();

    } catch {

      toast.error("Operation Failed");

    }

  }

  async function handleDelete(id) {

    if (!window.confirm("Delete this Group?")) return;

    try {

      await deleteGroup(id);

      toast.success("Group Deleted");

      loadGroups();

    } catch {

      toast.error("Delete Failed");

    }

  }

  function handleEdit(group) {

    setSelectedGroup(group);

    setModalOpen(true);

  }

  function handleCreate() {

    setSelectedGroup(null);

    setModalOpen(true);

  }

  function closeModal() {

    setModalOpen(false);

    setSelectedGroup(null);

  }

console.log(groups);

const filteredGroups = groups.filter((group) =>
  (group.name || "").toLowerCase().includes(search.toLowerCase())
);

  if (loading) {

    return (

      <div className="flex justify-center items-center h-[60vh]">

        <h2 className="text-2xl font-bold">

          Loading User Groups...

        </h2>

      </div>

    );

  }

  return (

    <div className="space-y-8">

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold">

            👥 User Groups

          </h1>

          <p className="text-gray-500 mt-2">

            Organize users into logical groups for feature targeting.

          </p>

        </div>

        <button
          onClick={handleCreate}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl"
        >
          + New Group
        </button>

      </div>

      <div className="flex justify-between items-center">

        <SearchBar
          value={search}
          onChange={setSearch}
        />

        <span className="font-semibold text-gray-600">

          Total Groups : {filteredGroups.length}

        </span>

      </div>

      <GroupTable
        groups={filteredGroups}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        title={
          selectedGroup
            ? "Edit User Group"
            : "Create User Group"
        }
      >

        <GroupForm
          initialData={selectedGroup}
          onSubmit={handleSubmit}
        />

      </Modal>

    </div>

  );

}