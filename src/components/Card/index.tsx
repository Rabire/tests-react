import { CardBox, Content } from './styles';

export type CardType = {
  id: string;
  author: string;
  download_url: string;
};

type Props = {
  card?: CardType;
  isLoading: boolean;
};

export function Card({ isLoading, card }: Props) {
  const text = card?.author
    ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quae molestias quam ea numquam a, repellat porro quis sint totam aut possimus neque officiis exercitationem!'
    : undefined;

  return (
    <CardBox>
      {isLoading ? (
        <div className="loading-img" />
      ) : (
        <img src={card?.download_url} alt="zbi la lune" />
      )}

      <Content isLoading={isLoading}>
        <h3>{card?.author}</h3>
        <p>{text}</p>
      </Content>
    </CardBox>
  );
}

Card.defaultProps = {
  card: undefined
};
