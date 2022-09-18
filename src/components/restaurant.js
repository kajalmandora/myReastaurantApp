import React from "react";
import {useState,useEffect} from 'react';
export default function Restaurant(props){
    
const[ menuData, setMenuData]= useState({foodData:null,drinksData:null});

    async function getData(){
        let url ='http://localhost:3200/data';
        let response = await fetch(url);
        let responseData= await response.json();
        setMenuData({flag : true, foodData: responseData[0], drinksData: responseData[1]})
        console.log(responseData);
    }

    useEffect(()=>{
        getData();
    },[]);
    return(
        <div>
            <h1>Menu</h1>
            {menuData.flag === true?
                <div>
                    <div className='food-items'>
                        {
                            menuData.foodData.map( item => {
                               return <h2>{item.foodName}:{item.price}</h2>
                            })
                        }
                    </div>
                    <div className='drinks-items'>
                         {
                            menuData.drinksData.map( item => {
                               return <h2>{item.drinkName}:{item.price}</h2>
                            })
                        }
                    </div>
                </div>
            :<h2>Loading...</h2>}
        </div>
    );
}