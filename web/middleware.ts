import { withAuth } from 'next-auth/middleware';

// require authentication for certain routes
console.log('MIDDLEWARE LOAD');

export default withAuth({});

export const config = {
  // apply to these routes
  matcher: ['/profile/:path*'],
};
