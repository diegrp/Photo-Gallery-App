import { storage } from '../libs/firebase';
import { ref, listAll, getDownloadURL, uploadBytes, deleteObject } from 'firebase/storage';
import { Photo } from '../types/photo';
import { v4 as createId } from 'uuid';

// Lista todas nossas imagens dentro de storage no firebase

export const getAll = async () => {
  
  let list: Photo[] = [];
  
  // local onde se encontra minhas imagens em storage
  const photoFolder = ref(storage, 'images');
  // pega todas as imagens dentro de storage
  const photoList = await listAll(photoFolder);

  /* Passamos por todas as imagens e adicionamos dentro nosso list, com seus
  respectivos nomes e endereços */
   
  for(let i in photoList.items){

    let photoUrl = await getDownloadURL(photoList.items[i]);
    
    list.push({
      name: photoList.items[i].name,
      url: photoUrl
    });

  }

  return list;
}

// Uploading de nossas imagens para dentro de storage no firebase

export const insert = async ( file: File ) => {

  // tipos de imagens que aceitamos
  if(['image/jpeg','image/jpg','image/png'].includes(file.type)){

    let randomName = createId();
    // pegamos o local onde vamos fazer o uploading
    let newFile = ref(storage, `images/${randomName}`);
    // let newFile = ref(storage, `images/${file.name}`);
    
    // realizando o uploading através do local que pegamos
    let upload = await uploadBytes(newFile, file);
    // pegamos o url da imagem que fizemos upload
    let photoUrl = await getDownloadURL(upload.ref);

    return { name: upload.ref.name, url: photoUrl }

  }else{
    return new Error('Tipo de arquivo não permitido.');
  }
}

// Apaga nossas imagens através do ref name, dentro de storage no firebase

export const deletePhoto = async ( name: string ) => {
  // local onde nosso imagem está e apagamos com base no name que recebemos
  let photoRef = ref(storage, `images/${name}`);
  await deleteObject(photoRef);
}