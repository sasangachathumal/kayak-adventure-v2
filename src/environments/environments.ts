export const environment = {
  production: false,
  firebase: {
    projectId: 'app-kayakadventure',
    appId: '1:711067580445:web:af2fef8cebfb8f3a4a2ef4',
    databaseURL: 'https://app-kayakadventure-default-rtdb.firebaseio.com',
    storageBucket: 'app-kayakadventure.appspot.com',
    apiKey: 'AIzaSyCMyUxSrFci2kstCbUxRQANKzm_5gAHXdg',
    authDomain: 'app-kayakadventure.firebaseapp.com',
    messagingSenderId: '711067580445',
    measurementId: 'G-LEX8301D5H'
  },
  AWS: {
    accessKey: 'AKIAWNVIF3Z7YH5CJLXG',
    secretAccessKey: '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',
    region: 'us-east-1',
    bucketKey: 'kayak-files',
    paths: {
      video: '/videos',
      image: '/image',
      files: '/file',
    }
  }
};
