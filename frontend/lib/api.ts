const BASE_URL = "http://localhost:8080";

export type UniResponse = {
  "code": number,
  "msg": string,
  "data": object
}

export async function apiFetch(url: string, options: RequestInit = {}): Promise<UniResponse> {
  const token = localStorage.getItem("token");

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string>),
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  
  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      ...options,
      headers,
    });
    console.log("Got response from backend: ", response)

    if (response.status === 401) {
      console.log("Token outdated, removing.")
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    if (response.status === 403) {
      console.log("No permission, redirect to home.")
      window.location.href = "/";
    }
    return response.json();
  } catch {
    console.log("API fetch failed, check your network.")
    return {
      "code": 0,
      "msg": "API fetch failed, check your network.",
      "data": {}
    }
  }
  
}

export function getUrl(uri: string) {
    return BASE_URL + uri
}