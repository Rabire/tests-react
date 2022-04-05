import { Page, Heading, HeadingContent, Modal } from './styles';

export function Hero() {
  return (
    <Page>
      <Heading>
        <HeadingContent>
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <p>Lorem ipsum dolor</p>
        </HeadingContent>
      </Heading>
      <Modal />
    </Page>
  );
}
