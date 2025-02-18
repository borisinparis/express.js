import fs from 'fs'

export let users = [] //short memory raman deer hagaldag 

export const GetUser = (req, res) => {
      const rawUserData = fs.readFileSync('src/db/users.json')
      const userParse = JSON.parse(rawUserData)
      if(userParse.length >= 3) {
        res.send(userParse)
      }
      else{
        res.send("buruu garsan")
      }
        // res.send(JSON.parse(rawUserData)); 
}


