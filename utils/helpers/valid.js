const { check } = require('express-validator');

exports.registerValidator = [
  check('name', 'Имя обязательное поле').notEmpty().isLength({ min: 3, max: 32 }).withMessage('Имя должно содержать от 3 до 32 символов'),
  check('email').notEmpty().withMessage('Поле email обязательное').isEmail().withMessage('Введите корректный email'),
  check('password', 'Поле пароль обязательное').notEmpty().isLength({ min: 6 }).withMessage('Пароль должен содержать минимум 6 символов').matches(/\d/).withMessage('Пароль должен содержать цифру')
]

exports.loginValidator = [
  check('email').notEmpty().withMessage('Поле email обязательное').isEmail().withMessage('Введите корректный email'),
  check('password', 'Поле пароль обязательное').notEmpty().isLength({ min: 6 }).withMessage('Пароль должен содержать минимум 6 символов').matches(/\d/).withMessage('Пароль должен содержать цифру')
]

exports.forgotPasswordValidator = [ check('email').notEmpty().isEmail().withMessage('Неккоректный email')]

exports.resetPasswordValidator = [check('newPassword').notEmpty().isLength({ min: 6 }).withMessage('Пароль должен содержать минимум 6 символов').matches(/\d/).withMessage('Пароль должен содержать цифру')]
