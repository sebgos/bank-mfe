import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'mortgage',
  exposes: {
    './Routes': 'apps/mortgage/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
