import { Grid, Layout } from 'antd'
import { Header, Content, Footer } from 'antd/es/layout/layout'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import WebRoute from './route/WebRoute'
import ScreenContext from './state/ScreenContext'

export default function App() {
    const {useBreakpoint} = Grid
    const screen = useBreakpoint()

    return (
    <ScreenContext.Provider value={screen}>
        <BrowserRouter>
    <Layout>
      <Header style={{background:"white"}}>
        <Navbar />
      </Header>
      <Content>
        <WebRoute />
      </Content>
      <Footer>
      </Footer>
    </Layout>
    </BrowserRouter>
    </ScreenContext.Provider>
  )
}