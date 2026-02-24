export class Constants {
  static readonly APP_NAME: string =
    process.env.NEXT_PUBLIC_APP_NAME || "Next app";
  static readonly APP_DESCRIPTION: string =
    process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
    "Description not defined in the env variables";
  static readonly SERVER_URL: string =
    process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
}
