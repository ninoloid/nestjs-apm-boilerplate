const nodeEnv = process.env.NODE_ENV;
let apm;

if (['prod', 'development'].includes(nodeEnv)) {
  try {
    apm = require('elastic-apm-node').start({
      serviceName: `${process.env.ELASTIC_APM_SERVICE_NAME}`,
      secretToken: `${process.env.ELASTIC_APM_SECRET_TOKEN}`,
      serverUrl: `${process.env.ELASTIC_APM_SERVER_URL}`,
      environment: nodeEnv,
    });

    console.log(`APM running on environment ${nodeEnv}`);
  } catch (error) {
    console.log('APM Error:', error);
  }
}

export { apm };
