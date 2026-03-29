import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Мін. 3 символи')
        .required('Обов’язково'),
    description: Yup.string()
        .min(10, 'Мін. 10 символів')
        .required('Обов’язково'),
    price: Yup.number()
        .typeError('Число')
        .positive(' > 0')
        .required('Обов’язково'),
    discountPrice: Yup.number()
        .typeError('Число')
        .nullable()
        .test('is-less', 'Ціна зі знижкою має бути меншою за основну', function(value) {
            const { price } = this.parent;
            return !value || value < price;
        }),
    category: Yup.string().required('Обов’язково'),
    brand: Yup.string().required('Обов’язково'),
    sku: Yup.string().required('Обов’язково'),
    quantity: Yup.number()
        .typeError('Число')
        .min(0, 'Мін. 0')
        .required('Обов’язково'),
    mainImage: Yup.string()
        .url('Невалідний URL')
        .required('Обов’язково'),
});

export default validationSchema;