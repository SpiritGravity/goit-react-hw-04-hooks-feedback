import { Container, Title } from './section.styled';


export default function Section ({ title, children }) {
    return (
      <Container>
        <Title>{title}</Title>
        {children}
      </Container>
    );
  }
  