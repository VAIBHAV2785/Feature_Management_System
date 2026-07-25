import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function GroupForm({
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
    },
  });

  useEffect(() => {

    if (initialData) {

      reset({
        name: initialData.name,
        description: initialData.description,
      });

    } else {

      reset({
        name: "",
        description: "",
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
          Group Name
        </label>

        <input
          {...register("name", {
            required: true,
          })}
          className="w-full border rounded-lg p-3"
          placeholder="Beta Testers"
        />

      </div>

      <div>

        <label className="block mb-2 font-semibold">
          Description
        </label>

        <textarea
          {...register("description")}
          rows="4"
          className="w-full border rounded-lg p-3"
          placeholder="Users who receive beta features"
        />

      </div>

      <button
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
      >
        {initialData
          ? "Update Group"
          : "Create Group"}
      </button>

    </form>

  );

}