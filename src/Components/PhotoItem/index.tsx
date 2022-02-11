
// Types das props que recebemos em nosso componente

type Props = {
  name: string;
  url: string;
}

// Componente PhotoItem estilizado

export const PhotoItem = ({ name, url }: Props) => {
  return(
    <C.Container>
      {/* Imagem */}
      <img src={url} alt={name} />
    <C.Wrapper>
      {/* Nome da nossa imagem */}
      <span>{name}</span>
    </C.Wrapper>
    </C.Container>
  )
}

export default PhotoItem;