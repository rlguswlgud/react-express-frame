const express = require('express')
const app = express()

const PORT = 80

app.listen(PORT, () => {
    console.log(`PORT ${PORT} CONNECTED SUCCESS`)
})