import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import TargetingRuleTable from "../components/targetingRule/TargetingRuleTable";
import TargetingRuleForm from "../components/targetingRule/TargetingRuleForm";
import SearchBar from "../components/targetingRule/SearchBar";
import Modal from "../components/common/Modal";

import {
  getRules,
  createRule,
  deleteRule,
} from "../services/targetingRuleService";

export default function TargetingRules() {

  const [rules, setRules] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [open, setOpen] = useState(false);

  useEffect(() => {
    loadRules();
  }, []);

  async function loadRules() {

    try {

      const res = await getRules();

      setRules(res.data);

    } catch {

      toast.error("Failed to load Rules");

    } finally {

      setLoading(false);

    }

  }

  async function handleSubmit(data) {

    try {

      await createRule(data);

      toast.success("Rule Created");

      setOpen(false);

      loadRules();

    } catch {

      toast.error("Failed");

    }

  }

  async function handleDelete(id) {

    if (!window.confirm("Delete Rule?")) return;

    try {

      await deleteRule(id);

      toast.success("Deleted");

      loadRules();

    } catch {

      toast.error("Delete Failed");

    }

  }

  const filtered = rules.filter(rule =>
    rule.rule_value
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (loading)
    return <h2>Loading...</h2>;

  return (
    <div className="space-y-6">

      <div className="flex justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            🎯 Targeting Rules
          </h1>

          <p className="text-gray-500">
            Manage rollout rules
          </p>

        </div>

        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white px-5 py-3 rounded-xl"
        >
          Add Rule
        </button>

      </div>

      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <TargetingRuleTable
        rules={filtered}
        onDelete={handleDelete}
      />

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Create Rule"
      >
        <TargetingRuleForm
          onSubmit={handleSubmit}
        />
      </Modal>

    </div>
  );

}