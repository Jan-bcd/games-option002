import {accounts} from '../data/accounts.js';
import {product, saveToStorage} from '../data/products.js';

let accountsHTML = '';

accounts.forEach((account) => {
  accountsHTML += `
    <div class="pro js-pro">
      <div class="img-con"><img src="${account.image1}" alt=""></div>
      <div class="des">
        <div class="account-info">
          <span class="stat-1">CLASS:</span>
          <span class="stat-2">${account.class}</span>
        </div>
        <div class="account-info">
          <span class="stat-1">Server Name:</span>
          <span class="stat-2">${account.serverName}</span>
        </div>
        <div class="account-info">
          <span class="stat-1">IGN:</span>
          <span class="stat-2">${account.ign}</span>
        </div>
        <div class="account-info">
          <span class="stat-1">Current Level:</span>
          <span class="stat-2">${account.level}</span>
        </div>
        <div class="account-info">
          <span class="stat-1">Selling Price:</span>
          <span class="stat-2">USD - ${account.price}</span>
        </div>
        <button class="details js-see-account-details" data-account-id="${account.id}" onclick="window.location.href='./sproductncdet.html';">See Details</button>
      </div>
    </div>
  `;
});

document.querySelector('.js-pro-account-container').innerHTML = accountsHTML;

document.querySelectorAll('.js-see-account-details').forEach((button) => {
  button.addEventListener('click', () => {
    const accountId = button.dataset.accountId;
    product.push({
      accountId: accountId
    });
    saveToStorage();
  });
});