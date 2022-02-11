import { useEffect, useState } from "react";
import * as Photos from "../../services/photos";
import { Photo } from "../../types/photo";
import PhotoItem from "../PhotoItem";
import * as C from "./styles";

const PhotoGallery = () => {
  
  // Estados de loading e uploading para carregamento e envio de imagens

  const [ loading, setLoading ] = useState(false);
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

  return (
    <>

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