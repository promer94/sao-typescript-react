/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core'
import React, { useState } from 'react'
import { hot } from 'react-hot-loader/root'

const normalize = css`
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
`

const header = css`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const text = css`
  text-align: center;
`

const link = css`
  color: #61dafb;
`

const App: React.FC = () => {
  const [tips, setTips] = useState('react is awesome')
  return (
    <React.Fragment>
      <Global styles={normalize} />
      <div css={text}>
        <header css={header}>
          <a
            css={link}
            target="_blank"
            rel="noopener noreferrer"
            href="https://reactjs.org"
            onClick={e => {
              e.preventDefault()
              setTips(value =>
                value === 'react is awesome' ? 'use it' : 'react is awesome'
              )
            }}
          >
            {tips}
          </a>
        </header>
      </div>
    </React.Fragment>
  )
}

export default hot(App)
