type SortableCardType = {
  id: string;
  author: string;
  download_url: string;
  position: number;
};

export const CARDS: SortableCardType[] = [
  {
    id: '0',
    author: 'Djamel',
    download_url: 'https://picsum.photos/id/0/5616/3744',
    position: 1
  },
  {
    id: '1002',
    author: 'NASA',
    download_url: 'https://picsum.photos/id/1002/4312/2868',
    position: 4
  },
  {
    id: '1003',
    author: 'E+N',
    download_url: 'https://picsum.photos/id/1003/1181/1772',
    position: 3
  },
  {
    id: '1004',
    author: 'Gregory',
    download_url: 'https://picsum.photos/id/1004/5616/3744',
    position: 2
  }
];

export const alphaNumeric = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');
