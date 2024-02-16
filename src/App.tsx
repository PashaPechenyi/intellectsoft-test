import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import SignInPage from "./pages/SignIn";
import RootPage from "./pages/Root";
import Layout from "./layouts/Layout";
import { HOME_URL, ROOT_URL, SIGN_IN_URL } from "./constants/urls";
import AuthProvider from "./components/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import NoMatchPage from "./pages/NoMatch";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path={ROOT_URL} element={<Layout />}>
          <Route index element={<RootPage />} />
          <Route
            path={SIGN_IN_URL}
            element={
              <ProtectedRoute withAuthorize={false}>
                <SignInPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={HOME_URL}
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NoMatchPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
