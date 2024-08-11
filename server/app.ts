import express, { NextFunction, Request, Response } from "express";
export const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
require("dotenv").config();
/* body-parser is the Node.js body-parsing middleware. 
It is responsible for parsing the incoming request bodies in a middleware before you handle it. 
It’s commonly used in web applications built with Express.js to handle form submissions, JSON payloads, 
and other types of request bodies. */

app.use(express.json({ limit: "50mb" })); //limit of body parser data this is important for using cloudinary

// cookie parser
// A cookie is a piece of data that is sent to the client-side with a request and is stored on the client-side itself by the Web Browser the user is currently using. With the help of cookies –
app.use(cookieParser());
//  It is easy for websites to remember the user’s information
//  It is easy to capture the user’s browsing history
//  It is also useful in storing the user’s sessions

// cors cross origin resource sharing

app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);

// TESTING API
// https://www.youtube.com/watch?v=kf6yyxMck8Y&t=10736s

app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    success: true,
    message: "API is working",
  });
});

// Unknown route
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} not found`) as any;
  err.statusCode = 404;
  next(err);
});
