import React,{useState,useEffect} from "react";

const Loader = (Component) => {
    return (props) => {
        const [loading,setLoading] = useState(true);
        const {products}=props
        useEffect(()=>{
            if(products!==undefined){
            setLoading(false)
            }
        },[products])
       
        return(
            <div>
                {loading?<p>Loading....</p> : <Component {...props}/>}
            </div>
        )
    }
}

export default Loader;