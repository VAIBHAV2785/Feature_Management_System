import { useEffect } from "react";
import { useForm } from "react-hook-form";
<<<<<<< HEAD
import { useTranslation } from "react-i18next";
=======
>>>>>>> bcd60838 (MILESTONE 2)

export default function UserForm({
  onSubmit,
  initialData,
}) {
<<<<<<< HEAD
  const { t } = useTranslation();

=======
>>>>>>> bcd60838 (MILESTONE 2)
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
<<<<<<< HEAD
          {t("users.username")}
=======
          Username
>>>>>>> bcd60838 (MILESTONE 2)
        </label>

        <input
          {...register("username", { required: true })}
          className="w-full border rounded-lg p-3"
<<<<<<< HEAD
          placeholder={t("users.usernamePlaceholder")}
=======
          placeholder="john_doe"
>>>>>>> bcd60838 (MILESTONE 2)
        />
      </div>

      <div>
        <label className="block mb-2 font-semibold">
<<<<<<< HEAD
          {t("users.email")}
=======
          Email
>>>>>>> bcd60838 (MILESTONE 2)
        </label>

        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full border rounded-lg p-3"
<<<<<<< HEAD
          placeholder={t("users.emailPlaceholder")}
=======
          placeholder="john@example.com"
>>>>>>> bcd60838 (MILESTONE 2)
        />
      </div>

      {!initialData && (
        <div>
          <label className="block mb-2 font-semibold">
<<<<<<< HEAD
            {t("users.password")}
=======
            Password
>>>>>>> bcd60838 (MILESTONE 2)
          </label>

          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full border rounded-lg p-3"
<<<<<<< HEAD
            placeholder={t("users.password")}
=======
>>>>>>> bcd60838 (MILESTONE 2)
          />
        </div>
      )}

      <div>
        <label className="block mb-2 font-semibold">
<<<<<<< HEAD
          {t("users.group")}
=======
          Group ID
>>>>>>> bcd60838 (MILESTONE 2)
        </label>

        <input
          type="number"
          {...register("group_id")}
          className="w-full border rounded-lg p-3"
<<<<<<< HEAD
          placeholder={t("users.groupPlaceholder")}
=======
          placeholder="Optional"
>>>>>>> bcd60838 (MILESTONE 2)
        />
      </div>

      <button
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
      >
<<<<<<< HEAD
        {initialData
          ? t("users.update")
          : t("users.create")}
=======
        {initialData ? "Update User" : "Create User"}
>>>>>>> bcd60838 (MILESTONE 2)
      </button>
    </form>
  );
}