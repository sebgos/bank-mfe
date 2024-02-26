import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'payment',
  exposes: {
    './Routes': 'apps/payment/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
