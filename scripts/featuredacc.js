import {picks, closeFeaturedDetails } from '../data/picks.js';
import {featured} from '../data/featured.js';

let featuredSummaryHTML = '';

picks.forEach((picksItem) => {
  const featureTag = picksItem.featureTag;

  let matchingFeature;

  featured.forEach((feature) => {
    if (feature.tag === featureTag) {
      matchingFeature = feature;
    }
  });
  
  featuredSummaryHTML +=
`
  <div class="container js-container-featured-${matchingFeature.tag}">
    <div class="slider-feat">
      <div class="slides">
        <div class="slide"><img src="${matchingFeature.image1}" alt="Slide 1"></div>
        <div class="slide"><img src="${matchingFeature.image2}" alt="Slide 2"></div>
        <div class="slide"><img src="${matchingFeature.image3}" alt="Slide 3"></div>
        <div class="slide"><img src="${matchingFeature.image4}" alt="Slide 4"></div>
        <div class="slide"><img src="${matchingFeature.image5}" alt="Slide 5"></div>
        <div class="slide"><img src="${matchingFeature.image6}" alt="Slide 6"></div>
        <div class="slide"><img src="${matchingFeature.image7}" alt="Slide 7"></div>
        <div class="slide"><img src="${matchingFeature.image8}" alt="Slide 8"></div>
        <div class="slide"><img src="${matchingFeature.image9}" alt="Slide 9"></div>
        <div class="slide"><img src="${matchingFeature.image10}" alt="Slide 10"></div>
        <div class="slide"><img src="${matchingFeature.image11}" alt="Slide 11"></div>
        <div class="slide"><img src="${matchingFeature.image12}" alt="Slide 12"></div>
        <div class="slide"><img src="${matchingFeature.image13}" alt="Slide 13"></div>
        <div class="slide"><img src="${matchingFeature.image14}" alt="Slide 14"></div>
        <div class="slide"><img src="${matchingFeature.image15}" alt="Slide 15"></div>
        <div class="slide"><img src="${matchingFeature.image16}" alt="Slide 16"></div>
        <div class="slide"><img src="${matchingFeature.image17}" alt="Slide 17"></div>
        <div class="slide"><img src="${matchingFeature.image18}" alt="Slide 18"></div>
        <div class="slide"><img src="${matchingFeature.image19}" alt="Slide 19"></div>
        <div class="slide"><img src="${matchingFeature.image20}" alt="Slide 20"></div>
        <div class="slide"><img src="${matchingFeature.image21}" alt="Slide 21"></div>
        <div class="slide"><img src="${matchingFeature.image22}" alt="Slide 22"></div>
      </div>
      <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
      <a class="next" onclick="plusSlides(1)">&#10095;</a>
    </div>
    <div class="single-pro-details">
      <div  class="account-info">
        <span class="info-1">CLASS:</span>
        <span class="info-2">${matchingFeature.class}</span>
      </div>
      <div  class="account-info">
        <span class="info-1">Server Name:</span>
        <span class="info-2">${matchingFeature.serverName}</span>
      </div>
      <div  class="account-info">
        <span class="info-1">IGN:</span>
        <span class="info-2">${matchingFeature.ign}</span>
      </div>
      <div  class="account-info">
        <span class="info-1">Current Level:</span>
        <span class="info-2">${matchingFeature.level}</span>
      </div>
      <div  class="account-info">
        <span class="info-1">Selling Price:</span>
        <span class="info-2">USD - ${matchingFeature.price}</span>
      </div>
      <div  class="account-info">
        <span class="info-1">Account type:</span>
        <span class="info-2">${matchingFeature.type}</span>
      </div>
      <div  class="account-info">
        <span class="info-1">Wallet used:</span>
        <span class="info-2">${matchingFeature.wallet}</span>
      </div>
      <div  class="account-info">
        <span class="info-1">Contact Details:</span>
        <span class="info-2">${matchingFeature.contact}</span>
      </div>
      <div  class="account-info">
        <span class="info-1">Account Highlight:</span>
        <span class="info-2">${matchingFeature.hightlight}</span>
      </div>
    </div>
    <a class="close-info js-close-link" href="index.html" data-feature-tag="${matchingFeature.tag}">close</a>
  </div>
`;
});

document.querySelector('.js-prodetails-featured').innerHTML = featuredSummaryHTML;

document.querySelectorAll('.js-close-link').forEach((link) => {
  link.addEventListener('click', () => {
    const featureTag = link.dataset.featureTag;
    closeFeaturedDetails(featureTag);
    
    const box = document.querySelector(`.js-container-featured-${featureTag}`);
    box.remove();
  });
});

