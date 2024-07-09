import { ExternalUser, User } from "../../models/user.model";
import { userAdapter } from "../adapters/user.adapter";

export async function getUsers() {
  return fetch("/users")
    .then((response) => response.json())
    .then((data: ExternalUser) => userAdapter(data));
}

export async function editUser(id: number, name: string) {
  const typedUser = { id, name } as User;
  const adaptedUser = userAdapter(typedUser);

  return fetch(`/users/${id}`, {
    method: "PUT",
    body: JSON.stringify(adaptedUser),
  })
    .then((response) => response.json())
    .then((data) => userAdapter(data));
}
