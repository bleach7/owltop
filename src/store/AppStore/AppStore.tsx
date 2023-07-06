"use client";

import { usePathname } from "next/navigation";
import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { IAppStoreContext } from "./AppStore.interface";

export const AppStoreContext = createContext<IAppStoreContext>({
  isMenuOpen: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onOpenMenu: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onCloseMenu: () => {},
});

export const AppStoreProvider = ({ children }: { children: ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const paths = usePathname();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleCloseMenuWithKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      if (isMenuOpen) {
        onCloseMenu();
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleCloseMenuWithKeyDown);

    return () =>
      document.removeEventListener("keydown", handleCloseMenuWithKeyDown);
  }, [handleCloseMenuWithKeyDown]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [paths]);

  useEffect(() => {
    const body = document.body;

    if (body) {
      if (isMenuOpen) {
        body.style.overflow = "hidden";
      }

      if (!isMenuOpen) {
        body.style.overflow = "visible";
      }
    }

    return () => {
      if (body) {
        body.style.overflow = "visible";
      }
    };
  }, [isMenuOpen]);

  const onOpenMenu = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  const onCloseMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const value: IAppStoreContext = useMemo(() => {
    return {
      isMenuOpen,
      onOpenMenu,
      onCloseMenu,
    };
  }, [isMenuOpen, onCloseMenu, onOpenMenu]);

  return (
    <AppStoreContext.Provider value={value}>
      {children}
    </AppStoreContext.Provider>
  );
};
