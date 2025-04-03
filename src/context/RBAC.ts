import { Role } from "../utils/Roles";

const permissions: Record<Role, string[]> = {
  admin: ["dashboard", "settings", "manage_users"],
  teacher: ["dashboard", "grade_submission"],
  student: ["dashboard", "view_results"],
  parent: ["dashboard", "view_child_performance"],
  guest: [], // No access
};

export const hasPermission = (role: Role, permission: string) => {
  return permissions[role]?.includes(permission);
};
