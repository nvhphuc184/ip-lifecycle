"use client"

import { useState } from "react"
import { LoginPage } from "@/components/login-page"
import { Dashboard } from "@/components/dashboard"

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />
  }

  return <Dashboard />
}
