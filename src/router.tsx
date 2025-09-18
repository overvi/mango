import { createBrowserRouter } from "react-router";
import { ModalProvider } from "./providers/ModalProvider";
import DashboardWithoutLogin from "./pages/DashboardWithoutLogin";
import EnterRecovery from "./pages/EnterRecovery";
import Login from "./pages/Login";
import NewPassword from "./pages/NewPassword";
import PasswordRecovery from "./pages/PasswordRecovery";
import { ToastProvider } from "./providers/ToastProvider";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <ModalProvider>
        <Login />
      </ModalProvider>
    ),
  },
  {
    path: "/dashboard-without-login",
    element: <DashboardWithoutLogin />,
  },
  {
    path: "/password-recovery",
    element: <PasswordRecovery />,
  },
  {
    path: "/password-entry",
    element: (
      <ToastProvider position="bottom-right">
        <EnterRecovery />
      </ToastProvider>
    ),
  },
  {
    path: "/new-password",
    element: <NewPassword />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;
