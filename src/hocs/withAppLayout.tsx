import { AppLayout } from "@/layouts";
import React, { FC } from "react";

export const withAppLayout = <T extends Record<string, unknown>>(
  Component: FC<T>
) => {
  const WrappedComponent = (props: T): React.JSX.Element => {
    return (
      <AppLayout>
        <Component {...props} />
      </AppLayout>
    );
  };

  return WrappedComponent;
};
