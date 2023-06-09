import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
       
    }
    body{
        background-color: ${(props) => props.theme['black-800']};
        color: ${(props) => props.theme['gray-100']};
        -webkit-font-smoothing: antialiased;
        
    }

    p{
        ::selection{
            background: ${(props) => props.theme['gray-600-opacy']};
            color: ${(props) => props.theme.white};
        }
    }
    body, input, textarea, button{
        font:400 1rem Roboto, sans-serif;
    }
`
