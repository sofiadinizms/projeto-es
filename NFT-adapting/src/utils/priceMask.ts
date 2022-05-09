/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/prefer-default-export
export const priceMask = (value: string): string => {
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{4})(\d{2})/g, '$1,$2');
  return String(value);
};
