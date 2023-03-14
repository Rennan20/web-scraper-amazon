import { NextApiRequest } from "next";

export async function POST(req: NextApiRequest) {
  console.log("Submiting...", req.body);
}
