import { createGlobalStyle } from "styled-components";
export const GlobaleStyles = createGlobalStyle`
            *,*::after,*::before{
                box-sizing: border-box;
                margin: 0;
                padding: 0;
            }
            html{
                font-size:62.5%;
            }

            body{
                font-family: "Open Sans", sans-serif;
                background-color: #fff;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;

            }
            img{
                 width:100%;
                 height:100%;
                 display:block;
                 object-fit: cover;
            }
            ul {
                 list-style: none;
            }
            a {
                 text-decoration: none;
                 color: inherit;
                 display:inline-block;
            }
            .mainContainer{
                max-width:1140px;
                width:100%;
                 margin:0 auto;
            }
            .btn{
                display:block;
                padding:.6rem 1.5rem;
                background:${(p) => p.theme.primary};
                color:${(p) => p.theme.white};
                font-family: Open Sans;
                font-style: normal;
                font-weight: bold;
                font-size: 18px;
                line-height: 25px;
                display: flex;
                align-items: center;
                text-align: center;
                text-transform: capitalize;
                border:none;
                cursor:pointer;
                &:hover{
                    opacity:.6;
                }
            }

      `;
