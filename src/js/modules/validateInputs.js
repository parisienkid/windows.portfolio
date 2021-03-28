const validateInputs = (inputs) => {
    inputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });
};

export default validateInputs;