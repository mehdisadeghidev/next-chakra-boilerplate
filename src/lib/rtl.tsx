import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtl from 'stylis-plugin-rtl';

export const RtlProvider = ({ children }: any) => {
  const cache = createCache({ key: 'css-fa', stylisPlugins: [rtl] });
  return <CacheProvider value={cache}>{children}</CacheProvider>;
};
