const formIds = {
  CUSTOMER_FORM: 'customer-info',
  PRODUCT_FORM: 'product-info',
};

function getFormShape(id) {
  const form = document.querySelector(`#${id}`);
  const inputs = [...form.children];
  const inputNames = inputs.map((input) => input.name.split('.'));
  console.log(inputNames);

  const formObj = {};

  console.log(formObj);
  return form;
}

console.log(getFormShape(formIds.CUSTOMER_FORM));

/*

customer: {
  name: '',
  address: {
    city: '',
    zip: '',
  };
}

product: {
  name: '',
  type: '',
  quantity: '',
};

*/
