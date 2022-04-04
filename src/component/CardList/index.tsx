import { Card } from 'component/Card';
import { CardsList } from './styles';

export function CardList() {
  return (
    <CardsList>
      <Card isLoading />
      <Card isLoading />
      <Card isLoading />
      <Card isLoading />
      <Card isLoading />
    </CardsList>
  );
}
