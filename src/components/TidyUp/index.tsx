import { SortableContainer, SortableElement, SortEndHandler } from 'react-sortable-hoc';
import { Card, CardType } from 'components/Card';
import { CardsList } from './styles';

export function TidyUp() {
  const cards: CardType[] = [
    {
      id: '0',
      author: 'Djamel Kouji',
      download_url: 'https://picsum.photos/id/0/5616/3744',
      position: 'a'
    },
    {
      id: '1002',
      author: 'NASA',
      download_url: 'https://picsum.photos/id/1002/4312/2868',
      position: 'b'
    },
    {
      id: '1003',
      author: 'E+N Photographies',
      download_url: 'https://picsum.photos/id/1003/1181/1772',
      position: 'c'
    },
    {
      id: '1004',
      author: 'Greg Rakozy',
      download_url: 'https://picsum.photos/id/1004/5616/3744',
      position: 'd'
    }
  ];

  // eslint-disable-next-line react/no-unused-prop-types
  const SortableItem = SortableElement(({ value }: { value: CardType }) => (
    <Card card={value} isLoading={false} />
  ));

  // eslint-disable-next-line react/no-unused-prop-types
  const SortableList = SortableContainer(({ items }: { items: CardType[] }) => {
    return (
      <CardsList>
        {items.map((value, index) => (
          <SortableItem key={value.id} index={index} value={value} />
        ))}
      </CardsList>
    );
  });
  // .sort((a, b) => a.position - b.position)

  const onSortEnd = ({ newIndex }: { newIndex: number }) => {
    console.log(newIndex);
  };

  console.log('--');
  const test = ['bt', 'e', 'v', 'c'];
  console.log(test);

  test.sort();
  console.log(test);
  console.log(test[1]);

  return <SortableList items={cards} onSortEnd={onSortEnd} />;
}
