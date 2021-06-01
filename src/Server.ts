import { port } from './core/Config'
import app from './App'

app
  .listen(port, () => {
    console.log(`Server listening on port : ${port}`)
  })
  .on('error', (e) => console.log(`Error Occurred : ${e}`))
