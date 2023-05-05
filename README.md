# README

TCGamer is a clone of TCGPlayer, a market place to purchase, sell, and evaluate cards from many different card games. TCGPlayer sells sealed product as well as individual cards for each TCG as well as collectibles and comics as well. 

TCGamer is a storefront for Magic: the Gathering, Pokemon, and YuGiOh. Users can filter, search, and purchase cards on the site.


Technologies used to achieve this were React/Redux Libraries for Components on the frontend, Ruby-on-Rails is my backend database, NPM runs my code, AmazonS3 stores image data from my database, and Render hosts the website in its entirety.

2 Features I am particularly proud of are the Search and the display of the Cards themselves:

The Search feature took a lot of work. First I made a search with the cards themselves, taking in all of the cards and then searching through there. I made a solution that allows you to still search regardless of the filter that you put onto the cards list. So if you were to filter the cards to just show you the Magic: the Gathering cards, you could then type into the search bar and would then show you only Magic: the Gathering cards that match text in the search bar itself. It's code that I am proud of and will be linked at the bottom as well.

While the cards can not be considered a feature it is the part of the site that took the most amount of work as they are essentially the main feature. For me I liked going around and finding appropriate seed data that: varied the rarities of cards displayed, varied the sets of cards that were printed or showed off recent cards, and put in cards that are considered staples when playing their designated games. I also had to employ a lot of technologies for them as well. The cards use every technology that I used to make this project work. I am proud of how they are displayed on the website, the cards I chose to initially seed the website, and the code that I wrote around them as well.


This is the search feature I use that I am particularly proud of, because the search is in the state, I can dynamically filter down the cards index and search for cards without needing to hit the 'enter' key and re-render the page, just type in letters into the serach bar itself.
```js
function filterCards(cards, isOnlyPokemon) {
        return cards.filter(card => {
            let startsWithSearchBarText = false;
            if (!props.searchBarText) {
                startsWithSearchBarText = true;
            } else {
                startsWithSearchBarText = card.name.startsWith(props.searchBarText);
            }

            let isPokemonCard = card.game === "Pokemon";
            if (isOnlyPokemon) {
                return startsWithSearchBarText && isPokemonCard;
            } else {
                return startsWithSearchBarText;
            }
        });
    }
  ```
