import User from "../models/User.js"
import { userValidation } from "../validation/user.js"
import bcryptjs from "bcryptjs"

export const dangKy = async (req, res)=>{
      try {
        const { error } = userValidation.validate(req.body,{ abortEarly: false})
        if(error){
            const errors = error.details.map(err => err.message)
            return res.status(500).json({
                message : errors
           })
        }
        // kiểm tra xem email tồn tại không
        const userExists = User.findOne({email : req.params.email})
        if(!userExists){
            return res.status(400).json({
                message : "Email này đã đăng ký"
            })
        }

        // mã hóa mật khẩu
        const hashePassword = await bcryptjs.hash(req.body.password,10)

        // khởi tạo user trong db
        const user = await User.create({
            ...req.body,
            password : hashePassword
        })

        //Thông báo cho người dùng
        // xóa mật khẩu
        user.password = undefined
        return res.status(200).json({
            message : "Đăng ký thành công"
        })

      } catch (error) {
        return res.status(500).json({
            name: error.name,
            message : error.message
        })
      }
}