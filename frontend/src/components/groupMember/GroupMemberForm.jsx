import { useForm } from "react-hook-form";

export default function GroupMemberForm({
  onSubmit,
}) {
  const {
    register,
    handleSubmit,
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >

      <div>

        <label className="block mb-2 font-semibold">
          User ID
        </label>

        <input
          type="number"
          {...register("user_id")}
          className="w-full border rounded-lg p-3"
        />

      </div>

      <button className="w-full bg-blue-600 text-white py-3 rounded-lg">

        Add Member

      </button>

    </form>
  );
}