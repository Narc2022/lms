import express from "express";
export const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";

/* body-parser is the Node.js body-parsing middleware. 
It is responsible for parsing the incoming request bodies in a middleware before you handle it. 
It’s commonly used in web applications built with Express.js to handle form submissions, JSON payloads, 
and other types of request bodies. */

app.use(express.json({ limit: "50mb" })); //limit of body parser data this is important for using cloudinary
