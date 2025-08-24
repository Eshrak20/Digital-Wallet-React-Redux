import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { store } from "./redux/store";
import { Provider as ReduxProvider } from "react-redux";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <ToastContainer
        position="bottom-center" // bottom to center
        autoClose={3000} // auto close in 3 seconds
        hideProgressBar={false} // show progress bar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" // optional: colored theme
        style={{ whiteSpace: "pre-line" }} // 👈 apply globally
      />
      <RouterProvider router={router} />
    </ReduxProvider>
  </StrictMode>
);
