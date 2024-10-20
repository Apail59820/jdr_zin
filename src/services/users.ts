import axios from "axios";
import { UserModel } from "../models/UserModel";
import { isRequestSuccessful } from "../utils/isRequestSuccessful";

export const updateUser = async (
  userId: number,
  userData: Partial<UserModel>,
): Promise<Partial<UserModel> | null> => {
  try {
    const response = await axios.patch(
      `${process.env.REACT_APP_API_URL}/users/${userId}`,
      userData,
    );
    if (isRequestSuccessful(response.status)) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Failed to update user", error);
    throw error;
  }
};
