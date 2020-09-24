import { extend } from 'lodash';
import { join } from 'path';

let config = {
  staticDir: join(__dirname, '..', 'assets'),
  port: 0,
  memoryFlag: false,
};
if (process.env.NODE_ENV === 'development') {
  let localConfig = {
    viewDir: join(__dirname, '../../web/index-dev.html'),
    port: 8082
  };
  config = extend(config, localConfig);
}
if (process.env.NODE_ENV === 'production') {
  let prodConfig = {
    viewDir: join(__dirname, '../../web/index-prod.html'),
    port: 8083,
    memoryFlag: 'memory',
  };
  config = extend(config, prodConfig);
}

export default config;
