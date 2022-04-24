import { usePersistentState } from 'hooks/usePersistentState';
import { Container, Section, SectionGroup } from './styles';

export function Sections() {
  const [name, setName] = usePersistentState('name', 'Eric');

  return (
    <>
      <input type="text" onChange={(event) => setName(event.target.value)} value={name} />

      <Container>
        <Section style={{ height: 500 }} />

        <SectionGroup>
          <Section />
          <Section />
        </SectionGroup>
      </Container>
    </>
  );
}
