import { IForm } from "./types";
import interview from "./forms/interview";

const getFormConfig = async (): Promise<IForm> => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(interview);
    }, 1000);
  });
};

export { getFormConfig };
