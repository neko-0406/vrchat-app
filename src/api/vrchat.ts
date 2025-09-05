import { fetch } from '@tauri-apps/plugin-http';

export const BASE_URL = 'https://api.vrchat.cloud/api/1';

export async function login(username: string, password: string) {
  const pUserName = encodeURI(username);
  const pPassword = encodeURI(password);
  const encodedString = Base64(`${pUserName}:${pPassword}`);
  const result = await fetch(BASE_URL + '/auth/user', {
    method: "GET",
    headers: {
      Authorization: `Basic ${encodedString}`,
    },
  });
  return await result.json();
}

export async function verifyTwoFactorAuth(authCode: string) {
  const body = JSON.stringify({"code": `string`})
  const result = await fetch(BASE_URL + '/auth/twofactorauth/totp/verify', {
    method: "POST",
    headers: {
      cookie: `auth=${authCode}`,
    },
    body
  });

  const a = await result.clone().json()
  console.log(a)
  return await result.json()
}

// Base64エンコードする関数
function Base64(str: string) {
  const encoder = new TextEncoder();
  const data: Uint8Array = encoder.encode(str);

  const binaryString: string = String.fromCharCode(...data);
  const encodedString: string = btoa(binaryString);
  return encodedString;
}
