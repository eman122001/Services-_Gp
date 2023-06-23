import { useEffect, useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import { deleteServ , increment , decrement } from "../../Add-serv";

function ServiceAdedd(props) {
    let myState = useSelector(state => state);
    let dispatch = useDispatch()
    let service = props;
    let [min_price , setMin_price] = useState(service.min_price);
    let [max_price , setMax_price] = useState(service.max_price);
    useEffect(()=>{

        if(service.quantity < 1) {

            dispatch(deleteServ(service));

        }

    }, [service.quantity]);

    return (
        <>
            <div className="serv-added">
                <div className="serv-info">
                    <h2 className="serv-name">{service.name}</h2>
                    <h3 className="serv-price">{min_price} - {max_price} EGP</h3>
                </div>

                <div className="increase-decrease">

                    <button className="decrease-btn" onClick={()=>{
                        if(service.quantity > 0) {
                            setMin_price(min_price = min_price-service.min_price);
                            setMax_price(max_price = max_price - service.max_price);
                            dispatch(decrement(service))
                        }
                    }}><i className="fa-solid fa-minus"></i></button>

                    <p className="price-value">{service.quantity}</p>

                    <button className="increase-btn" onClick={()=>{
                        
                        setMin_price(min_price = min_price+service.min_price);
                        setMax_price(max_price = max_price + service.max_price);

                        dispatch(increment(service))
                    }}><i className="fa-solid fa-plus"></i></button>
                </div>
            </div>
        </> 
    )
}

export default ServiceAdedd;