import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Save } from "lucide-react";

export default function FeatureFlagForm({
  onSubmit,
  initialData,
}) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
  } = useForm({
    defaultValues: {
      key: "",
      description: "",
      type: "boolean",
      default_value: "false",
      owner_team: "",
      enabled: false,
      rollout_percentage: 100,
    },
  });

  useEffect(() => {
    if (initialData) {
      reset({
        key: initialData.key,
        description: initialData.description,
        type: initialData.type,
        default_value: initialData.default_value,
        owner_team: initialData.owner_team,
        enabled: initialData.enabled,
        rollout_percentage:
          initialData.rollout_percentage ?? 100,
      });
    } else {
      reset({
        key: "",
        description: "",
        type: "boolean",
        default_value: "false",
        owner_team: "",
        enabled: false,
        rollout_percentage: 100,
      });
    }
  }, [initialData, reset]);

  const rollout = watch("rollout_percentage");
  const enabled = watch("enabled");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >

      {/* Feature Key */}

      <div>

        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Feature Key
        </label>

        <input
          {...register("key", { required: true })}
          placeholder="new_dashboard"
          className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />

      </div>

      {/* Description */}

      <div>

        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Description
        </label>

        <textarea
          {...register("description")}
          rows={4}
          className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />

      </div>

      {/* Type + Default */}

      <div className="grid grid-cols-2 gap-5">

        <div>

          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Type
          </label>

          <select
            {...register("type")}
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3"
          >
            <option value="boolean">Boolean</option>
            <option value="string">String</option>
            <option value="number">Number</option>
          </select>

        </div>

        <div>

          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Default Value
          </label>

          <input
            {...register("default_value")}
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3"
          />

        </div>

      </div>

      {/* Owner */}

      <div>

        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Owner Team
        </label>

        <input
          {...register("owner_team")}
          placeholder="Frontend Team"
          className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3"
        />

      </div>

      {/* Rollout */}

      <div>

        <div className="mb-2 flex items-center justify-between">

          <label className="text-sm font-semibold text-slate-700">
            Rollout Percentage
          </label>

          <span className="font-bold text-blue-600">
            {rollout}%
          </span>

        </div>

        <input
          type="range"
          min="0"
          max="100"
          {...register("rollout_percentage", {
            valueAsNumber: true,
          })}
          className="w-full accent-blue-600"
        />

        <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-200">

          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-500"
            style={{
              width: `${rollout}%`,
            }}
          />

        </div>

      </div>

      {/* Enabled */}

      <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4">

        <div>

          <h3 className="font-semibold">
            Feature Status
          </h3>

          <p className="text-sm text-slate-500">
            Enable or disable this feature
          </p>

        </div>

        <label className="relative inline-flex cursor-pointer items-center">

          <input
            type="checkbox"
            {...register("enabled")}
            className="peer sr-only"
          />

          <div className="peer h-7 w-12 rounded-full bg-slate-300 transition peer-checked:bg-blue-600 after:absolute after:left-1 after:top-1 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-5" />

        </label>

      </div>

      <div
        className={`rounded-xl p-3 text-center font-semibold ${
          enabled
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {enabled ? "🟢 Feature Enabled" : "🔴 Feature Disabled"}
      </div>

      {/* Submit */}

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:from-blue-700 hover:to-indigo-700"
      >
        <Save size={18} />

        {initialData
          ? "Update Feature Flag"
          : "Create Feature Flag"}
      </button>

    </form>
  );
}