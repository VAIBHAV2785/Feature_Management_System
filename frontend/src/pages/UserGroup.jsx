import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
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
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const [selectedGroup, setSelectedGroup] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    loadGroups();
  }, []);

  async function loadGroups() {
    try {
      const res = await getGroups();
      setGroups(res.data);
    } catch {
      toast.error("Unable to load groups");
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
    if (!window.confirm("Delete Group?")) return;

    try {
      await deleteGroup(id);
      toast.success("Group Deleted");
      loadGroups();
    } catch {
      toast.error("Delete Failed");
    }
  }

  function closeModal() {
    setSelectedGroup(null);
    setModalOpen(false);
  }

  const filtered = groups.filter((group) =>
    (group.name || "")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (loading) return <h2>Loading...</h2>;

  return (
    <div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 30,
          alignItems: "center",
        }}
      >

        <div>
          <h1 style={{ fontSize: 34, fontWeight: 700 }}>
            👥 User Groups
          </h1>

          <p style={{ color: "#64748B" }}>
            Manage user groups.
          </p>
        </div>

        <button
          onClick={() => setModalOpen(true)}
          style={{
            background: "#2563EB",
            color: "white",
            border: "none",
            borderRadius: 12,
            padding: "14px 24px",
            cursor: "pointer",
          }}
        >
          <Plus size={18} />
          Create Group
        </button>

      </div>

      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <div style={{ marginTop: 25 }}>
        <GroupTable
          groups={filtered}
          onEdit={(group) => {
            setSelectedGroup(group);
            setModalOpen(true);
          }}
          onDelete={handleDelete}
        />
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        title={
          selectedGroup
            ? "Edit Group"
            : "Create Group"
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