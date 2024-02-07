import { Container, Title, Wrapper } from "../../styled";
import HeaderAction from "../HeaderAction";
import ListTodoItem from "../ListTodoItem";

const Home = () => {
  return (
    <Wrapper>
      <Container>
        <Title>
          <span className="wow" data-fill-text="WOW">
            WOW
          </span>
          {" "}
          <span className="todo" data-fill-text="Todo">
            Todo
          </span>
        </Title>
        <HeaderAction />
        <ListTodoItem />
      </Container>
    </Wrapper>
  );
};

export default Home;
