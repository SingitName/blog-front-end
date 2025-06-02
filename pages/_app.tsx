import type { AppProps } from "next/app";
import "@styles/style.scss";
import "@styles/globals.scss";
import CustomLayout from "@/component/CustomLayout";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

// 👉 Thêm các dòng này:
import { Provider } from "react-redux";
import { store } from "@/redux/store";
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <CustomLayout>{page}</CustomLayout>);

  return (
    <Provider store={store}>
      {getLayout(<Component {...pageProps} />)}
    </Provider>
  );
}
