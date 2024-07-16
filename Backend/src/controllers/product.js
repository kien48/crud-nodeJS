import Product from "../models/Product.js";
import { productValidation } from "../validation/product.js";


export const getAll = async(req, res) => {
    try {
        const products = await Product.find();
    if(Product.lenght == 0){
      return res.status(404).json({
        message: 'Không thành công'
      })
    }
    return res.status(200).json({
      message: 'Thành công',
      'data': products
    })
    } catch (error) {
        return res.status(500).json({
            message : error
        })
    }
  }

  export const getDetail = async (req, res)=>{
    try {
        const product = await Product.findById(req.params.id);
    if(!product){
      return res.status(404).json({
        message: 'Không thành công'
      })
    }
    return res.status(200).json({
      message: 'Thành công',
      'data': product
    })
    } catch (error) {
        return res.status(500).json({
            message : error
        })
    }

  }

  export const create = async(req, res)=>{
           try {
              const { error } = productValidation.validate(req.body)
              if(error){
                return res.status(500).json({
                  message: error.details[0].message,
                }) 
              }
              const product = await Product.create(req.body)
              if(!product){
                return res.status(404).json({
                  message: 'Không thành công'
                })
              }
              return res.status(200).json({
                message: 'Thành công',
                'data': product
              })
           } catch (error) {
            return res.status(500).json({
              message : error
          })
           }
  }

  export const update = async (req, res)=>{
    try {
      const { error } = productValidation.validate(req.body)
      if(error){
        return res.status(500).json({
          message : error
        })}

      const product = await Product.findByIdAndUpdate(req.params.id, req.body,{
        new : true
      })
      if(!product){
        return res.status(500).json({
          message : "Không thể cập nhật"
        })
      }
      return res.status(200).json({
        message : "Cập nhật thành công",
        data    :  product
      })
    } catch (error) {
      return res.status(500).json({
        message : error
      })
    }
  }

  export const remove = async(req, res)=>{
     try {
       const product = await Product.findByIdAndDelete(req.params.id)
       if(!product){
        return res.status(500).json({
          message : "Xóa thất bại"
        })
       }
       return res.status(200).json({
        message : 'Xóa thành công'
       })
     } catch (error) {
      return res.status(500).json({
        message : error
      })
     }
  }