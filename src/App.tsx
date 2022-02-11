import * as C from './App.styles';
import PhotoGallery from './Components/PhotoGallery';

// Render App Final

const App = () => {
  return(
    <C.Container>
      <C.Wrapper>
        <C.Heading>Galeria de Fotos</C.Heading>
        {/* Componente de Galeria de Fotos */}
        <PhotoGallery/>
      </C.Wrapper>
    </C.Container>
  )
}

export default App;