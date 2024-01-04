import { Header } from '@components/Header';
import { Container, Title } from './styles';
import { StatisticHighlight } from '@components/StatisticHighlight';

export function Home() {
  return (
    <Container>
      <Header />
      <StatisticHighlight 
        percentage={90.86}
        variant="positive"
        style={{ marginTop: 36 }}
      />
      <Title>Home</Title>
    </Container>
  )
}