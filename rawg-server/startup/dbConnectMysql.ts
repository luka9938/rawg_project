import { AppDataSource } from "./data-source";

const dbConnectMysql = async () => {
  try {
    await AppDataSource.initialize();
  } catch (error) {
    console.log("Error connecting to database", error);
  }
};

export default dbConnectMysql;
