/* file index.js */
const express = require('express')
const app = express()
const port = 3000
/**Routing Dasar */
// app.get('/',(req,res) => res.send('hallo hay')) 
//app merupakan objek atau instance dari class Express const express = require('express')
//get() merupakan method HTTP GET
// app.get('/', (req, res) => {
//     res.write('Hello ')
//     res.write('World!')
//     res.end()
//     })


// app.post('/contoh', (req, res) => {
//     res.send('request dengan method POST')
//     })
// app.put('/contoh', (req, res) => {
//     res.send('request dengan method PUT')
//     })
// app.delete('/contoh', (req, res) => {
//     res.send('request dengan method DELETE')
//     })    
// app.all('/universal', function (req, res) {
//     res.send('request dengan method '+req.method)
//     }) //bisa diakses dengan method apapun 
    //http://localhost:3000/universal

    /**Routing dinamis */

app.get('/post/:id', (req, res) => {
    res.send('artikel-'+req.params.id)
}) //routing dinamis http://localhost:3000/post/700000
   
app.get('/foods', (req, res) => {
    const page = req.query.page ? req.query.page : 1
    res.write('Foods page: '+page+'\n')
    if (req.query.sort) res.write('Sort by: '+req.query.sort)
    res.end()
   })

app.listen(port, () => console.log(`Server running at
http://localhost:${port}`))