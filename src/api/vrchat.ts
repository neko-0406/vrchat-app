import { fetch } from '@tauri-apps/plugin-http';

export const BASE_URL = 'https://api.vrchat.cloud/api/1';

export async function login(username: string, password: string) {
  const pUserName = encodeURI(username);
  const pPassword = encodeURI(password);
  const encodedString = Base64(`${pUserName}:${pPassword}`);
  const result = await fetch(BASE_URL + '/auth/user', {
    headers: {
      Authorization: `Basic ${encodedString}`,
    },
  });

  return await result.json();
}

export async function sendAuthCode(authCode: string) {
  const result = await fetch(BASE_URL + '/auth/user/twofactorauth/totp', {
    headers: {
      cookie: `auth=${authCode}`,
    },
  });

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
