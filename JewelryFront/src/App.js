import HomePage from "./pages/HomePage";
import React, {useLayoutEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import CatalogPage from "./pages/CatalogPage";
import CartPage from "./pages/СartPage"
import AuthPage from "./pages/AuthPage";
import NomencPage from "./pages/NomencPage";
import OrdersPage from "./pages/OrdersPage";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Toaster} from "react-hot-toast";


function App() {
  const queryClient = new QueryClient()
  return (<>
      <Toaster/>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path={"/"} element={<HomePage/>}/>
          <Route path={"/contact"} element={<ContactPage/>}/>
          <Route path={"/catalog"} element={<CatalogPage/>}/>
          <Route path={"/cart"} element={<CartPage/>}/>
          <Route path={'/auth'} element={<AuthPage/>}/>
          <Route path={'/nomenc'} element={<NomencPage/>}/>
          <Route path={'/orders'} element={<OrdersPage/>}/>
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export default App;
