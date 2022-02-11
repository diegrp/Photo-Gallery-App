import { storage } from '../libs/firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { Photo } from '../types/photo';

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