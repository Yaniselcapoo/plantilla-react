import http from "http";
import { Router as ruta } from "express";
import { static as FileRead } from "express";
import express from "express";
import message from "message-console-server-active";

const app = express();
const server = http.createServer(app);

app.use(FileRead("index.html"));

server.listen(8000);
console.log(message, 8000);
