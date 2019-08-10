/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core'
import React from 'react'
import logo from './logo.svg'
import { hot } from 'react-hot-loader/root'
const App: React.FC = () => {
  return (
    <React.Fragment>
      <Global
        styles={css`
          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
              'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
              'Helvetica Neue', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
              monospace;
          }
        `}
      />
      <div
        css={css`
          text-align: center;
        `}
      >
        <header
          css={css`
            background-color: #282c34;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: calc(10px + 2vmin);
            color: white;
          `}
        >
          <img
            src={logo}
            css={css`
              animation: App-logo-spin infinite 20s linear;
              height: 40vmin;
              pointer-events: none;
              @keyframes App-logo-spin {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(360deg);
                }
              }
            `}
            alt="logo"
          />
          <a
            css={css`
              color: #61dafb;
            `}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            react is awesome
          </a>
        </header>
      </div>
    </React.Fragment>
  )
}

export default hot(App)
