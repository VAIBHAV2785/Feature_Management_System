import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard";
import FeatureFlag from "../pages/FeatureFlag";
import Environment from "../pages/Environment";
import Override from "../pages/Override";
import Evaluation from "../pages/Evaluation";

import UserGroup from "../pages/UserGroup";
import GroupMembers from "../pages/GroupMembers";
import TargetingRules from "../pages/TargetingRules";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Dashboard */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />

        {/* Feature Flags */}
        <Route
          path="/feature-flags"
          element={
            <MainLayout>
              <FeatureFlag />
            </MainLayout>
          }
        />

        {/* Environments */}
        <Route
          path="/environments"
          element={
            <MainLayout>
              <Environment />
            </MainLayout>
          }
        />

        {/* Environment Overrides */}
        <Route
          path="/overrides"
          element={
            <MainLayout>
              <Override />
            </MainLayout>
          }
        />

        {/* Evaluation */}
        <Route
          path="/evaluation"
          element={
            <MainLayout>
              <Evaluation />
            </MainLayout>
          }
        />

        {/* User Groups */}
        <Route
          path="/groups"
          element={
            <MainLayout>
              <UserGroup />
            </MainLayout>
          }
        />

        {/* Group Members */}
        <Route
          path="/group-members"
          element={
            <MainLayout>
              <GroupMembers />
            </MainLayout>
          }
        />

        {/* Targeting Rules */}
        <Route
          path="/targeting-rules"
          element={
            <MainLayout>
              <TargetingRules />
            </MainLayout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}