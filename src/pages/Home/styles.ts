import styled from 'styled-components'

export const MainContainer = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-self: center;
`

export const AlingContents = styled.div`
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-template-columns: 60%, 40%;
`

export const ContentInfo = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem 0 0 0;
  gap: 1rem;
  overflow: auto;

  @media (max-width: 768px) {
  }
`
export const ContentHello = styled.div`
  display: flex;
  color: ${(props) => props.theme['gray-600-opacy']};
  text-transform: uppercase;
  align-items: center;
  gap: 0.5rem;

  div {
    width: 1.563rem;
    height: 1px;
    border: 1px solid ${(props) => props.theme['gray-600-opacy']};
  }
`
export const MySummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-size: 2.5rem;
    font-weight: 600;
    color: ${(props) => props.theme['gray-100']};
  }

  span {
    color: ${(props) => props.theme['red-opacy']};
  }

  p {
    color: ${(props) => props.theme['gray-600']};
    text-align: justify;
    line-height: 1.5rem;
    max-width: 40rem;
  }
`
export const Download = styled.button`
  max-width: 15.625rem;

  margin-top: 4rem;
  padding: 1.5rem;
  border: 0;
  border-radius: 4px;
  cursor: pointer;

  background-color: ${(props) => props.theme['red-opacy']};
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.2rem;
  transition: background-color 0.2s;

  &:hover {
    opacity: 0.8;
  }
`
export const ContentImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding-top: 6rem;

  img {
    mix-blend-mode: hard-light;
    transform: rotate(-45deg);
  }
`
export const RedesSociais = styled.div`
  width: 100%;
  margin-top: 6rem;
  display: flex;
  justify-content: center;

  div {
    width: 75%;
    display: flex;
    gap: 1rem;
    justify-content: flex-start;
  }
`
export const LinkRedeSociais = styled.a`
  color: ${(props) => props.theme['gray-600']};
  transition: color 0.2s;

  &:hover {
    color: ${(props) => props.theme['gray-600-opacy']};
    transform: scale(1.2);
  }
`
