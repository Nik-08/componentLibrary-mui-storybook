import { Avatar, Button, Card, Checkbox } from "./components";

function App() {
  return (
    <div className='App'>
      <Button variant='contained' loading={false}>
        Click
      </Button>
      <Avatar
        src={
          "https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/445x460_0_6a5d57baf3fab914fdfcc2cc563ed893@480x496_0xac120003_4430520541578509619.jpg"
        }
        color={"#800080"}
        name={"Artem Ivanov"}
      />

      <Card
        sx={{ minWidth: 275, maxWidth: 350, margin: "50px auto 0" }}
        variant='elevation'
        src='https://upload.wikimedia.org/wikipedia/en/8/82/Lightning_McQueen.png'
        cardActionContent={
          <Button
            variant='outlined'
            size='small'
            sx={{ maxWidth: 200, width: "100%", margin: "0 auto" }}
            onClick={() => console.log(123)}
          >
            Read more
          </Button>
        }
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
        dignissimos.
      </Card>

      <Checkbox label={"policy agreement"} />
    </div>
  );
}

export default App;
