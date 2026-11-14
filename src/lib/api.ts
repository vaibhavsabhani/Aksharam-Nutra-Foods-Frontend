const rawApiUrl =
  process.env.NEXT_PUBLIC_API_URL || "https://aksharam-nutra-foods-admin.onrender.com/api";

const trimmedUrl = rawApiUrl.replace(/\/+$/, "");

export const API_URL = trimmedUrl.endsWith("/api")
  ? trimmedUrl
  : `${trimmedUrl}/api`;


