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
import OfficeParkingManagement from "./pages/OfficeParkingManagement";
import PublicParkingManagement from "./pages/PublicParkingManagement";
import MallParkingManagement from "./pages/MallParkingManagement";

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
    element: <ModalProvider />,
    children: [
      {
        path: "/hotel-parking-management",
        element: <HotelParkingManagement />,
      },
      {
        path: "/office-parking-management",
        element: <OfficeParkingManagement />,
      },
      {
        path: "/public-parking-management",
        element: <PublicParkingManagement />,
      },
      {
        path: "/mall-parking-management",
        element: <MallParkingManagement />,
      },
    ],
  },
]);

export default router;
