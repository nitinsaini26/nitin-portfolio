import '../styles/globals.css';
import ScrollIndicator from '../components/ScrollIndicator';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ScrollIndicator />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
