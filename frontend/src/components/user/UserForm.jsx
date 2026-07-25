import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function UserForm({
  onSubmit,
  initialData,
}) {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      group_id: "",
    },
  });

  useEffect(() => {
    if (initialData) {
      reset({
        username: initialData.username,
        email: initialData.email,
        password: "",
        group_id: initialData.group_id ?? "",
      });
    } else {
      reset({
        username: "",
        email: "",
        password: "",
        group_id: "",
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
          Username
        </label>

        <input
          {...register("username", { required: true })}
          className="w-full border rounded-lg p-3"
          placeholder="john_doe"
        />
      </div>

      <div>
        <label className="block mb-2 font-semibold">
          Email
        </label>

        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full border rounded-lg p-3"
          placeholder="john@example.com"
        />
      </div>

      {!initialData && (
        <div>
          <label className="block mb-2 font-semibold">
            Password
          </label>

          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full border rounded-lg p-3"
          />
        </div>
      )}

      <div>
        <label className="block mb-2 font-semibold">
          Group ID
        </label>

        <input
          type="number"
          {...register("group_id")}
          className="w-full border rounded-lg p-3"
          placeholder="Optional"
        />
      </div>

      <button
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
      >
        {initialData ? "Update User" : "Create User"}
      </button>
    </form>
  );
}