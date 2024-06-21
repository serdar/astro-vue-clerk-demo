import type { App } from 'vue';
import { clerkPlugin } from 'vue-clerk';

export default (app: App) => {
  app.use(clerkPlugin, {
    publishableKey: 'pk_test_Y2VydGFpbi1jb3lvdGUtNy5jbGVyay5hY2NvdW50cy5kZXYk',
  });
};
