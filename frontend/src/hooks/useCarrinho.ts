import { useState } from "react";

export function useCarrinho() {

  const [slots] = useState([]);

  return {
    slots
  };

}