import { Header } from '../../components/Header'
import {
  ContentHello,
  ContentImg,
  ContentInfo,
  Download,
  MainContainer,
  MySummary,
} from './styles'

export function Home() {
  return (
    <div>
      <Header />
      <MainContainer>
        <ContentInfo>
          <ContentHello>
            <div></div>
            <span>hello</span>
          </ContentHello>
          <MySummary>
            <h2>
              I am <span>Matheus</span> de Paula
            </h2>
            <p>
              Sou desenvolvedor de software e gostaria de agradecer por visitar
              o meu portfolio. É uma grande satisfação ter a oportunidade de
              compartilhar com vocês um pouco sobre mim e sobre os meus
              projetos. Neste portfolio você vai conhecer minhas skills, um
              pouco da minha trajetória na programação e meus projetos pessoais
              e profissionais.
            </p>
          </MySummary>
          <Download>download cv</Download>
        </ContentInfo>
        <ContentImg>
          <img src="../../../src/assets/foguete.png" alt="foguete" />
        </ContentImg>
      </MainContainer>
    </div>
  )
}
