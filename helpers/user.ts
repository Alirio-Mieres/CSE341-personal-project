import { check } from 'express-validator';
import { emailExists, userExistById } from '../middelware/db-validators';
import { validaFields } from './validator';

const createUserValidation = [
  check('firstName', 'Firstname is required')
    .not()
    .isEmpty()
    .isString()
    .withMessage('Firstname must be a string'),
  check('lastName', 'Lastname is required')
    .not()
    .isEmpty()
    .isString()
    .withMessage('Lastname must be a string'),
  check('email', 'Email is required').isEmail(),
  check('birthday', 'Birthday is required')
    .not()
    .isEmpty()
    .isString()
    .withMessage('Birthday must be a string'),
  check('phone', 'Phone is required')
    .not()
    .isEmpty()
    .isString()
    .withMessage('Phone must be a string'),
  check('address', 'Address is required')
    .not()
    .isEmpty()
    .isString()
    .withMessage('Address must be a string'),
  check('email').custom(emailExists),
  validaFields
];

const updateUserValidation = [
  check('id', 'Is not a mongodb id').isMongoId(),
  check('id').custom(userExistById),
  check('firstName', 'Firstname must be a string').optional().isString(),
  check('lastName', 'Lastname must be a string').optional().isString(),
  check('phone', 'Phone must be a string').optional().isString(),
  check('address', 'Address must be a string').optional().isString(),
  check('birthday', 'Birthday must be a string').optional().isString(),
  validaFields
];

const deleteUserValidation = [
  check('id', 'Is not a mongodb id').isMongoId(),
  check('id').custom(userExistById),
  validaFields
];

const findOneValidation = [check('id', 'Is not a mongodb id').isMongoId(), validaFields];

export { createUserValidation, updateUserValidation, deleteUserValidation, findOneValidation };
