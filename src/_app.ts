import type { App } from 'vue';
import { clerkPlugin } from 'vue-clerk';

export default (app: App) => {
  app.use(clerkPlugin, {
    publishableKey: import.meta.env.PUBLIC_CLERK_PUBLISHABLE_KEY,
  });
};
