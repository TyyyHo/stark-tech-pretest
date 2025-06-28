"use client";

import { SWRConfig } from "swr";

type SwrConfigProps = {
  children: React.ReactNode;
};

export default function SwrConfig({ children }: SwrConfigProps) {
  return (
    <SWRConfig
      value={{
        onErrorRetry: (error, _key, _config, _revalidate, { retryCount }) => {
          if (retryCount > 3) return;
        },
        revalidateOnFocus: false,
      }}
    >
      {children}
    </SWRConfig>
  );
}
