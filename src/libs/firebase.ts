import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// Dados de configuração da nossa conta firebase

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID
};

// Inicializa nosso app através dessas configurações de entrada
const firebaseApp = initializeApp(firebaseConfig);
// Entramos em nosso storage depois da inicialização de configuração firebase 
export const storage = getStorage(firebaseApp);