import express from "express"
import http from "http"
import path from "path"
import typeorm from "typeorm"
import {getSecret} from "./fetchSecret.js"
import { fileURLToPath } from 'url';

import student from "./entity/student.json"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const startServer = async () => {
  const secret = await getSecret();
  const jsonSecret = JSON.parse(secret)

  var EntitySchema = typeorm.EntitySchema

  const connection = await typeorm.createConnection({ 
     "type": jsonSecret.engine, 
     "host": jsonSecret.host, 
     "port": jsonSecret.port, 
     "username": jsonSecret.username, 
     "password": jsonSecret.password, 
     "database": "dbmaster",
     "synchronize": true, 
     "logging": false,
     entities: [ new EntitySchema(student) ] 
  })

//   const repo = connection.getRepository("Student")
//   var student = { 
//     name: "Student1", 
//     age: 18 
//  };
//  repo.save(student)
}

startServer()



var app = express();

const PORT = process.env.PORT || 3000;

app.use(
  "/public/icons",
  express.static(path.join(__dirname, "../../public/icons"))
);

app.use("/", express.static(path.join(__dirname, "../../dist")));

app.get("/getPhoto", function (req, res) {
  const fileLocation = path.join(
    __dirname,
    "../../src/client/resources/farmPics/beans.jpg"
  );
  res.sendFile(fileLocation);
});

app.get("*", function (req, res) {
  const fileLocation = path.join(__dirname, "../../dist/index.html");
  res.sendFile(fileLocation);
});

const server = http.createServer(app);
server.listen(PORT);
