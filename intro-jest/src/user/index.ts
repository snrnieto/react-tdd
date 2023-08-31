import { storage } from "../lib/storage";

export const saveUsername = (username: any) => {
  storage.save({ key: "username", value: username });
};

export const getUsername = () => {
  return storage.get({ key: "username" });
};
