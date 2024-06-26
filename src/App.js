import React from 'react';
import './App.css';
import Header from './componentes/Header';
import Ebook from './componentes/Ebook';
import Footer from './componentes/Footer';
import Testimonials from './componentes/Testimonials';
import Video from './componentes/Video';
import srcvd from '../src/componentes/video/HeaderVideo.mp4'

import ebook1Image from './images/generico.PNG';
import ebook2Image from './images/generico.PNG';
import ebook3Image from './images/generico.PNG';
import Trainerimg from './images/Trainer.png'

function App() {
  return (
    <div className="App">
      <Header
      
        Trainer={Trainerimg}
      />
      <Video
        videoSrc={srcvd}
      />
      <div className="ebooks">
        <Ebook 
          title="Minha História"
          description="Conheça a história inspiradora de Erick Sousa."
          image={ebook1Image}
        />
        <Ebook 
          title="Receitas Fitness"
          description="Descubra receitas deliciosas e saudáveis."
          image={ebook2Image}
        />
        <Ebook 
          title="Dietas Prontas"
          description="Acesse dietas completas para diferentes objetivos."
          image={ebook3Image}
        />
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
