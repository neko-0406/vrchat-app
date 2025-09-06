import { fetch } from '@tauri-apps/plugin-http';

export const BASE_URL = 'https://api.vrchat.cloud/api/1';

export async function login(username: string, password: string) {
  const pUserName = encodeURI(username);
  const pPassword = encodeURI(password);
  const encodedString = Base64(`${pUserName}:${pPassword}`);
  const result = await fetch(BASE_URL + '/auth/user', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Basic ${encodedString}`,
    },
    credentials: 'include'
  });

  const setCookie = result.headers.get("set-cookie") || "";
  console.log("cookie:", setCookie)
  const obj = await result.json();
  console.log(obj);
  return obj;
}

export async function verifyTwoFactorAuth(authCode: string) {
  const body = JSON.stringify({"code": `${authCode}`})
  const result = await fetch(BASE_URL + '/auth/twofactorauth/totp/verify', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cookie": `auth=`,
    },
    body
  });

  const obj = await result.json()
  console.log(obj)
  return obj
}

// Base64エンコードする関数
function Base64(str: string) {
  const encoder = new TextEncoder();
  const data: Uint8Array = encoder.encode(str);

  const binaryString: string = String.fromCharCode(...data);
  const encodedString: string = btoa(binaryString);
  return encodedString;
}
