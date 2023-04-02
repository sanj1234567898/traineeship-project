import React from "react";
import type { AppProps } from "next/app";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import "@/styles/globals.scss";

const App = ({ Component, pageProps }: AppProps) => {
  const [showing, setShowing] = React.useState<boolean>(false);

  React.useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
};

export default App;
