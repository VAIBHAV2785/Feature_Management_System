import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

export default function UserForm({
  onSubmit,
  initialData,
}) {
  const { t } = useTranslation();

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
          {t("users.username")}
        </label>

        <input
          {...register("username", { required: true })}
          className="w-full border rounded-lg p-3"
          placeholder={t("users.usernamePlaceholder")}
        />
      </div>

      <div>
        <label className="block mb-2 font-semibold">
          {t("users.email")}
        </label>

        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full border rounded-lg p-3"
          placeholder={t("users.emailPlaceholder")}
        />
      </div>

      {!initialData && (
        <div>
          <label className="block mb-2 font-semibold">
            {t("users.password")}
          </label>

          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full border rounded-lg p-3"
            placeholder={t("users.password")}
          />
        </div>
      )}

      <div>
        <label className="block mb-2 font-semibold">
          {t("users.group")}
        </label>

        <input
          type="number"
          {...register("group_id")}
          className="w-full border rounded-lg p-3"
          placeholder={t("users.groupPlaceholder")}
        />
      </div>

      <button
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
      >
        {initialData
          ? t("users.update")
          : t("users.create")}
      </button>
    </form>
  );
}