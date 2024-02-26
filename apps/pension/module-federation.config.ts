import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'pension',
  exposes: {
    './Routes': 'apps/pension/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
