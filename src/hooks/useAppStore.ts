import { AppStoreContext } from "@/store";
import { useContext } from "react";

export const useAppStore = () => useContext(AppStoreContext);
