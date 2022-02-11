import { useEffect, useState, FormEvent } from "react";
import * as Photos from "../../services/photos";
import { Photo } from "../../types/photo";
import PhotoItem from "../PhotoItem";
import * as C from "./styles";

const PhotoGallery = () => {
  
  // Estados de loading e uploading para carregamento e envio de imagens

  const [ loading, setLoading ] = useState(false);
  const [ uploading, setUploading ] = useState(false);
  const [ photos, setPhotos ] = useState<Photo[]>([]);

  // Executa nossa função de listagem de imagens, sempre que iniciar a página ou quando for chamada.

  useEffect(() => {
    getPhotos();
  },[]);

  // Lista todas as imagens dentro do nosso firebase

  const getPhotos = async () => {
    setLoading(true);
    setPhotos(await Photos.getAll());
    setLoading(false);
  }

   // Formulário de upload de imagens para nosso firebase

   const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const file = formData.get('image') as File;

    // Verifica que temos um arquivo de imagem selecionado, e que tenha tamanho maior que 0.
    
    if(file && file.size > 0){
      setUploading(true);
      const result = await Photos.insert(file);
      setUploading(false);

      // Tratando o error dentro de result, com um alert box.

      if(result instanceof Error){
        // mensagem de tipo de arquivo não permitido
        alert(`${result.name} - ${result.message}`);
      }else{
        // atualização do estado com nosso nova imagem adicionada no firebase
        let newPhotoList = [...photos];
        newPhotoList.push(result);
        setPhotos(newPhotoList);
      }
      // caso tente fazer upload para nosso firebase, sem ter selecionado nenhuma arquivo
    }else{
      alert('Selecione algum arquivo, para poder envia-lo.')
    }
  }

  return (
    <>
      {/* Formulário de upload da imagem */}
        <C.UploadForm method="POST" onSubmit={handleFormSubmit}>
          <input type="file" name="image" />
          <input type="submit" value="Enviar" />
          {uploading && "Enviando..."}
        </C.UploadForm>

      {/* Verificação de loadings e estado de photos*/}

      {loading && 
        <C.ScreenWarning>
          <div className="emoji">🐑</div>
          <div>Carregando...</div>
        </C.ScreenWarning>
      }

      {/* Componente PhotoItem que recebe dados de estado por mapping */}

      {!loading && photos.length > 0 && 
        <C.PhotoList>
          {photos.map((item, index) => {
            return(
              <PhotoItem 
                key={index} 
                name={item.name} 
                url={item.url}
              />
            )
          })}
        </C.PhotoList>
      }

      {!loading && photos.length === 0 &&
        <C.ScreenWarning>
          <div className="emoji">😞</div>
          <div>Não há fotos cadastradas.</div>
        </C.ScreenWarning>
      }
    </>
  )

}

export default PhotoGallery;