import * as fs from "fs";
import * as path from "path";
import archiver from "archiver";

const archive = archiver("zip", { zlib: { level: 9 } });

["metanen0x0", "めたねのおくすり", "繧√◆縺ｭ縺ｮ縺翫￥縺吶ｊ"].forEach((name) => {
  archive.append(
    fs.createReadStream(path.resolve(__dirname, "../dist/metanen0x0.exe")),
    { name: `${name}.exe` }
  );
});

archive.pipe(
  fs.createWriteStream(path.resolve(__dirname, "../dist/metanen0x0.zip"))
);

archive.finalize();
