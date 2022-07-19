import dotenv from "dotenv";
import path from "path";

export default function env() {
  if (process.env.NODE_ENV === "development") {
    dotenv.config({
      path: path.join(__dirname, "../env/.env.development")
    });
  } else if (process.env.NODE_ENV === "production") {
    dotenv.config({
      path: path.join(__dirname, "../env/.env.production")
    });
  }
}
