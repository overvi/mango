import { createBrowserRouter } from "react-router";
import LoginLayout from "./components/LoginLayout";
import DashboardWithoutLogin from "./pages/auth/DashboardWithoutLogin";
import EnterRecovery from "./pages/auth/EnterRecovery";
import Login from "./pages/auth/Login";
import NewPassword from "./pages/auth/NewPassword";
import PasswordRecovery from "./pages/auth/PasswordRecovery";
import Home from "./pages/Home";
import HotelParkingManagement from "./pages/HotelParkingManagement";
import { ModalProvider } from "./providers/ModalProvider";
import { ToastProvider } from "./providers/ToastProvider";

const router = createBrowserRouter([
  {
    element: <LoginLayout />,
    children: [
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
    ],
  },

  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/hotel-parking-management",
    element: (
      <ModalProvider>
        <HotelParkingManagement />
      </ModalProvider>
    ),
  },
]);

export default router;
