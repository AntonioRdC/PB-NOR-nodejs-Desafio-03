import { Schema, model, Document } from 'mongoose'

interface ProductInterface extends Document {
  name: string,
  category: string,
  price: number,
  employee_id: Schema.Types.ObjectId
}
const ProductSchema = new Schema({
  name: {
    type: String
  },
  category: {
    type: String
  },
  price: {
    type: String
  },
  employee_id: {
    type: Schema.Types.ObjectId,
    ref: 'Employee'
  }
},
{
  versionKey: false
})

export default model<ProductInterface>('Product', ProductSchema)
