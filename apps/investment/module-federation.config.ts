import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'investment',
  exposes: {
    './Routes': 'apps/investment/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
