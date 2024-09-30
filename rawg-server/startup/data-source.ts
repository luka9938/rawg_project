import { DataSource } from "typeorm";
import "reflect-metadata";

const connectionString = process.env.DATABASE_URL || "mysql://localhost:3306/";

export const AppDataSource = new DataSource({
  type: "mysql",
  url: connectionString,
  synchronize: true,
  logging: true,
  entities: [__dirname + "/../**/*.entity{.ts,.js}"],
  migrations: [],
  subscribers: [],
});
