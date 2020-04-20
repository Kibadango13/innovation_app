// auth services types and interfaces

import { User } from "@interfaces/user.types";

type LogInRes = {
  token: string;
  user: User;
};

export type LogInByTokenRes = LogInRes;

export type LogInByCredentials = LogInRes;
