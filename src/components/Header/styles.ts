import styled from 'styled-components'

interface MenuProps {
  selectedColor?: 'selected'
}

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme['black-500']};
  padding: 1rem 0;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1280px;

  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Menu = styled.nav`
  width: 70%;
  display: flex;
  justify-content: flex-end;

  gap: 5rem;
`

export const ContentLink = styled.div<MenuProps>`
  transition: border-bottom 0.2s ease;
  border-bottom: 2px solid
    ${(props) =>
      props.selectedColor === 'selected'
        ? props.theme['red-700']
        : 'transparent'};

  &:hover {
    border-bottom: 2px solid ${(props) => props.theme['red-700']};
  }

  a {
    text-decoration: none;
    color: ${(props) =>
      props.selectedColor === 'selected'
        ? props.theme['red-700']
        : props.theme['gray-600']};
    text-transform: uppercase;
    transition: color 0.2s ease;
  }
  a:hover {
    color: ${(props) => props.theme['red-700']};
  }
`

export const Languages = styled.div`
  display: flex;
  gap: 2rem;

  span {
    color: ${(props) => props.theme['gray-600']};
    font-size: 0.625rem;
    text-transform: uppercase;
    cursor: pointer;

    transition: color 0.2 ease;
  }

  span:hover {
    color: ${(props) => props.theme.white};
  }
`
