interface BaseUser {
  id: number;
  age: number;
}

export interface User extends BaseUser {
  name: string;
}

export interface ExternalUser extends BaseUser {
  nombre: string;
}
