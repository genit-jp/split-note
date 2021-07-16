const { execSync } = require("child_process");
var fs = require("fs");

const instruments = [
  "acguitar",
  "harpsichord",
  "leadguitar",
  "marimba",
  "piano",
  "vibraphone",
  "warmpiano",
];
for (let inst of instruments) {
  for (let i = 0; i < 60; i++) {
    const time = 4 * i;
    //ターミナルで実行したのと同じ
    const filename = i + 24;
    //const stdout = execSync(`convert -resize ${s}x${s}! a.png ${s}.png`);
    let stdout = execSync(
      `sox src/${inst}.wav tmp/${filename}.wav trim ${time} ${time + 4}`
    );
    stdout = execSync(
      `sox tmp/${filename}.wav tmp/${filename}-fade.wav fade t 0 4 0.5`
    );
    //dstの中にフォルダ作る
    var dir = `dst/${inst}`;

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    stdout = execSync(
      `oggenc -q 4 -o dst/${inst}/${filename}.ogg tmp/${filename}-fade.wav`
    );
  }
}
//ソックスで.wabに切る 60コ
//オッグに変換
//クオリティは4
