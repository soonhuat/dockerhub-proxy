import express, { Request, Response } from 'express'
import cors from 'cors'
import { CheckDockerContainer } from '../api'

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

const router = express.Router()
/* GET Access role premissions. */
router.post('/', async function (req: Request, res: Response): Promise<any> {
  res.status(200).json(await CheckDockerContainer(req.body.image, req.body.tag))
})

app.use('/', router)

app.listen(port, () => {
  console.log(`Dcoker proxy app listening at http://localhost:${port}`)
})
