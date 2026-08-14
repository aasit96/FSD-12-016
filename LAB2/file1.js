import { writeFile, appendFile} from "fs/promises";
await writeFile("hello.txt","JS is hard");
await appendFile("hello.txt", "\nFS is much easy than others"