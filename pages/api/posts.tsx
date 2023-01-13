import { NextApiHandler } from "next";
import fs from "fs";
import path from "path";

const handler: NextApiHandler = (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET": {
      const data = readPostsInfo();
      return res.json({ postInfo: data });
    }
    default:
      return res.status(404).send("Not Found");
  }
};

const readPostsInfo = () => {
  const dirPathToRead = path.join(process.cwd(), "posts");
  return fs.readdirSync(dirPathToRead);
};
export default handler;
