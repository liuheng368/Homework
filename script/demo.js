#!/usr/bin/env node

var fs = require('fs')
var dirName = process.argv[2]

if (fs. existsSync("./" + dirName)) {
     console.error(dirName + "已存在")
     process.exit(0)
  } else {
     console.error("成功")
 }

fs.mkdirSync("./" + dirName)
process.chdir("./" + dirName)
fs.mkdirSync('css')
fs.mkdirSync('js')
//创建文件
fs.writeFileSync("./index.html", "")
fs.writeFileSync("./css/style.css", "")
fs.writeFileSync("./js/main.js", "")
//文件内容添加
fs.appendFileSync("./index.html", "<!DOCTYPE>\n<title>Hello World</title>\n<h1>Hi Fang Fang</h1>")
fs.appendFileSync("./css/style.css", "h1{color: red;}")
fs.appendFileSync("./js/main.js", "var string = \"Hello World\"\n")
fs.appendFileSync("./js/main.js", "alert(string)")

process.exit(0)