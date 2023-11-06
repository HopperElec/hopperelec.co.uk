import constants from "$lib/constants.ts";

export default function (text: string): string {
  for (const [key, value] of Object.entries(constants)) {
    text = text.replaceAll("%" + key + "%", value);
  }
  return text;
}
