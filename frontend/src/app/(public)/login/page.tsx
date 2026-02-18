import type { Metadata } from 'next';
import {LoginCard} from "@/app/(public)/login/login-card"

export const metadata: Metadata = {
    title: 'Login',
}

export default function Login() {
  return (
  <main className="bg-gray-50 ">
      <LoginCard />
  </main>
)
}