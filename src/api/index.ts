const getFormConfig = async () => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "test",
      });
    }, 1000);
  });
};

export { getFormConfig };
