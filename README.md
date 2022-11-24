### Setup

```shell
npm i -g pnpm  # install pnpm globally
pnpm i  # install dependencies + generate types from DB and GQL schemas
pnpm start:web  # start nextjs dev server
```

Go to /profile with the local dev server running, it is clearly intercepted by next-auth.

Now deploy the stack with `pnpm exec sst deploy`, deploy to AWS, and see the nextjs standalone build running on lambda does not apply middleware to /profile
