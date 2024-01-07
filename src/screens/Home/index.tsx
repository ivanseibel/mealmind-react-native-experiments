import { Header } from '@components/Header';
import { Container, MealsContainer, NewContainer, Subtitle } from './styles';
import { StatisticHighlight } from '@components/StatisticHighlight';
import { Button } from '@components/Button';

export function Home() {
  return (
    <Container>
      <Header />
      <StatisticHighlight 
        percentage={90.86}
        variant="positive"
        style={{ marginTop: 36 }}
      />
      <MealsContainer>
        <NewContainer>
          <Subtitle>Meals</Subtitle>
          <Button
            label='Add meal'
            onClick={() => {}}
            variant='primary'
            icon='plus'
          />
        </NewContainer>
      </MealsContainer>
    </Container>
  )
}