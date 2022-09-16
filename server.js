
const cors = require("cors");
// const engineLogic = require("./engineLogic");

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.listen(3000);

app.post("/forward", (req, res) => {
  const message = req.body;
  console.log(req.body);
//   engineLogic.forward();
  res.send("Forward");
});

app.post("/backward", (req, res) => {
  const message = req.body;
  console.log(req.body);
  res.send("Backward");
});

app.post("/right", (req, res) => {
  const message = req.body;
  console.log(req.body);
  res.send("Right");
});

app.post("/left", (req, res) => {
  const message = req.body;
  console.log(req.body);
  res.send("Left");
});