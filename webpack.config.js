module.exports = (env) => {
  if(env && env.NODE_ENV === 'production') {
    return require('./webpack/prod.config')
  } else {
    return require('./webpack/dev.config')
  }
}