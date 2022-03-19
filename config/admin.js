module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0d78b1fac4b540cee21b47163d66dd08'),
  },
});
