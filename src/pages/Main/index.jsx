import Wrapper from '../../components/Wrapper'
import MainContent from '../../components/MainContent'
import Sidebar from '../../components/Sidebar'

const Main = () => {
  return <Wrapper sidebar={<Sidebar />}>{<MainContent />}</Wrapper>
}

export default Main
