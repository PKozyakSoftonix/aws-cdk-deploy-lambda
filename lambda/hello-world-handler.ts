export const handler = async (): Promise<any> => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello world!' }),
  };
};
