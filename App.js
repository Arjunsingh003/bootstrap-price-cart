
import React, { useState } from 'react';
import './App.css';

const headingData=[{
  title:"Free",
  price:"$0",
  per:"/month",
  option1:"5 Users",
  option2:"50GB Storage",
  option3:"Unlimited Public Projects",
  option4:"Community Access",
  option5:false,
  option6:false,
  option7:false,
  option8:false,
  
  checkMark:"https://th.bing.com/th?id=OIP.FOvjyY-vs0XWnM9u5rv1TAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
crossMark:"https://th.bing.com/th?id=OIP.3Xu8LjmNm_vyH2fsUE6WawAAAA&w=181&h=181&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
imagetitle:"image",

},
{
  title:"PLUS",
  price:"$9",
  per:"/month",
  option1:"Single User",
  option2:"5GB Storage",
  option3:"Unlimited Public Projects",
  option4:"Community Access",
  option5:true,
  option6:true,
  option7:true,
  option8:false,
  
  checkMark:"https://th.bing.com/th?id=OIP.FOvjyY-vs0XWnM9u5rv1TAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
crossMark:"https://th.bing.com/th?id=OIP.3Xu8LjmNm_vyH2fsUE6WawAAAA&w=181&h=181&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
imagetitle:"image",

},
{
  title:"PRO",
  price:"$49",
  per:"/month",
  option1:"Unlimited Users",
  option2:"150GB Storage",
  option3:"Unlimited Public Projects",
  option4:"Community Access",
  option5:true,
  option6:true,
  option7:true,
  option8:true,
  
  checkMark:"https://th.bing.com/th?id=OIP.FOvjyY-vs0XWnM9u5rv1TAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
  crossMark:"https://th.bing.com/th?id=OIP.3Xu8LjmNm_vyH2fsUE6WawAAAA&w=181&h=181&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
  imagetitle:"image",

},
];

function App() {
const data= headingData;


  return (
    <div className="App">
   <div className="sam001">
   {data.map((bk, index) => (<Content key={index} title={bk.title} price={bk.price} per={bk.per}
     option1={bk.option1} option2={bk.option2} option3={bk.option3} option4={bk.option4}
    option5={bk.option5} option6={bk.option6} option7={bk.option7} option8={bk.option8} 
    checkMark={bk.checkMark} crossMark={bk.crossMark}
    />))};

   </div>
   </div>
    
 );
}
export default App;

function Content({title,per,price,option1,option2,option3,
  option4,option5,option6,option7,option8, checkMark, crossMark, alte,sample
}){
   return(
    <div className="pricing-table-snippet">
    <div className="header-price-type">
     <h3 className="type-of-subscription">{title}</h3>
     <h3 className="price-per-month">{price}<span><sub id="permonth">{per}</sub></span></h3>
     <hr className="horizontal-bar-head"/>
        <div className="center-content">
        <p><img className="image-check" src={checkMark} alt={alte}/>{option1}</p>
     <p><img className="image-check" src={checkMark} alt={alte}/>{option2}</p>
     <p><img className="image-check" src={checkMark} alt={alte}/>{option3}</p>
     <p><img className="image-check"  src={checkMark} alt={alte}/>{option4}</p>
   
    
 
    <span>{option5===false?
    <img className="image-check"  src={crossMark} alt={alte}/>: 
    <img className="image-check"  src={checkMark} alt={alte}/>}
    Unlimited Private Projects</span>

    <p>{option6===false?
    <img className="image-check"  src={crossMark} alt={alte}/>: 
    <img className="image-check"  src={checkMark} alt={alte}/>}
    Dedicated Phone Support</p>

    <p>{option7===false?
    <img className="image-check"  src={crossMark} alt={alte}/> : 
    <img className="image-check"  src={checkMark} alt={alte}/>}
    {title==="PRO"?"Unlimited":"Free"} Subdomain</p>



    <p>{option8===false?
    <img className="image-check"  src={crossMark} alt={alte}/>: 
    <img className="image-check"  src={checkMark} alt={alte}/>}
    Monthly Status Report</p>
   
    
     <button class="end-button">Button</button>
        </div>
    


    </div>

  










    
    
   

    </div>
  );
}
