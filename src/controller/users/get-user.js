import fs from 'fs'

export let users = [] //short memory raman deer hagaldag 

export const GetUser = (req, res) => {
      const rawUserData = fs.readFileSync('src/db/users.json')
        res.send(JSON.parse(rawUserData)); 
}

