import axios from "axios";
import axiosInstance from "./axiosInstance";
import {
  addTaskErrorResponseSchema,
  addTaskRequestT,
  addTaskResponseT,
  addTaskSuccessResponseSchema,
} from "../schema/addTaskSchema";

const addTask = async (data: addTaskRequestT): Promise<addTaskResponseT> => {
  try {
    const response = await axiosInstance.post("/api/add-task", {
      data,
    });

    const validateResponse = addTaskSuccessResponseSchema.parse(response.data);
    return validateResponse;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.data) {
        const validateErrorResponse = addTaskErrorResponseSchema.parse(
          error.response.data
        );
        return {
          message: validateErrorResponse.message,
        };
      }
      console.error("Axios Error", error);
      throw new Error(`${error}`);
    } else {
      console.error(error);
      throw error;
    }
  }
};

export default addTask;
