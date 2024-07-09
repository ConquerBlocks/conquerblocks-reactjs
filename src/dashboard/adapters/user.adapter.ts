import { ExternalUser, User } from "../../models/user.model";

export function userAdapter(user: User): ExternalUser;
export function userAdapter(user: ExternalUser): User;
export function userAdapter(user: User | ExternalUser) {
  if ("name" in user) {
    return {
      id: user.id,
      nombre: user.name,
    };
  }

  return {
    id: user.id,
    name: user.nombre,
  };
}
