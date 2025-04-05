import { BrowserRouter, Route, Routes } from "react-router"
import { PageNotFound } from "@/pages/PageNotFound"
import { Providers } from "./Providers"
import { AuthLayout } from "./layouts/AuthLayout"
import { Login } from "./pages/auth/Login"
import { Register } from "./pages/auth/Register"
import { DashboardLayout } from "./layouts/DashboardLayout"

export function App() {
  return (
    <Providers>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<DashboardLayout />}
          >
            <Route
              index
              element={
                <div>
                  <h1>Hello</h1>
                </div>
              }
            />
          </Route>

          <Route
            path="/auth"
            element={<AuthLayout />}
          >
            <Route
              index
              element={<Login />}
            />
            <Route
              path="register"
              element={<Register />}
            />
          </Route>

          <Route
            path="*"
            element={<PageNotFound />}
          />
        </Routes>
      </BrowserRouter>
    </Providers>
  )
}
