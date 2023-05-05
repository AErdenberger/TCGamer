# README

## About the site
TCGamer is a clone of TCGPlayer, a market place to purchase, sell, and evaluate cards from many different card games. TCGPlayer sells sealed product as well as individual cards for each TCG as well as collectibles and comics as well. 

TCGamer is a storefront for Magic: the Gathering, Pokemon, and YuGiOh. Users can filter, search, and purchase cards on the site.

## Technologies Used
Technologies used to achieve this were React/Redux Libraries for Components on the frontend, Ruby-on-Rails is my backend database, NPM runs my code, AmazonS3 stores image data from my database, and Render hosts the website in its entirety.

## Featured Features
I am particularly proud of the Search and the display of the Cards themselves:

The Search feature took a lot of work. First I made a search with the cards themselves, taking in all of the cards and then searching through there. I made a solution that allows you to still search regardless of the filter that you put onto the cards list. So if you were to filter the cards to just show you the Magic: the Gathering cards, you could then type into the search bar and would then show you only Magic: the Gathering cards that match text in the search bar itself. It's code that I am proud of and will be linked at the bottom as well.

While the cards can not be considered a feature it is the part of the site that took the most amount of work as they are essentially the main feature. For me I liked going around and finding appropriate seed data that: varied the rarities of cards displayed, varied the sets of cards that were printed or showed off recent cards, and put in cards that are considered staples when playing their designated games. I also had to employ a lot of technologies for them as well. The cards use every technology that I used to make this project work. I am proud of how they are displayed on the website, the cards I chose to initially seed the website, and the code that I wrote around them as well.


## Featured Code Snippets

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

This is more code that I am proud of; this is the NavBar at the top of the page. It is one of the most dynamic components sd it that changes what is displayed based on log-in status or based on where you are on the site. I thought it was interesting to think about how you can essentially make "sub components" that changed based on state and location. 

```js
let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                {pathname.includes("login") ? null : <NavLink to="/login" className="auth">Log In</NavLink>}
                {pathname.includes("Signup") ? null : <NavLink to="/Signup" className="auth">Sign Up</NavLink>}  
            </>
        );
    }

    let cartTotal = 0;
    cartItems.forEach(item => {
        if (item) {
            cartTotal += item.quantity;
        }
    })

    let cartButton;
    if (sessionUser) {
        cartButton = (
            <div>
                <NavLink exact to="/cart">
                        <i className="fa-solid fa-cart-shopping fa-2xl"></i>
                </NavLink>
                <div className="cartTotal">{cartTotal}</div>
            </div>
        )
    }

    useEffect(() => {
        dispatch(fetchCartItems())
    }, [])

    return (
        <div className="headerBar">
            <ul id="NavBar">
                <li>
                    <NavLink exact to="/">
                        <img src="/TCGGamerLogo.png" alt="" className="siteLogo" width="150" height="150" />
                    </NavLink>
                </li>
                <li>
                    <SearchBar />
                </li>
                <li>
                    {cartButton}
                </li>
                <li id="sessionLinks">
                    {sessionLinks}
                </li>
            </ul>
        </div>
    );
}
```

Overall I think this site is a good demonstration of my skills and myself as TCGPlayer is a site that I use often when purchasing trading cards for MAgic: the Gathering and YuGiOh. 
