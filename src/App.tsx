import { BrowserRouter, Route, Routes } from "react-router"
import { Dashboard } from "./pages/dashboard/Dashboard"
import { PageNotFound } from "./pages/PageNotFound"

export function App() {
  return (
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
  )
}
