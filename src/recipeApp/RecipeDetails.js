import React, { useState } from 'react'
import './Style.css'

function RecipeDetails(props) {

    const [items, setitems] = useState([])

    const [recipeList, setrecipeList] = useState([
        {
            Id:1,
            recipeName:'Chiken Dum Biriyani',
            recipeDetails:`The Hyderabad Dum biryani tends to be a mutton biryani that comes from the Hyderabad region in southern India. This is thought that this is a 'true' biryani which layers raw meat (kuchcha) marinated with yoghurt and spices and then layered with partially cooked rice which has been fragranced with a bouquet garnet of Indian spices. This biryani doesn't tend to have any tomatoes. Once layered the meat and rice are cooked together in 'dhum' with mint and coriander leaves and ghee. The dhum technique of cooking uses a traditional cooking vessel that is bell-shaped which is sealed closed with a roti dough. The dish is cooked slowly on burned out coal embers and another hot coal is put on top of the vessel. As the biryani cooks the dough seal starts to dry out which then begins to release steam indicating to the cook that the dish is cooked. Dhum comes from the test used to show whether it is ready. The chef taps the vessel on the side and if it makes a ‘dhum’ sound the biryani is ready to be served.`,
            img:"https://c.ndtvimg.com/2019-06/klu23v08_biryani_625x300_06_June_19.jpg"

        },
        {
            Id:2,
            recipeName:'Chiken Sukka',
            recipeDetails:`1. Roast both chilies in a pan and keep aside.
            2.In the same pan roast, coriander, cumin, mustard, pepper, cloves, cinnamon, onion, ginger & garlic. Grind all the masala items together (fried stuff, salt, tamarind & turmeric) with little water to make a smooth coconut paste.
            3. Now heat oil in a vessel and fry onions till golden brown.
            4. Add chicken, salt and elachi to cook for 10 minutes.
            5. Add ground masala and bring one boil. Add scrapped coconut and boil again.
            6.Taste and check if you need to add more salt.
            7.Serve hot. You may temper the dish with some amount of ghee.`,
            img:"https://c.ndtvimg.com/2020-10/c0ljoepo_chicken-sukka_625x300_05_October_20.jpg"

        },
        {
            Id:3,
            recipeName:'Kalmi Kabab',
            recipeDetails:`A popular non-vegetarian appetizer from the Mughlai cuisine, Kalmi Kebab uses the leg piece or the chicken drumstick.

            Coated in rich and flavoursome marinade, the spices give it a depth of flavour, while the yogurt keeps them succulent and juicy. The kalmi kababs get a distinctive nutty aroma from the addition of cashews. The flavours are rather mild yet the kebabs taste delicious.
            
            Serve Kalmi Kebab as a party starter along with Pickled Onions and Dahi Pudina Chutney. You can also make it as a side dish with your simple meal of Lahsuni Dal and Steamed Rice.`,
            img:"https://c.ndtvimg.com/2020-08/os82jk14_kebab_625x300_13_August_20.jpg"

        }
    ])

    let sendData=(index)=>{
        console.log('datacp',recipeList); 
        let recipeDataList=recipeList[index]  
        props.getRecipeData(recipeDataList)
    }

    
    return (
        <div class="row">
  <div class="col-sm-6">
            <h4>Item's List</h4>
            {
                recipeList.map((list,index)=>{
                    console.log(list);
                   return <div key={index}> 
                      
                       <div class="card">
                           <div>{list.Id} </div>
 
  <div className="card-body">
    <h5 className="card-title">{list.recipeName}</h5>
    <img className="card-img-top" src={list.img} alt="Card image cap"/> 
    <button className='btn btn-primary' onClick={()=>sendData(index)}>View</button>
  </div>
  
  
</div>
                   </div>  
                })
            }
        </div>
        </div>
    )
}

export default RecipeDetails
