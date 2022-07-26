import path from "path";
import { promises as fs } from "fs";

export default function writeData(data, filename) {
  const storagePath = path.join(process.cwd(), "data", filename);
  // returns a promise
  return fs.writeFile(storagePath, data); // 'fs' is not a parameter, we cannot pass it as an spy in our tests
  // use Mocks to create the tests!
}
