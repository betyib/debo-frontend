import { useContext, useState, } from "react";

import Sidebar from "../components/Sidebar";

import Topbar from "../components/Topbar";

import { AuthContext } from "../context/AuthContext";
import EditProfileModal from "../components/EditProfileModal";
import api from "../api/axios";

function DashboardLayout({
  children,
  search,
  setSearch,
}) {
  const { user, logout } =
    useContext(AuthContext);
    const [showProfileModal, setShowProfileModal] =
  useState(false);

  const updateProfile = async (
  formData
) => {
  try {
    const response =
      await api.put(
        "/users/profile",
        formData
      );

    const updatedUser = {
      ...user,
      user: response.data.user,
    };

    localStorage.setItem(
      "user",
      JSON.stringify(updatedUser)
    );

    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

  return (
    <div className="flex bg-blue-50 min-h-screen">
      {/* SIDEBAR */}
      <Sidebar logout={logout} />

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6">
        {/* TOPBAR */}
        <Topbar user={user} 
        search={search}
        setSearch={setSearch}
        onEditProfile={() =>
        setShowProfileModal(true)}/>

        {/* PAGE CONTENT */}
        <div className="mt-8">
          {children}
        </div>
      </div>
      {showProfileModal && (
  <EditProfileModal
    user={user}
    onClose={() =>
      setShowProfileModal(false)
    }
    onUpdate={updateProfile}
  />
)}
    </div>
  );
}

export default DashboardLayout;