import '../styles/globals.sass'
import type { AppProps } from 'next/app'
import {Provider} from 'react-redux'
import {store} from '@lib/redux-store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
