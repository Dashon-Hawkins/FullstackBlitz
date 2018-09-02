const express = require('express');

const app = express();

app.get('/', (req, res) => {
res.send({ h1:'there'})
});
app.listen(process.env.PORT || 8080, () => {
 console.log("server running on 8080")
})