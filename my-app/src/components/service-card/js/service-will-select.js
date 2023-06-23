import "../css/service-will-select.css"
import { useSelector ,  useDispatch } from "react-redux";
import { Add } from "../../Add-serv";
import { useEffect, useRef } from "react";

function Service(props) {
  let myState = useSelector(state => state);
  let service = props;
  let dispatch = useDispatch();
  let buttonRef = useRef(null);

  useEffect(() => {
    function check() {
      let isIdExist = myState.AddService.find(obj => obj.id === service.serv.id);

      if(isIdExist) {
        buttonRef.current.textContent = "selected";
        buttonRef.current.classList.add("selected");
      }else {
        buttonRef.current.textContent = "Add Service";
        buttonRef.current.classList.remove("selected");
      }

    }
    check();
  }, [myState.AddService]);

  return (
    <>
      <div className={`service-card active ${service.cetogry}`}>
        <div className="serv-info-and-price">
          <p className="serv-info">{service.serv_info}</p>
          <h3 className="serv-price">{service.min_price} - {service.max_price} EGP</h3>
        </div>
        <button
          className="select-serv-btn"
          onClick={() => {
            dispatch(Add(service.serv));
          }}
          ref={buttonRef}
        >
          {"Add Service"}
        </button>
      </div>
    </>
  );
}

export default Service;
