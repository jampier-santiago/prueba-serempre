import { createContext } from "react";

const Price = createContext({ price: undefined, setPrice: () => null });

export default Price;
