import React,{useState} from "react";
const Child=(props)=>{
    return(<div><h2>Child:{props.brandName} </h2>
    <GrandChild brandName={props.brandName}/></div>)
}
const GrandChild=(props)=>{
    return(<div><h2>Grand Child:{props.brandName} </h2></div>)
}
const App=()=>{
    const [brand] =useState("Amazon")
    return(<div><h1>Hello</h1>
    <Child brandName={brand}/>
    </div>)

}
export default App;