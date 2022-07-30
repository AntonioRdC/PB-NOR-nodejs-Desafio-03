import { Schema, model, Document } from 'mongoose'

interface EmployeeInterface extends Document {
    name: string,
    cpf: string,
    office: string,
    birthday: string
}
const EmployeeSchema = new Schema({
  name: {
    type: String
  },
  cpf: {
    type: String
  },
  office: {
    type: String,
    enum: {
      values: ['gerente', 'vendedor', 'caixa'],
      message: '{VALUE} is not supported'
    }
  },
  birthday: {
    type: String
  },
  situation: {
    type: String,
    enum: {
      values: ['activate', 'deactivate'],
      message: '{VALUE} is not supported'
    }
  }
},
{
  versionKey: false
})

export default model<EmployeeInterface>('Employee', EmployeeSchema)
