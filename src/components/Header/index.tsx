import { Code } from 'phosphor-react'
import {
  HeaderContainer,
  Menu,
  Languages,
  HeaderContent,
  ContentLink,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <span>
          <Code size={40} color="#9A9A9A" weight="bold" />
        </span>

        <Menu>
          <ContentLink selectedColor="selected">
            <a href="#">inicio</a>
          </ContentLink>
          <ContentLink>
            <a href="#">sobre</a>
          </ContentLink>
          <ContentLink>
            <a href="#">projetos</a>
          </ContentLink>
          <ContentLink>
            <a href="#">contatos</a>
          </ContentLink>
        </Menu>
        <Languages>
          <span>en</span>
          <span>pt</span>
          <span>es</span>
        </Languages>
      </HeaderContent>
    </HeaderContainer>
  )
}
