import { Container, Section, SectionGroup } from './styles';

export function Sections() {
  return (
    <Container>
      <Section style={{ height: 500 }} />

      <SectionGroup>
        <Section />
        <Section />
      </SectionGroup>
    </Container>
  );
}
