import {featured} from '../data/featured.js';
import {picks, seeFeaturedDetails} from '../data/picks.js';

let featuredHTML = '';

featured.forEach((feature) => {
  featuredHTML += `
    <div class="pro js-pro">
      <div class="img-con"><img src="${feature.image1}" alt=""></div>
      <div class="des">
        <div class="account-info">
          <span class="info-1">CLASS:</span>
          <span class="info-2">${feature.class}</span>
        </div>
        <div class="account-info">
          <span class="info-1">Server Name:</span>
          <span class="info-2">${feature.serverName}</span>
        </div>
        <div class="account-info">
          <span class="info-1">IGN:</span>
          <span class="info-2">${feature.ign}</span>
        </div>
        <div class="account-info">
          <span class="info-1">Current Level:</span>
          <span class="info-2">${feature.level}</span>
        </div>
        <div class="account-info">
          <span class="info-1">Selling Price:</span>
          <span class="info-2">USD - ${feature.price}</span>
        </div>
        <button class="feat-details js-see-details" data-feature-tag="${feature.tag}" onclick="window.location.href='featuredacc.html';">See Details</button>
      </div>
    </div>`;

});

document.querySelector('.js-pro-container').innerHTML = featuredHTML;

document.querySelectorAll('.js-see-details').forEach((button) => {
  button.addEventListener('click', () => {
    const featureTag = button.dataset.featureTag;
    seeFeaturedDetails(featureTag);
  });
});