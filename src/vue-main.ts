import { createApp } from 'vue';
import { clerkPlugin } from 'vue-clerk';

const app = createApp({});

//can't seem to read import.meta.env.PUBLIC_CLERK_PUBLISHABLE_KEY
//so the shareable key is embedded below

app.use(clerkPlugin, {
  publishableKey: 'pk_test_Y2VydGFpbi1jb3lvdGUtNy5jbGVyay5hY2NvdW50cy5kZXYk',
});

export default app;
