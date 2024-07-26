export let products = JSON.parse(localStorage.getItem('products'));


if (!products) {
  products = [{
    accountId: 'account0',
    quantity: 1
  },{
    accountId: 'account00',
    quantity: 1
  }];
}

function saveToStorage() {
  localStorage.setItem('products', JSON.stringify(products));
}


export function seeAccountDetails(accountId) {
  let similarItem;

    products.forEach((productsItem) => {
      if (accountId === productsItem.accountId) {
        similarItem = productsItem;
      }
    });

    if (similarItem) {
      similarItem.quantity += 1;
    } else {
      products.push({
        accountId: accountId,
        quantity: 1
      });
    }
    saveToStorage();
}

export function closeAccountDetails(accountId) {
 const newProducts = [];

 products.forEach((productsItem) => {
    if (productsItem.accountId !== accountId) {
      newProducts.push(productsItem);
    }
 });

 products = newProducts;

 saveToStorage();
}