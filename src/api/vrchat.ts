import { fetch } from "@tauri-apps/plugin-http";

export const BASE_URL = "https://api.vrchat.cloud/api/1";

export async function login(username: string, password: string) {
  const pUserName = encodeURI(username);
  const pPassword = encodeURI(password);
  const result = await fetch(BASE_URL + "/auth/user", {
    headers: {
      "Authorization": Base64(`${pUserName}:${pPassword}`)
    }
  })
}

function Base64(str: string) {
  const encoder = new TextEncoder();
  const data: Uint8Array = encoder.encode(str);

  const binaryString: string = String.fromCharCode(...data);
  const encodedString: string = btoa(binaryString);
  return encodedString;
}