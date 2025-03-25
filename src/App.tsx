import { BrowserRouter, Route, Routes } from "react-router"
import { Dashboard } from "@/pages/dashboard/Dashboard"
import { PageNotFound } from "@/pages/PageNotFound"
import { Providers } from "./Providers"

export function App() {
  return (
    <Providers>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="*"
            element={<PageNotFound />}
          />
        </Routes>
      </BrowserRouter>
    </Providers>
  )
}
