const { render } = require("@testing-library/react");
const { styled } = require("styled-components");

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
render(
  <Wrapper>
        <Title>
            
        <h1>Hello World!</h1>    </Title>
  </Wrapper>
);

export default Title
