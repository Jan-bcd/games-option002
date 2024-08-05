  export let picks = JSON.parse(localStorage.getItem('picks'));
  
  if (!picks) {
    picks = [{
      featureTag: 'featured0', 
    },{
      featureTag: 'featured00',
    }];
  }

  export function saveToStorage() {
    localStorage.setItem('picks', JSON.stringify(picks));
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
