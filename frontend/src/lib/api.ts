export interface LoginResponse {
    success: boolean
    token: string
    message: string
}

export async function login(username: string, password: string): Promise<LoginResponse> {
    const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: new URLSearchParams({ username, password })
    })
    return {
        success: true,
        token: "",
        message: ""
    }
}