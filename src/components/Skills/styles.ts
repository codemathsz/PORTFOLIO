import styled from 'styled-components'

export const SkillContainer = styled.div`
  margin-top: 8rem;
  background-color: ${(props) => props.theme['black-600-opacity']};
  padding: 2rem 1rem 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4rem;
`
export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    text-transform: uppercase;
    color: ${(props) => props.theme['white-opacity']};
    font-size: 24px;
    font-weight: 600;
  }
`
export const LineDecoration = styled.div`
  width: 1.563rem;
  height: 1px;
  border: 1px solid ${(props) => props.theme['white-opacity']};
`
export const SkillsContent = styled.div`
  width: 70%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  gap: 2.5rem;
`

export const Skill = styled.div`
  width: 6rem;
  height: 6rem;
  margin: 0 auto;
  border-radius: 16px;
  background-color: ${(props) => props.theme['blue-800']};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transform: background 0.2s;

  &:hover {
    opacity: 0.8;
    scale: 1.1;
  }

  img {
    width: 3.75rem;
    height: 5rem;
  }
`
