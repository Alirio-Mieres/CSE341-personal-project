import { check } from 'express-validator';
import { validateFields } from './validator';

const validateLogin = [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').not().isEmpty(),
    validateFields
]

export {
    validateLogin
}