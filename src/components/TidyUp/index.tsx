import { useState, useRef } from 'react';
import { CARDS, alphaNumeric } from './content';
import { CardsList, Card, Button } from './styles';

export function TidyUp() {
  const [enableSort, setEnableSort] = useState(false);
  const [cards, setCards] = useState(CARDS);

  const dragItem = useRef<any>(null);
  const dragOverItem = useRef<any>(null);

  const items = cards.sort((a, b) => (a.position > b.position ? 1 : -1));

  const handleDrag = () => {
    const itemToEdit = cards[dragItem.current];
    const itemToReplace = cards[dragOverItem.current];

    const isAfter = itemToEdit.position < itemToReplace.position;

    const newPosition = isAfter
      ? Number((itemToReplace.position + 0.01).toFixed(2))
      : Number((itemToReplace.position - 0.01).toFixed(2));

    setCards([...cards.filter((i) => i !== itemToEdit), { ...itemToEdit, position: newPosition }]);
  };

  return (
    <>
      <Button type="button" onClick={() => setEnableSort((prev) => !prev)}>
        {enableSort ? 'Fini !' : 'Ordonner'}
      </Button>

      <CardsList>
        {items.map((card, index) => (
          <Card
            key={card.id}
            draggable={enableSort}
            className={enableSort ? 'draggable' : ''}
            onDragStart={() => {
              dragItem.current = index;
            }}
            onDragEnter={() => {
              dragOverItem.current = index;
            }}
            onDragEnd={handleDrag}
            onDragOver={(e) => e.preventDefault()}
          >
            <h1>{card.author}</h1> {card.position}
          </Card>
        ))}
      </CardsList>
    </>
  );
}
