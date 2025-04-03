import { Role } from "./Roles";

export const getRoleFromStorage = (): Role => {
  return (localStorage.getItem("role") as Role) || "guest";
};

export const setRoleToStorage = (role: Role) => {
  localStorage.setItem("role", role);
};

export const removeRoleFromStorage = () => {
  localStorage.removeItem("role");
};
