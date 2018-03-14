#!/usr/bin/env node

var fs = require('fs')
var dirName = process.argv[2]

process.chdir("/Users/liuheng/Desktop")
fs.mkdirSync("./" + dirName)
process.chdir("./" + dirName)
fs.mkdirSync('css')
fs.mkdirSync('js')

fs.writeFileSync("./index.html", "")
fs.writeFileSync("css/style.css", "")
fs.writeFileSync("./js/main.ks", "")

process.exit(0)
