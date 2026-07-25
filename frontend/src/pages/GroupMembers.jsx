import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import GroupMemberTable from "../components/groupMember/GroupMemberTable";
import GroupMemberForm from "../components/groupMember/GroupMemberForm";
import SearchBar from "../components/groupMember/SearchBar";
import Modal from "../components/common/Modal";

import {
  getGroupMembers,
  addUserToGroup,
  removeUserFromGroup,
} from "../services/groupMemberService";

export default function GroupMembers() {

  const [groupId, setGroupId] = useState(1);

  const [members, setMembers] = useState([]);

  const [search, setSearch] = useState("");

  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMembers();
  }, [groupId]);

  async function loadMembers() {
    try {
      const response = await getGroupMembers(groupId);
      setMembers(response.data);
    } catch (err) {
      toast.error("Failed to load members");
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(data) {
    try {
      await addUserToGroup(groupId, Number(data.user_id));

      toast.success("User Added");

      setOpen(false);

      loadMembers();

    } catch (err) {
      toast.error("Failed");
    }
  }

  async function handleRemove(id) {

    if (!window.confirm("Remove User?")) return;

    try {

      await removeUserFromGroup(groupId, id);

      toast.success("Removed");

      loadMembers();

    } catch {

      toast.error("Failed");

    }

  }

  const filtered = members.filter((user) =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );

  if (loading)
    return <h2>Loading...</h2>;

  return (
    <div className="space-y-6">

      <div className="flex justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            👥 Group Members
          </h1>

          <p className="text-gray-500">
            Manage users inside groups
          </p>

        </div>

        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white px-5 py-3 rounded-xl"
        >
          Add Member
        </button>

      </div>

      <input
        type="number"
        value={groupId}
        onChange={(e) =>
          setGroupId(Number(e.target.value))
        }
        className="border p-3 rounded-lg w-48"
        placeholder="Group ID"
      />

      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <GroupMemberTable
        members={filtered}
        onRemove={handleRemove}
      />

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Add Member"
      >
        <GroupMemberForm
          onSubmit={handleSubmit}
        />
      </Modal>

    </div>
  );
}