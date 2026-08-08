import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    console.log({
      email,
      password,
    });

    // Backend API will be connected later
  };

  return (
    <div className="w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-lg p-8 shadow-2xl border border-white/20">

      <h1 className="text-3xl font-bold text-white text-center mb-2">
        Feature Management System
      </h1>

      <p className="text-gray-300 text-center mb-8">
        Login to continue
      </p>

      <form
        onSubmit={handleLogin}
        className="space-y-5"
      >

        <div>
          <label className="block text-gray-300 mb-2">
            Email
          </label>

          <input
            type="email"
            placeholder="admin@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-gray-600 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-gray-600 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Login
        </button>

      </form>

    </div>
  );
}