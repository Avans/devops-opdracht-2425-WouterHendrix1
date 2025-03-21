module.exports = {
    mongodbMemoryServerOptions: {
      instance: {
        dbName: 'test',
      },
      binary: {
        version: '4.0.3', // kies de versie die je nodig hebt
        skipMD5: true,
      },
      autoStart: false,
    },
  };