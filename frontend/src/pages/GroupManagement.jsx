import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  getGroups,
  createGroup,
  updateGroup,
  deleteGroup,
} from "../services/groupService";

export default function GroupManagement() {
  const [groups, setGroups] = useState([]);

  const [groupName, setGroupName] = useState("");

  const [editingId, setEditingId] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadGroups();
  }, []);

  async function loadGroups() {
    try {
      const response = await getGroups();
      setGroups(response.data);
    } catch (error) {
      toast.error("Failed to load groups");
    }
  }

  async function handleSubmit() {
    if (!groupName.trim()) {
      return toast.error("Enter group name");
    }

    try {
      setLoading(true);

      if (editingId) {
        await updateGroup(editingId, {
          group_name: groupName,
        });

        toast.success("Group Updated");
      } else {
        await createGroup({
          group_name: groupName,
        });

        toast.success("Group Created");
      }

      setGroupName("");
      setEditingId(null);

      loadGroups();
    } catch (error) {
      toast.error("Operation Failed");
    } finally {
      setLoading(false);
    }
  }

  function handleEdit(group) {
    setEditingId(group.id);
    setGroupName(group.group_name);
  }

  async function handleDelete(id) {
    if (!window.confirm("Delete this group?")) return;

    try {
      await deleteGroup(id);

      toast.success("Deleted");

      loadGroups();
    } catch {
      toast.error("Delete Failed");
    }
  }

  return (
    <div className="space-y-8">

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold">
            👥 User Groups
          </h1>

          <p className="text-gray-500 mt-2">
            Manage user groups for feature targeting
          </p>

        </div>

      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">

        <div className="flex gap-4">

          <input
            className="border rounded-xl p-3 flex-1"
            placeholder="Group Name"
            value={groupName}
            onChange={(e) =>
              setGroupName(e.target.value)
            }
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-gradient-to-r
            from-blue-600
            to-indigo-600
            text-white
            px-8
            rounded-xl
            hover:scale-105
            transition"
          >
            {editingId
              ? "Update"
              : "Create"}
          </button>

        </div>

      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-4 text-left">
                ID
              </th>

              <th className="p-4 text-left">
                Group Name
              </th>

              <th className="p-4 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {groups.map((group) => (

              <tr
                key={group.id}
                className="border-t hover:bg-gray-50"
              >

                <td className="p-4">
                  {group.id}
                </td>

                <td className="p-4 font-semibold">
                  {group.group_name}
                </td>

                <td className="p-4">

                  <div className="flex justify-center gap-3">

                    <button
                      onClick={() =>
                        handleEdit(group)
                      }
                      className="bg-yellow-500
                      text-white
                      px-4
                      py-2
                      rounded-lg"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(group.id)
                      }
                      className="bg-red-600
                      text-white
                      px-4
                      py-2
                      rounded-lg"
                    >
                      Delete
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}