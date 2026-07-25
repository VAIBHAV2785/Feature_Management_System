export default function Button({
  children,
  onClick,
  type = "button",
  color = "blue",
}) {

  const colors = {
    blue: "bg-blue-600 hover:bg-blue-700",
    green: "bg-green-600 hover:bg-green-700",
    red: "bg-red-600 hover:bg-red-700",
    yellow: "bg-yellow-500 hover:bg-yellow-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${colors[color]} text-white px-4 py-2 rounded-lg transition`}
    >
      {children}
    </button>
  );
}