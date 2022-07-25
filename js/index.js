// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerHTML
  let quantity = product.querySelector('.quantity input').value
  let mult = price * quantity
  let subtotal = product.querySelector('.subtotal span')
  subtotal.innerHTML = mult
}

function calculateAll() {
  // ITERATION 1
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  document.querySelectorAll('tr.product').forEach(product => {
    updateSubtotal(product)
  });

  // ITERATION 3
  //... your code goes here
  let total = 0
  document.querySelectorAll('tr.product .subtotal span').forEach(subtotal => {
    let totalProduct = parseInt(subtotal.innerHTML)
    total += totalProduct
  });
  let totalPrice = document.querySelector('#total-value span')
  console.log(totalPrice)
  totalPrice.innerHTML = total

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
