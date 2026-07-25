import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { getFeatureFlags } from "../services/featureFlagService";
import { getEnvironments } from "../services/environmentService";
import { evaluateFeature } from "../services/evaluationService";

export default function Evaluation() {
  const [flags, setFlags] = useState([]);
  const [environments, setEnvironments] = useState([]);

  const [flagKey, setFlagKey] = useState("");
  const [environment, setEnvironment] = useState("");

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const [flagRes, envRes] = await Promise.all([
        getFeatureFlags(),
        getEnvironments(),
      ]);

      setFlags(flagRes.data);
      setEnvironments(envRes.data);

      if (flagRes.data.length > 0) {
        setFlagKey(flagRes.data[0].key);
      }

      if (envRes.data.length > 0) {
        setEnvironment(envRes.data[0].name);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to load data");
    }
  }

  async function handleEvaluate() {
    try {
      setLoading(true);

      const response = await evaluateFeature({
        flag_key: flagKey,
        environment: environment,
      });

      setResult(response.data);

      toast.success("Evaluation Complete");
    } catch (error) {
      console.error(error);
      toast.error("Evaluation Failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold">
          🔍 Feature Evaluation
        </h1>

        <p className="text-gray-500 mt-2">
          Evaluate a Feature Flag for any Environment
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">

        <div className="grid grid-cols-2 gap-6">

          <div>
            <label className="block mb-2 font-semibold">
              Feature Flag
            </label>

            <select
              className="w-full border rounded-lg p-3"
              value={flagKey}
              onChange={(e) => setFlagKey(e.target.value)}
            >
              {flags.map((flag) => (
                <option key={flag.id} value={flag.key}>
                  {flag.key}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Environment
            </label>

            <select
              className="w-full border rounded-lg p-3"
              value={environment}
              onChange={(e) => setEnvironment(e.target.value)}
            >
              {environments.map((env) => (
                <option key={env.id} value={env.name}>
                  {env.name}
                </option>
              ))}
            </select>
          </div>

        </div>

        <button
          onClick={handleEvaluate}
          disabled={loading}
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          {loading ? "Evaluating..." : "Evaluate"}
        </button>

      </div>

      {result && (
        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-2xl font-bold mb-6">
            Evaluation Result
          </h2>

          <div className="space-y-4">

            <div>
              <span className="font-semibold">
                Feature Flag :
              </span>{" "}
              {result.flag_key}
            </div>

            <div>
              <span className="font-semibold">
                Final Value :
              </span>{" "}
              <span
                className={
                  result.value
                    ? "text-green-600 font-bold"
                    : "text-red-600 font-bold"
                }
              >
                {String(result.value)}
              </span>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}