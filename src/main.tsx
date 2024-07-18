import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Routes.tsx";
import { AppProvider } from "./context/AppContext.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider>
    <AppProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppProvider>
  </ChakraProvider>
);
