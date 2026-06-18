const {z} = require("zod")

const Register = z.object({
  email: z.string().min(10),
  password: z.password().min(6).max(20)
});
