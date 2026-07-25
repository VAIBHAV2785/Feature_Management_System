import { useForm } from "react-hook-form";

export default function TargetingRuleForm({
  onSubmit,
}) {

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  function submit(data) {

    data.flag_id = Number(data.flag_id);

    onSubmit(data);

    reset();

  }

  return (

    <form
      onSubmit={handleSubmit(submit)}
      className="space-y-5"
    >

      <div>

        <label className="block mb-2 font-semibold">
          Feature Flag ID
        </label>

        <input
          type="number"
          {...register("flag_id", {
            required: true,
          })}
          className="w-full border rounded-lg p-3"
        />

      </div>

      <div>

        <label className="block mb-2 font-semibold">
          Rule Type
        </label>

        <select
          {...register("rule_type")}
          className="w-full border rounded-lg p-3"
        >

          <option value="group">
            Group
          </option>

          <option value="email">
            Email
          </option>

          <option value="country">
            Country
          </option>

        </select>

      </div>

      <div>

        <label className="block mb-2 font-semibold">
          Rule Value
        </label>

        <input
          {...register("rule_value", {
            required: true,
          })}
          className="w-full border rounded-lg p-3"
          placeholder="beta_users"
        />

      </div>

      <button
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
      >
        Create Rule
      </button>

    </form>

  );
}