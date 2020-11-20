const minLength = (min) => (value) => (
  value && value.length < min
    ? `Must be at least ${min}`
    : undefined
);

export const minLength5 = minLength(5);
export const minLength8 = minLength(8);
export const required = (value) => (value ? undefined : 'Required');
