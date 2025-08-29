import axios from "axios";
import { tasksResponseSchema, tasksResponseT } from "../schema/getAllTasks";
import axiosInstance from "./axiosInstance";

const getAllTasks = async (): Promise<tasksResponseT> => {
  try {
    const response = await axiosInstance.get("/api/get-all-tasks");

    const validateResponse = tasksResponseSchema.parse(response.data);

    return validateResponse;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
      return [];
    } else {
      console.log(error);
      return [];
    }
  }
};

export { getAllTasks };
