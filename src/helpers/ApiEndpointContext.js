import { createContext } from "react";

const LOCAL_API = "http://localhost:3001";
const PROD_API = "https://y-neko-nguyen-795f0d434f9d.herokuapp.com";

const useProd = false;
const api = useProd ? PROD_API : LOCAL_API;

export const ApiEndpointContext = createContext(api);