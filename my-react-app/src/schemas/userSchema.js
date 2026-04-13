import * as Yup from 'yup';

const userSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Мінімум 2 символи')
    .required("Обов'язкове поле"),
  username: Yup.string()
    .required("Обов'язкове поле"),
  email: Yup.string()
    .email('Некоректний email')
    .required("Обов'язкове поле"),
  phone: Yup.string()
    .required("Обов'язкове поле"),
  website: Yup.string()
    .required("Обов'язкове поле"),
  city: Yup.string()
    .required("Обов'язкове поле"),
  street: Yup.string()
    .required("Обов'язкове поле"),
  companyName: Yup.string()
    .required("Обов'язкове поле"),
});

export default userSchema;
