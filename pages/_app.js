import "../styles/globals.css"
import BaseLayout from "../components/layout/base"
import { Provider } from "react-redux"
import store from "../components/redux/reduxStore"

const ClientUI = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </Provider>
  )
}

export default ClientUI
