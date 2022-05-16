import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './index.tsx'
import App from '.'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './services/queryClient'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={ queryClient } >
      <Provider store={ store }>
          <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
)