<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";
import FeatureFlag from "./pages/FeatureFlag";
import Environment from "./pages/Environment";
import EnvironmentOverride from "./pages/EnvironmentOverride";
import Evaluation from "./pages/Evaluation";
import Users from "./pages/Users";
import UserGroup from "./pages/UserGroup";
import GroupMembers from "./pages/GroupMembers";
import TargetingRules from "./pages/TargetingRules";
import AuditLogs from "./pages/AuditLogs";
import SDKDocs from "./pages/SDKDocs";
import Profile from "./pages/Profile";

export default function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route element={<MainLayout />}>

                    <Route
                        path="/"
                        element={<Dashboard />}
                    />

                    <Route
                        path="/flags"
                        element={<FeatureFlag />}
                    />

                    <Route
                        path="/environment"
                        element={<Environment />}
                    />

                    <Route
                        path="/environment-overrides"
                        element={<EnvironmentOverride />}
                    />

                    <Route
                        path="/evaluation"
                        element={<Evaluation />}
                    />

                    <Route
                        path="/users"
                        element={<Users />}
                    />

                    <Route
                        path="/groups"
                        element={<UserGroup />}
                    />

                    <Route
                        path="/group-members"
                        element={<GroupMembers />}
                    />

                    <Route
                        path="/targeting-rules"
                        element={<TargetingRules />}
                    />

                    <Route
                        path="/audit-logs"
                        element={<AuditLogs />}
                    />

                    <Route
                        path="/sdk"
                        element={<SDKDocs />}
                    />

                    <Route
                        path="/profile"
                        element={<Profile />}
                    />

                </Route>

            </Routes>

        </BrowserRouter>

    );

}
=======
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />

      <AppRoutes />
    </>
  );
}

export default App;
>>>>>>> bcd60838 (MILESTONE 2)
