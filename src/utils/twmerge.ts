import { twMerge as merge } from "tailwind-merge";

export default function twmerge(...args: string[]): string {
  return merge(...args);
}
