import { createContext, useContext } from "react";
import { IS_LOCAL_SERVER, LOCAL_STORAGE, REMOTE_STORAGE } from "./Constants";

const storage = IS_LOCAL_SERVER ? LOCAL_STORAGE : REMOTE_STORAGE;

export const StorageContext = createContext(storage);