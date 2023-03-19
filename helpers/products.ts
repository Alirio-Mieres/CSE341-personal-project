import { check } from 'express-validator';
import { validateFields } from './validator';
import { validateJWT } from '../middelware/validate-jwt';
import { hasRole, isAdminRole } from '../middelware/validate-roles';

export const createProductValidation = [
  validateJWT,
  check('name', 'The name is required').not().isEmpty(),
  check('price', 'The price is required').not().isEmpty().isNumeric(),
  check('description', 'The description is required').not().isEmpty().isString(),
  check('avaible', 'The avaible is required').not().isEmpty().isBoolean(),
  validateFields
];

export const findOneProductValidation = [
  validateJWT,
  check('id', 'Is not a mongo Id').isMongoId(),
  validateFields
];

export const updateProductValidation = [
  validateJWT,
  check('name', 'The name is required').optional().isString(),
  check('price', 'The price is required').optional().isNumeric(),
  check('description', 'The description is required').optional().isString(),
  check('avaible', 'The avaible is required').optional().isBoolean(),
  validateFields
];

export const deleteProductValidation = [
  validateJWT,
  isAdminRole,
  check('id', 'Is not a mongo Id').isMongoId(),
  validateFields
];
