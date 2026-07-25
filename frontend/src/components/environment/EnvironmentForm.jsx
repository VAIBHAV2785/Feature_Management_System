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
          Environment Name
        </label>

        <input
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
          Description
        </label>

        <textarea
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