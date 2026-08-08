<<<<<<< HEAD
import { useEffect, useState } from "react";

export default function EnvironmentForm({
  initialData,
  onSubmit,
}) {

  const [form, setForm] = useState({

    name: "",

    description: "",

  });

  useEffect(() => {

    if (initialData) {

      setForm({

        name: initialData.name || "",

        description: initialData.description || "",

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
        display: "flex",
        flexDirection: "column",
        gap: 22,
      }}
    >

      <div>

        <label
          style={{
            fontWeight: 600,
            color: "#334155",
          }}
        >
=======
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function EnvironmentForm({
  onSubmit,
  initialData,
}) {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      active: true,
    },
  });

  useEffect(() => {
    if (initialData) {
      reset({
        name: initialData.name,
        description: initialData.description,
        active:
          initialData.active !== undefined
            ? initialData.active
            : true,
      });
    } else {
      reset({
        name: "",
        description: "",
        active: true,
      });
    }
  }, [initialData, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      {/* Environment Name */}

      <div>
        <label className="block mb-2 font-semibold">
>>>>>>> bcd60838 (MILESTONE 2)
          Environment Name
        </label>

        <input
<<<<<<< HEAD

          type="text"

          name="name"

          value={form.name}

          onChange={handleChange}

          placeholder="Production"

          required

          style={inputStyle}

        />

      </div>

      <div>

        <label
          style={{
            fontWeight: 600,
            color: "#334155",
          }}
        >
=======
          {...register("name", {
            required: "Environment name is required",
          })}
          className="w-full border rounded-lg p-3"
          placeholder="Production"
        />
      </div>

      {/* Description */}

      <div>
        <label className="block mb-2 font-semibold">
>>>>>>> bcd60838 (MILESTONE 2)
          Description
        </label>

        <textarea
<<<<<<< HEAD

          rows="5"

          name="description"

          value={form.description}

          onChange={handleChange}

          placeholder="Production environment"

          style={textareaStyle}

        />

      </div>

      <button

        type="submit"

        style={buttonStyle}

      >

        {initialData

          ? "Update Environment"

          : "Create Environment"}

      </button>

    </form>

  );

}

const inputStyle = {

  width: "100%",

  marginTop: 8,

  padding: "14px",

  borderRadius: 12,

  border: "1px solid #CBD5E1",

  outline: "none",

  fontSize: 15,

  boxSizing: "border-box",

};

const textareaStyle = {

  ...inputStyle,

  resize: "vertical",

};

const buttonStyle = {

  background: "#2563EB",

  color: "#fff",

  padding: "15px",

  border: "none",

  borderRadius: 12,

  fontWeight: 600,

  fontSize: 16,

  cursor: "pointer",

};
=======
          {...register("description")}
          rows="3"
          className="w-full border rounded-lg p-3"
          placeholder="Production Environment"
        />
      </div>

      {/* Active */}

      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          {...register("active")}
        />

        <span className="font-medium">
          Active
        </span>
      </label>

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
      >
        {initialData
          ? "Update Environment"
          : "Create Environment"}
      </button>
    </form>
  );
}
>>>>>>> bcd60838 (MILESTONE 2)
