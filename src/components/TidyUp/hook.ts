import { useState, useRef, DragEvent } from 'react';

type SortableElement<T> = T & { position: number };

const useDraggable = <T>(list: SortableElement<T>[], enableSort = true) => {
  const [items, setItems] = useState(list);

  const dragItem = useRef<number>(-1);
  const dragOverItem = useRef<number>(-1);

  const handleDrag = () => {
    const itemToEdit = items[dragItem.current];
    const itemToReplace = items[dragOverItem.current];

    if (dragItem.current === dragOverItem.current) return;

    const isAfter = itemToEdit.position < itemToReplace.position;

    const newPosition = isAfter
      ? Number((itemToReplace.position + 0.01).toFixed(2))
      : Number((itemToReplace.position - 0.01).toFixed(2));

    setItems([...items.filter((i) => i !== itemToEdit), { ...itemToEdit, position: newPosition }]);
  };

  const dragProps = (index: number) => ({
    draggable: enableSort,
    className: enableSort ? 'draggable' : '',
    onDragStart: () => {
      dragItem.current = index;
    },
    onDragEnter: () => {
      dragOverItem.current = index;
    },
    onDragEnd: handleDrag,
    onDragOver: (e: DragEvent<HTMLDivElement>) => e.preventDefault()
  });

  return { dragProps, list: items };
};

export default useDraggable;
