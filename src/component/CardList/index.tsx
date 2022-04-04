import { useQuery } from 'react-query';
import { Card, CardType } from 'component/Card';
import { CardsList } from './styles';

export function CardList() {
  const { isLoading, data: cards } = useQuery('cardsData', () =>
    fetch('https://picsum.photos/v2/list').then((res) => res.json())
  );

  return (
    <CardsList>
      {isLoading
        ? // eslint-disable-next-line react/no-array-index-key
          Array(5).map((_, i) => <Card key={i} isLoading />)
        : cards.map((card: CardType) => <Card key={card.id} card={card} isLoading={false} />)}
    </CardsList>
  );
}
