import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { AppRoutes } from "./Routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </ChakraProvider>
);
