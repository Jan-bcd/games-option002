  export let picks = JSON.parse(localStorage.getItem('picks'));
  
  if (!picks) {
    picks = [{
      featureTag: 'featured0',
      quantity: 1 
    },{
      featureTag: 'featured00',
      quantity: 1
    }];
  }

  

  function saveToStorage() {
    localStorage.setItem('picks', JSON.stringify(picks));
  }

  export function seeFeaturedDetails(featureTag) {
    let matchingItem;
  
      picks.forEach((picksItem) => {
        if (featureTag === picksItem.featureTag) {
          matchingItem = picksItem;
        }
      });
  
      if (matchingItem) {
        matchingItem.quantity += 1;
      } else {
        picks.push({
          featureTag: featureTag,
          quantity: 1
        });
      }
      saveToStorage();
  }

  export function closeFeaturedDetails (featureTag) {
    const newPicks = [];

    picks.forEach((picksItem) => {
      if(picksItem.featureTag !== featureTag) {
        newPicks.push(picksItem);
      }
    });

    picks = newPicks;

    saveToStorage();
  }