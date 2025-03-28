import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateShortCUID() {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let cuid = "";
  for (let i = 0; i < 4; i++) {
    cuid += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return cuid;
}
