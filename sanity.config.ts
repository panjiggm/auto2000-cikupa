import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

import schemas from '@sanity/schemas';

const config = defineConfig({
  projectId: 'ejaj5bth',
  dataset: 'prod',
  title: 'Auto 2000 Cikupa',
  apiVersion: '2023-06-11',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
