import type { AppProps } from "next/app";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
