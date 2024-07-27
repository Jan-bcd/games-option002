export let products = [{
    accountId: 'account1',
    quantity: 1
  }];

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
  }

  export function closeAccountDetails (accountId) {
    const newProducts = [];

    products.forEach((productsItem) => {
      if (productsItem.accountId !== accountId) {
        newProducts.push(productsItem);
      }
    });

    products = newProducts;
  }