type Role = "admin" | "user" | "guest";

/**
 * В данном случае сохраняется итоговое соотношение
 */
const roleNames = {
  admin: 1,
  user: 2,
  guest: 3,
} as const satisfies Record<Role, number>;

const r = roleNames.admin;
