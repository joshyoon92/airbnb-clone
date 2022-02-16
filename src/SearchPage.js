import { Button } from '@material-ui/core';
import React from 'react'
import './SearchPage.css';
import SearchResult from './SearchResult';

function SearchPage() {

    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays  .  26 August to 30 August  .  2 Guest</p>
                <h1>Stays Nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of Place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and Beds</Button>
                <Button variant="outlined">More Filters</Button>
            </div>

            <SearchResult 
                img="https://a0.muscache.com/im/pictures/c0174145-7762-49f0-a0a3-9a4c0656a42c.jpg?im_w=960"
                location="Entire room in the City of Chicago"
                title="Stay at this spacious Edwardian House"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine"   
                star={4.65}
                price="$35/night"
                total="$145/night"
            />

            <SearchResult 
                img="https://a0.muscache.com/im/pictures/a9e8bd84-35bc-4b33-a90a-74ed2726e4ff.jpg?im_w=960"
                location="Private room in center of Loop"
                title="Independent luxury studio apartment"
                description="2 guest · 0 bedroom · 1 bed · 1 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine"   
                star={4.3}
                price="$45/night"
                total="$165/night"
            />

            <SearchResult 
                img="https://a0.muscache.com/im/pictures/00fded5b-5c59-4f49-b6de-c8b990024e6c.jpg?im_w=960"
                location="Entire Flat in West Loop"
                title="Independent historic 4 bed apartment"
                description="4 guest · 4 bedroom · 5 bed · 2 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine"   
                star={4.73}
                price="$75/night"
                total="$275/night"
            />

            <SearchResult 
                img="https://a0.muscache.com/im/pictures/2dd8e960-3377-4b52-848b-5608e99700d8.jpg?im_w=960"
                location="Entire Floor in Old Town"
                title="2 Bedroom Apartment"
                description="3 guest · 2 bedroom · 3 bed · 2 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine"   
                star={3.75}
                price="$95/night"
                total="$365/night"
            />   

            <SearchResult 
                img="https://a0.muscache.com/im/pictures/e25a2975-6d21-4dd0-854e-c97ee3e317f2.jpg?im_w=960"
                location="Luxurious 1 bedroom in River North"
                title="1 Bedroom Apartment"
                description="3 guest · 1 bedroom · 2 bed · 1 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine"   
                star={4.75}
                price="$105/night"
                total="$315/night"
            /> 

            <SearchResult 
                img="https://a0.muscache.com/im/pictures/a86aee14-efda-4603-95af-0d9a0833e04f.jpg?im_w=960"
                location="Entire Unit in Pilsen"
                title="3 Bedroom Apartment"
                description="4 guest · 3 bedroom · 4 bed · 2 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine"   
                star={3.25}
                price="$65/night"
                total="$365/night"
            /> 

        </div>
    )
}

export default SearchPage
