<<<<<<< HEAD
import { useEffect, useState } from "react";

export default function FeatureFlagForm({
  initialData,
  onSubmit,
}) {

  const [form, setForm] = useState({

    key: "",

    description: "",

    type: "BOOLEAN",

    default_value: "",

    enabled: true,

  });

  useEffect(() => {

    if (initialData) {

      setForm({

        key: initialData.key || "",

        description: initialData.description || "",

        type: initialData.type || "BOOLEAN",

        default_value: initialData.default_value || "",

        enabled: initialData.enabled,

      });

    }

  }, [initialData]);

  function handleChange(e) {

    const { name, value } = e.target;

    setForm({

      ...form,

      [name]: value,

    });

  }

  function handleSubmit(e) {

    e.preventDefault();

    onSubmit(form);

  }

  return (

    <form
      onSubmit={handleSubmit}
      style={{

        display: "grid",

        gap: 20,

      }}
    >

      <div>

        <label>Feature Key</label>

        <input

          name="key"

          value={form.key}

          onChange={handleChange}

          placeholder="new_dashboard"

          style={inputStyle}

          required

=======
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
>>>>>>> bcd60838 (MILESTONE 2)
        />

      </div>

<<<<<<< HEAD
      <div>

        <label>Description</label>

        <textarea

          name="description"

          value={form.description}

          onChange={handleChange}

          placeholder="Describe this feature"

          rows={4}

          style={textareaStyle}

=======
      {/* Description */}

      <div>

        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Description
        </label>

        <textarea
          {...register("description")}
          rows={4}
          className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
>>>>>>> bcd60838 (MILESTONE 2)
        />

      </div>

<<<<<<< HEAD
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
        }}
      >

        <div>

          <label>Flag Type</label>

          <select

            name="type"

            value={form.type}

            onChange={handleChange}

            style={inputStyle}

          >

            <option value="BOOLEAN">
              BOOLEAN
            </option>

            <option value="STRING">
              STRING
            </option>

            <option value="NUMBER">
              NUMBER
            </option>

            <option value="JSON">
              JSON
            </option>

=======
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
>>>>>>> bcd60838 (MILESTONE 2)
          </select>

        </div>

        <div>

<<<<<<< HEAD
          <label>Default Value</label>

          <input

            name="default_value"

            value={form.default_value}

            onChange={handleChange}

            style={inputStyle}

=======
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Default Value
          </label>

          <input
            {...register("default_value")}
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3"
>>>>>>> bcd60838 (MILESTONE 2)
          />

        </div>

      </div>

<<<<<<< HEAD
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 15,
        }}
      >

        <input

          type="checkbox"

          checked={form.enabled}

          onChange={(e) =>

            setForm({

              ...form,

              enabled: e.target.checked,

            })

          }

        />

        <label>

          Enable Feature
=======
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
>>>>>>> bcd60838 (MILESTONE 2)

        </label>

      </div>

<<<<<<< HEAD
      <button
        type="submit"
        style={buttonStyle}
      >

        {initialData

          ? "Update Feature Flag"

          : "Create Feature Flag"}

      </button>

    </form>

  );

}

const inputStyle = {

  width: "100%",

  padding: "14px",

  borderRadius: "10px",

  border: "1px solid #CBD5E1",

  fontSize: "15px",

  marginTop: 8,

};

const textareaStyle = {

  ...inputStyle,

  resize: "none",

};

const buttonStyle = {

  background: "#2563EB",

  color: "white",

  border: "none",

  borderRadius: "12px",

  padding: "15px",

  fontSize: "16px",

  fontWeight: "600",

  cursor: "pointer",

};
=======
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
>>>>>>> bcd60838 (MILESTONE 2)
