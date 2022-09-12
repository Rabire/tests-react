import { CARDS } from './content';
import useDraggable from './hook';
import { CardsList, Card } from './styles';

export function TidyUp() {
  const { dragProps, list } = useDraggable(CARDS);

  return (
    <CardsList>
      {list
        .sort((a, b) => (a.position > b.position ? 1 : -1))
        .map((card, index) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Card key={card.id} {...dragProps(index)}>
            <h1>{card.author}</h1> {card.position}
          </Card>
        ))}
    </CardsList>
  );
}
