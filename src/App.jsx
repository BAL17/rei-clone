import { useState } from "react";
import Header from "./components/header/Header";
import BodyContainer from "./components/body/BodyContainer";
import { TotalProvider } from "./context/totalContext";
import { ShippingProvider } from "./context/shippingContext";

function App() {
  return (
    <div>
      <TotalProvider>
        <Header />
      </TotalProvider>

      <ShippingProvider>
        <BodyContainer />
      </ShippingProvider>
    </div>
  );
}

export default App;
