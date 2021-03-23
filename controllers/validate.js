/* definimos nossa senha para ter um mínimo de 6 caracteres.
   se formos mandar uma senha com menos de 6 caracteres, quando isso for gravado
   no banco de dados, ela vai de forma criptografada, e isso tem
   + de 6 caracteres, então aqui resolveremos esse problema.
*/

const Joi = require('@hapi/joi')

const registerValidate = data => {

    const schema = Joi.object({
        name: Joi.string().required().min(3).max(50),
        email: Joi.string().required().min(3).max(100),
        password: Joi.string().required().min(6).max(200),
    })

    return schema.validate(data)
}

const loginValidate = data => {

    const schema = Joi.object({
        email: Joi.string().required().min(3).max(100),
        password: Joi.string().required().min(6).max(200),
    })

    return schema.validate(data)
}

module.exports.registerValidate = registerValidate
module.exports.loginValidate = loginValidate

