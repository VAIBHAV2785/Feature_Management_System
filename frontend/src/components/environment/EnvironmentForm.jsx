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
          Environment Name
        </label>

        <input

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
          Description
        </label>

        <textarea

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