function trimChar(conf) {
  if (typeof conf === 'string' || conf instanceof String) {
    return conf.trim();
  }
  return conf;
}

module.exports = {
  app: {
    port: process.env.APP_PORT || 3000,
    ip: trimChar(process.env.APP_IP) || '0.0.0.0',
  },
  mongo: {
    uri: trimChar(process.env.MONGO_URL) || 'mongodb://192.168.99.100:27017/node-api',
  },
  mailer: {
    debug: process.env.MAILER_DEBUG || false,
  },
  mailgun: {
    apiKey: trimChar(process.env.MAILGUN_API_KEY),
    domain: trimChar(process.env.MAILGUN_DOMAIN),
  },
  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
    s3_bucket_image: process.env.AWS_S3_BUCKET_IMAGE,
    s3_bucket_csv: process.env.AWS_S3_BUCKET_CSV,
  },
  redis: {
    port: process.env.REDIS_PORT || 6379,
    ip: process.env.REDIS_IP || '0.0.0.0',
  },
  session: {
    tokenExpiry: process.env.SESSION_TOKEN_EXPIRY || 3600,
  },
  csv: {
    uploadPath: process.env.CSV_UPLOAD_PATH,
    baseUrl: process.env.CSV_BASE_URL,
  },
  sentry: {
    dsn: process.env.SENTRY_DSN,
  },
  socket: {
    port: process.env.SOCKET_IO_PORT || 5000,
    ip: process.env.SOCKET_IO_IP || '0.0.0.0',
  },
  pushyme: {
    ios_api_key: process.env.PUSHYME_IOS_API_KEY,
    android_api_key: process.env.PUSHYME_ANDROID_API_KEY,
  },
  plivo: {
    authId: process.env.PLIVO_AUTH_ID,
    authToken: process.env.PLIVO_AUTH_TOKEN,
    defaultSender: process.env.PLIVO_DEFAULT_SENDER || '11111',
  },
  frontend: {
    baseUrl: process.env.FRONTEND_BASE_URL,
  },
};
