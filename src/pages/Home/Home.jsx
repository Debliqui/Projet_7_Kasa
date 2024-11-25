import Banner from '../../components/Banner/Banner.jsx'
import styled from 'styled-components'

const HomeContainer = styled.main`
  max-width: 1240px;
  margin: auto;
  display: flex;
  flex-direction: column;
`

export default function Home() {
  return (
    <HomeContainer>
      <Banner />
    </HomeContainer>
  )
}
