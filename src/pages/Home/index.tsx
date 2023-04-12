import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from 'phosphor-react'
import fogueteImg from '../../assets/foguete.png'

import {
  AlingContents,
  ContentHello,
  ContentImg,
  ContentInfo,
  Download,
  LinkRedeSociais,
  MainContainer,
  MySummary,
  RedesSociais,
} from './styles'

import { Header } from '../../components/Header'
import { Skills } from '../../components/Skills'

export function Home() {
  return (
    <div>
      <Header />

      <MainContainer>
        <AlingContents>
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
                Sou desenvolvedor de software e gostaria de agradecer por
                visitar o meu portfolio. É uma grande satisfação ter a
                oportunidade de compartilhar com vocês um pouco sobre mim e
                sobre os meus projetos. Neste portfolio você vai conhecer minhas
                skills, um pouco da minha trajetória na programação e meus
                projetos pessoais e profissionais.
              </p>
            </MySummary>
            <Download>download cv</Download>
          </ContentInfo>

          <ContentImg>
            <img src={fogueteImg} alt="foguete" />
          </ContentImg>
        </AlingContents>
      </MainContainer>

      <RedesSociais>
        <div>
          <LinkRedeSociais
            href="https://www.instagram.com/matheus05_depaula/"
            title="Instagram"
            target="_blank"
          >
            <InstagramLogo size={24} weight="regular" />
          </LinkRedeSociais>
          <LinkRedeSociais href="#" title="WhatsApp">
            <WhatsappLogo size={24} weight="regular" />
          </LinkRedeSociais>
          <LinkRedeSociais
            href="https://www.linkedin.com/in/matheus-oliveira-de-paula-a16a81225/"
            title="Linkedin"
            target="_blank"
          >
            <LinkedinLogo size={24} weight="regular" />
          </LinkRedeSociais>
          <LinkRedeSociais
            href="https://github.com/codemathsz"
            title="GitHub"
            target="_blank"
          >
            <GithubLogo size={24} weight="regular" />
          </LinkRedeSociais>
        </div>
      </RedesSociais>
      <Skills />
    </div>
  )
}
