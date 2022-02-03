import { rest } from "msw";
import albums from "./albums.json";
import comments from "./comments.json";
import users from "./users.json";

const MAX = 5000;

const getRandomDelay = () => {
  return Math.floor(Math.random() * MAX);
};

export const handlers = [
  rest.get("/albums", (_, res, ctx) => {
    return res(ctx.delay(getRandomDelay()), ctx.status(200), ctx.json(albums));
  }),

  rest.get("/comments", (_, res, ctx) => {
    return res(
      ctx.delay(getRandomDelay()),
      ctx.status(200),
      ctx.json(comments)
    );
  }),

  rest.get("/users", (_, res, ctx) => {
    return res(ctx.delay(getRandomDelay()), ctx.status(200), ctx.json(users));
  }),
];
