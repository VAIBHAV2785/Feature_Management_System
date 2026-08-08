import SignupForm from "../components/auth/SignupForm";

export default function Signup() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950">

      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>

      <div className="absolute top-40 right-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl"></div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <SignupForm />
      </div>

    </div>
  );
}