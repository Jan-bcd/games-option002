import {products} from '../data/products.js';
import {accounts} from '../data/accounts.js';

let productsSummaryHTML = '';

products.forEach((productsItem) => {
  const accountId = productsItem.accountId;

  let matchingAccount;

  accounts.forEach((account) => {
    if (account.id === accountId) {
      matchingAccount = account; 
    }
  });
  
  productsSummaryHTML +=
  
  `
  <div class="container js-account-container">
    <div class="slider-feat">
      <div class="slides">
        <div class="slide"><img src="${matchingAccount.image1}" alt="Slide 1"></div>
        <div class="slide"><img src="${matchingAccount.image2}" alt="Slide 2"></div>
        <div class="slide"><img src="${matchingAccount.image3}" alt="Slide 3"></div>
        <div class="slide"><img src="${matchingAccount.image4}" alt="Slide 4"></div>
        <div class="slide"><img src="${matchingAccount.image5}" alt="Slide 5"></div>
        <div class="slide"><img src="${matchingAccount.image6}" alt="Slide 6"></div>
        <div class="slide"><img src="${matchingAccount.image7}" alt="Slide 7"></div>
        <div class="slide"><img src="${matchingAccount.image8}" alt="Slide 8"></div>
        <div class="slide"><img src="${matchingAccount.image9}" alt="Slide 9"></div>
        <div class="slide"><img src="${matchingAccount.image10}" alt="Slide 10"></div>
        <div class="slide"><img src="${matchingAccount.image11}" alt="Slide 11"></div>
        <div class="slide"><img src="${matchingAccount.image12}" alt="Slide 12"></div>
        <div class="slide"><img src="${matchingAccount.image13}" alt="Slide 13"></div>
        <div class="slide"><img src="${matchingAccount.image14}" alt="Slide 14"></div>
        <div class="slide"><img src="${matchingAccount.image15}" alt="Slide 15"></div>
        <div class="slide"><img src="${matchingAccount.image16}" alt="Slide 16"></div>
        <div class="slide"><img src="${matchingAccount.image17}" alt="Slide 17"></div>
        <div class="slide"><img src="${matchingAccount.image18}" alt="Slide 18"></div>
        <div class="slide"><img src="${matchingAccount.image19}" alt="Slide 19"></div>
        <div class="slide"><img src="${matchingAccount.image20}" alt="Slide 20"></div>
        <div class="slide"><img src="${matchingAccount.image21}" alt="Slide 21"></div>
        <div class="slide"><img src="${matchingAccount.image22}" alt="Slide 22"></div>
      </div>
      <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
      <a class="next" onclick="plusSlides(1)">&#10095;</a>
    </div>
    <div class="single-pro-details" onclick="window.location.href=#">
      <div  class="account-info">
        <span class="stat-1">CLASS:</span>
        <span class="stat-2">${matchingAccount.class}</span>
      </div>
      <div  class="account-info">
        <span class="stat-1">IGN:</span>
        <span class="stat-2">${matchingAccount.ign}</span>
      </div>
      <div  class="account-info">
        <span class="stat-1">Current Level:</span>
        <span class="stat-2">${matchingAccount.level}</span>
      </div>
      <div  class="account-info">
        <span class="stat-1">Selling Price:</span>
        <span class="stat-2">${matchingAccount.price}</span>
      </div>
      <div  class="account-info">
        <span class="stat-1">Account type:</span>
        <span class="stat-2">${matchingAccount.type}</span>
      </div>
      <div  class="account-info">
        <span class="stat-1">Wallet used:</span>
        <span class="stat-2">${matchingAccount.wallet}</span>
      </div>
      <div  class="account-info">
        <span class="stat-1">Contact Details:</span>
        <span class="stat-2">${matchingAccount.contact}</span>
      </div>
      <div  class="account-info">
        <span class="stat-1">Account Highlight:</span>
        <span class="stat-2">${matchingAccount.hightlight}</span>
      </div>
    </div>
    <a class="close-info js-close-link" href="#" data-account-id="${matchingAccount.id}">close</a>
  </div>
  `;
});

document.querySelector ('.js-accounts-prodetails').innerHTML = productsSummaryHTML;

document.querySelectorAll('.js-close-link').forEach((link) => {
  link.addEventListener('click', () => {
    const accountId = link.dataset.accountId;
    console.log(accountId);
  });
});