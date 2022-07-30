import express from 'express'
import mongoose from 'mongoose'

import routes from './routes'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()

    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares (): void {
    this.express.use(express.json())
  }

  private database (): void {
    mongoose.connect('mongodb+srv://ant:123@challenger3.mp8j38c.mongodb.net/Challenger3')
  }

  private routes (): void {
    this.express.use(routes)
  }
}

export default new App().express
