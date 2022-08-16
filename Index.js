//20222569 권호영

const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const user = { id: "admin", pw: "1234" }
const userList = []

// "/" = 어떤 주소  "() => {}"" = 어떤 함수

app.post("/", (req, res) => {
  const { id, pw } = req.body
  if (id === user.id) {
    if (pw === user.pw) {
      res.json({ result: true })
    } else {
      res.json({ result: false })
    }
  } else {
    res.json({ result: false })
  }
  console.log(`ID: ${id}, PW: ${pw}`)
})

app.post("/register", (req, res) => {
  const { id, pw, name } = req.body
  const user = { id, pw, name }
  userList.push(user)
  console.log(userList)
  res.json({ result: true })
})

const port = 3000
app.listen(port, () => console.log(`SERVER ON PORT : ${port}`))
