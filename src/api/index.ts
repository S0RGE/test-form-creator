import { IForm } from "./types";
import interview from "./forms/interview";
import { set } from "vue/types/umd";

export const getFormConfig = async (): Promise<IForm> => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(interview);
    }, 1000);
  });
};

export const sendForm = async (obj: any): Promise<boolean> => {
  const isCorrect = randomBoolean();
  return await new Promise((resolve, reject) => {
    if (isCorrect) {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    } else {
      setTimeout(() => {
        reject(false);
      }, 1000);
    }
  });
};

function randomBoolean(): boolean {
  return Math.random() < 0.5;
}
