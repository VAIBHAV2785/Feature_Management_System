import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { getFeatureFlags } from "../../services/featureFlagService";
import { getEnvironments } from "../../services/environmentService";

export default function OverrideForm({
  onSubmit,
  initialData,
}) {

  const [flags, setFlags] = useState([]);
  const [environments, setEnvironments] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      flag_id: "",
      environment_id: "",
      value: true,
    },
  });

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const flagsResponse = await getFeatureFlags();
    const envResponse = await getEnvironments();

    setFlags(flagsResponse.data);
    setEnvironments(envResponse.data);
  }

  useEffect(() => {

    if (initialData) {

      reset({
        flag_id: initialData.flag_id,
        environment_id: initialData.environment_id,
        value: initialData.value,
      });

    } else {

      reset({
        flag_id: "",
        environment_id: "",
        value: true,
      });

    }

  }, [initialData, reset]);

  return (

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >

      <div>

        <label className="block mb-2 font-semibold">
          Feature Flag
        </label>

        <select
          {...register("flag_id", { required: true })}
          className="w-full border rounded-lg p-3"
        >

          <option value="">
            Select Feature Flag
          </option>

          {flags.map((flag) => (

            <option
              key={flag.id}
              value={flag.id}
            >
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
          {...register("environment_id", { required: true })}
          className="w-full border rounded-lg p-3"
        >

          <option value="">
            Select Environment
          </option>

          {environments.map((env) => (

            <option
              key={env.id}
              value={env.id}
            >
              {env.name}
            </option>

          ))}

        </select>

      </div>

      <label className="flex items-center gap-3">

        <input
          type="checkbox"
          {...register("value")}
        />

        <span>
          Override Enabled
        </span>

      </label>

      <button
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
      >
        {initialData
          ? "Update Override"
          : "Create Override"}
      </button>

    </form>

  );

}