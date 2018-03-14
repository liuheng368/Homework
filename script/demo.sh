if [ -d $1 ]; then
  echo "error: $1 dir 文件已存在"
  exit
else
  cd ~/Desktop
  mkdir $1
  cd $1
  mkdir css js
  touch index.html css/style.css js/main.js
  
  cat <<DIRWRITE>>index.html
    <!DOCTYPE>
    <title>Hello World</title>
    <h1>Hi Fang Fang</h1>
DIRWRITE

  echo "h1{color: red;}" >> css/style.css

  cat <<JSWRITE>>js/main.js
    var string = "Hello World"
    alert(string)
JSWRITE

  echo "$1 创建成果" 
  exit
fi
