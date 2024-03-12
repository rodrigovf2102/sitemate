import { useState } from "react";
import useGetJsons from "./hooks/api/useGetJsons";
import usePostJson from "./hooks/api/usePostJsons";
import styled from "styled-components";

function App() {
  const { jsons, getJsons } = useGetJsons();
  const { postJson } = usePostJson()
  const [json, setJson] = useState({});

  console.log(jsons);
  console.log(json);

  function preventAtt(event) {
    event.preventDefault();
  }

  return (
    <Container>
      <Box>
        <Button onClick={getJsons}>Receive Jsons</Button>
        {jsons ? jsons.map(json =>
          <>
            <Div bold={700} font={"20px"}>{json?.title}</Div>
            <Div>id: {json?.id}</Div>
            <Div>description: {json?.description}</Div>
          </>) : ""}
      </Box>
      <Box>
        <form onSubmit={preventAtt}>
          <Input placeholder="Insert Id..." onChange={(e) => setJson({...json, id: e.target.value})}></Input>
          <Input placeholder="Insert Title..." onChange={(e) => setJson({...json, title: e.target.value})}></Input>
          <Input placeholder="Insert Description..." onChange={(e) => setJson({...json, description: e.target.value})}></Input>
          <Button onClick={async ()=>{ await postJson(json); getJsons() }}>Post Jsons</Button>
        </form>
      </Box>
      <Box>
        <form onSubmit={preventAtt}>
          <Input placeholder="Insert Id..." onChange={(e) => setJson({...json, id: e.target.value})}></Input>
          <Input placeholder="Insert Title..." onChange={(e) => setJson({...json, title: e.target.value})}></Input>
          <Input placeholder="Insert Description..." onChange={(e) => setJson({...json, description: e.target.value})}></Input>
          <Button onClick={async ()=>{ await postJson(json); getJsons() }}>Update Jsons</Button>
        </form>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: aliceblue;
  display: flex;
`;

const Button = styled.button`
  width: 150px;
  height: 50px;
  background-color: lightblue;
  border-radius: 10px;
  margin: 10px;
  border: none;
`

const Box = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 70%;
  margin: 10px;
  height: 40px;
  border: none;
`

const Div = styled.div`
  margin: 10px;
  font-weight: ${(props) => props.bold || 400};
  font-size: ${(props) => props.font || "12px"}
`;

export default App;
