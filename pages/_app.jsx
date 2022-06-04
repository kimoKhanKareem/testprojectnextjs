import '../styles/globals.css'
import Home from '../Components/Home'

function MyApp({ Component, pageProps }) {
  return <Home>
      <Component {...pageProps} />
    </Home>
}
export default MyApp
