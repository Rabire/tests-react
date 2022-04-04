import { CardBox, Content } from './styles';

type Props = {
  isLoading: boolean;
};

export function Card({ isLoading }: Props) {
  const imgURL = 'https://images.unsplash.com/photo-1647752477456-03d1aed1cea2';

  return (
    <CardBox>
      <img src={imgURL} alt="zbi la lune" />
      <Content isLoading>
        <h3>OKOK</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quae molestias quam ea
          numquam a, repellat porro quis sint totam aut possimus neque officiis exercitationem!
        </p>
      </Content>
    </CardBox>
  );
}
