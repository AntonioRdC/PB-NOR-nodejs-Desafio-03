import { Schema, model, Document, PaginateModel } from 'mongoose'
import paginate from 'mongoose-paginate-v2'
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

ProductSchema.plugin(paginate)

export default model<ProductInterface, PaginateModel<ProductInterface>>('Product', ProductSchema)
