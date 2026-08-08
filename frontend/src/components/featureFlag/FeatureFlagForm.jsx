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

        />

      </div>

      <div>

        <label>Description</label>

        <textarea

          name="description"

          value={form.description}

          onChange={handleChange}

          placeholder="Describe this feature"

          rows={4}

          style={textareaStyle}

        />

      </div>

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

          </select>

        </div>

        <div>

          <label>Default Value</label>

          <input

            name="default_value"

            value={form.default_value}

            onChange={handleChange}

            style={inputStyle}

          />

        </div>

      </div>

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

        </label>

      </div>

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