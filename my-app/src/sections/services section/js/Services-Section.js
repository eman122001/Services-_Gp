import "../css/services-section.css";
import TitleOfSection from "../../../components/Title-of-section/js/Title-of-section";
import DepartmentCard from "../../../components/department-box/js/department-card";
import Data from "../../../json-files/services-data.json";
import classficationData from "../../../json-files/classfication-data.json";
import ServiceAdedd from "../../../components/service/js/ServiceAdedd";
import {useEffect , useState} from "react";
import { useSelector } from "react-redux";
import Service from "../../../components/service-card/js/service-will-select";
import EmptyCartPopub from "../../../components/empty-cart-popub/js/Empty-cart-pobup";
import Location from "../../../components/location-component/js/Location-component";
// images
import Electricity from "../../../images/electricity.jpg";
import Carpentry from '../../../images/carpentry.jpg';
import Plumbing from '../../../images/plumbing.jpg';
import Painting from '../../../images/painting.jpg';
import Conditioning from '../../../images/conditioning.jpg';
import Cleaning from '../../../images/cleaning.jpg';
import Appliances from '../../../images/appliances.jpg';
import Plastering from '../../../images/plastering.jpg';
import Satellite from '../../../images/sate.jpg';
import Ceramic from '../../../images/Ceramic&Tiles.png';
import Gypsum from '../../../images/gypsum4.jfif';
import Aluminum from '../../../images/aluminum.jfif';
import Sterilization from '../../../images/sterilization1.png';
import Pest from '../../../images/pest.png';

function ServicesSection() {
    let myState = useSelector(state => state);
    let servicesAdded = myState.AddService;
    let [departServices , setDepartServices] = useState([]);
    let [departImgSelected , setDepartImgSelected] = useState('')
    let [servNameSelected , setServNameSelected] = useState('');
    let [classFicationData , setClassFicationData] = useState([]);
    let [minPrice , setMinPrice] = useState(0);
    let [maxPrice , setMaxPrice] = useState(0);
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let timeString = `${hours}:${minutes}`;


    useEffect(()=>{
        let totalMinPrice = servicesAdded.reduce((acc , serv) => {
            serv.min_price ? acc+= serv.min_price : console.log("no")
            return acc
        },0)
        setMinPrice(totalMinPrice)

        let totalMaxPrice = servicesAdded.reduce((acc , serv) => {
            serv.min_price ? acc+= serv.max_price : console.log("no")
            return acc
        },0)
        setMaxPrice(totalMaxPrice)
    },[servicesAdded])

    useEffect(()=>{
        let allCards = document.querySelectorAll('.services-container .card');
        let popubRequest = document.querySelector(".parent-of-requests-popub");

        allCards.forEach(card => {
            card.onclick = () => {

                popubRequest.classList.add('active');
                setDepartServices(Data[card.id]);
                setServNameSelected(card.textContent);
                setDepartImgSelected(document.querySelector(`#${card.id} img`).src);
                setClassFicationData(classficationData[card.id]);

            };
        });
    },[]);  

    useEffect(()=>{
        if(document.querySelectorAll("ul.classfication-list li")[0]){
            document.querySelectorAll("ul.classfication-list li")[0].classList.add("active")
        };
    })

    useEffect(()=>{

        let totalMinPrice = servicesAdded.reduce((acc , serv) => {
            serv.min_price ? acc+= serv.min_price * serv.quantity : console.log("no")
            return acc
        },0);
        setMinPrice(totalMinPrice);

        let totalMaxPrice = servicesAdded.reduce((acc , serv) => {
            serv.min_price ? acc+= serv.max_price * serv.quantity : console.log("no")
            return acc
        },0)
        setMaxPrice(totalMaxPrice)

    },[myState.AddService])

    let services = departServices.map(serv => {

        return (
            <Service
                    cetogry={serv.cetogry} 
                    serv_info={serv.serv_info} 
                    min_price={serv.min_price} 
                    max_price={serv.max_price} 
                    serv={serv} 
                    key={serv.id}
                    />
        )
    });


    return (
        <>
        <section className="services-section">
            <div className="container services-container">
                <TitleOfSection/>
                <DepartmentCard img={Electricity} department_name="Electricity" selectionId={"Electricity"}/>
                <DepartmentCard img={Carpentry} department_name="Carpentry" selectionId={"Carpentry"} />
                <DepartmentCard img={Plumbing} department_name="Plumbing" selectionId={"Plumbing"}/>
                <DepartmentCard img={Painting} department_name="Painting" selectionId={"Painting"}/>
                <DepartmentCard img={Conditioning} department_name="Conditioning" selectionId={"Conditioning"}/>
                <DepartmentCard img={Cleaning} department_name="Cleaning" selectionId={"Cleaning"}/>
                <DepartmentCard img={Satellite} department_name="Satellite & .." selectionId={"Satellite"}/>
                <DepartmentCard img={Gypsum} className='gypsum' department_name="Gypsum Board" selectionId={"Carpentry"}/>
                {/* "https://elasticbeanstalk-us-east-2-780758728594.s3.us-east-2.amazonaws.com/majors/Gypsum%20Board.png" */}
                <DepartmentCard img={Ceramic} department_name="Ceramic & Tiles" selectionId={"Ceramic"}/>
                {/* "https://elasticbeanstalk-us-east-2-780758728594.s3.us-east-2.amazonaws.com/majors/Aluminum.png" */}
                <DepartmentCard img={Aluminum} department_name="Aluminum" selectionId={"Carpentry"}/>
                <DepartmentCard img={Appliances} department_name="Appliances" selectionId={"Appliances"}/>
                <DepartmentCard img={Sterilization} department_name="Sterilization & Disinfection" selectionId={"Sterilizatio"}/>
                <DepartmentCard img={Pest} department_name="Pest Control" selectionId={"Pest-Control"}/>
                {/* "https://elasticbeanstalk-us-east-2-780758728594.s3.us-east-2.amazonaws.com/majors/Pest%20Control.png" */}
                <DepartmentCard img={Plastering} department_name="Plastering" selectionId={"Plastering"} />
            </div>

            <div className="parent-of-requests-popub">
                <div className="requests-popub">

                    <div className="serv-title-and-close">
                        <div className="title-and-img-parent">
                            <img src={departImgSelected} department_name="Painting" alt={"deprtment imag"}/>
                            <h3 className="serv-title">{servNameSelected}</h3>
                        </div>
                        <button className="close-serv-div" onClick={()=>{
                            document.querySelector(".close-request-ask").classList.add("active")
                        }}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>

                    <div className="all-services-and-requests-list">
                        <div className="all-services">
                        <div className="classfication-div">
                            <ul className="classfication-list">
                                {classFicationData.map(classFication => {
                                    return <li data-o={classFication.cetogry} key={classFication.item} className={`item-service ${classFication.cetogry}`} id={classFication.cetogry} onClick={(e)=>{
                                        
                                        let allItems = document.querySelectorAll("ul.classfication-list li");
                                        let mainItems = allItems[0]
                                        allItems.forEach(item => {
                                            item.classList.remove("active");
                                        })
                                        e.target.classList.add("active");

                                        let allServices = document.querySelectorAll(".service-card");
                                        let activeServices = document.querySelectorAll(`.service-card.${e.target.classList[2]}`);

                                        allServices.forEach(serv => {
                                            serv.classList.remove("active")
                                        });
                                        activeServices.forEach(serv => {
                                            serv.classList.add("active")
                                        });

                                        mainItems.onclick = ()=>{
                                            allServices.forEach(serv => {
                                                serv.classList.add("active")
                                            });
                                        }
                                    }}>{classFication.item}</li>
                                })}
                                
                            </ul>
                        </div>
                            {services}
                        </div>

                        <div className="request-list">
                            <div className="head-of-request-list">
                                <h2 className="head-text">Requests List</h2>
                            </div>
                            <div>
                                {servicesAdded.map(serv => {
                                    return (

                                        <ServiceAdedd
                                                key={serv.id} 
                                                name={serv.serv_info} 
                                                min_price={serv.min_price} 
                                                max_price={serv.max_price} 
                                                id={serv.id} 
                                                quantity={serv.quantity}
                                                />

                                    )
                                })}
                            </div>
                        </div>
                        
                    </div>

                    <div className="price-and-check-up">
                        <div className="price-div">
                            <h2>Just check up...</h2>
                            <h2 className="price-value">{minPrice} - {maxPrice} EGP</h2>
                        </div>
                        <button className="make-request-btn" onClick={()=>{
                            let empttCartPopub = document.querySelector(".parent-of-empty-cart-popub");
                            let setLocation = document.querySelector(".set-locaiton-div")
                            servicesAdded.length >= 1 
                            ? 
                            setLocation.classList.add("active")
                            : 
                            empttCartPopub.classList.add("active");
                        }}>Make a Request</button>
                    </div>



{/* this is an ask to closing request or no ****************/}
                    <div className="close-request-ask">
                        <p>Do you really want to cancel the request ?</p>
                        <div className="selection-btns">
                            <button className="no-btn" onClick={()=>{
                                document.querySelector(".close-request-ask").classList.remove("active")
                            }}>No</button>
                            <button className="yes-btn" onClick={()=>{
                                document.querySelector(".services-section .parent-of-requests-popub").classList.remove("active");
                                document.querySelector(".close-request-ask").classList.remove("active");
                            }}>Yes</button>
                        </div>
                    </div>

                    <EmptyCartPopub/>

                </div>

                <Location />


            <div className="complete-req-div">
                <div className="head">
                    <div className="text-and-go-back">
                    <button className="go-back-btn" onClick={()=>{
                            document.querySelector(".complete-req-div").classList.remove("active");
                        }}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                        <p>Request Details</p>
                    </div>
                    <button className="close-location-btn" onClick={()=>{
                            document.querySelector(".close-request-ask").classList.add("active");
                        }}>
                            <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>

                <div className="completing">
                    <div className="services-and-total-price">

                        <div className="client-services">
                            <h2 className="title">Services</h2>
                            
                            <div className="services-div">
                                {servicesAdded.map(serv => {
                                    return (
                                        <div className="service-div" key={serv.id}>
                                            <div className="service-info">
                                                <h2 className="service-name">{serv.serv_info}</h2>
                                                <p className="service-price">{serv.min_price * serv.quantity} - {serv.max_price * serv.quantity} EGP</p>
                                            </div>
                                            <p className="service-quantity">{serv.quantity}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="total-price">
                            <p>Total Price</p>
                            <p>{minPrice} - {maxPrice} EGP</p>
                        </div>
                    </div>

                    <div className="client-problem">
                        <h2>Describe your problem</h2>
                        <form onSubmit={(e)=>{
                            e.preventDefault()
                        }}>

                            <textarea placeholder="Descripe your problem.."></textarea>

                            <div className="order-date">
                                <h2>Choose your date</h2>
                                <div className="input-div date-div">
                                    <input type="date" defaultValue={new Date().toISOString().substr(0, 10)}/>
                                </div>
                                <div className="input-div time-div">
                                    <input type="time" defaultValue={timeString}/>
                                </div>
                                <div className="input-div file-div">
                                    <img src="https://www.anamehani.com/img/camera.png" alt=""/>
                                    <label htmlFor={"file-input"} >Add Image (optional)</label>
                                    <input id="file-input" type="file" multiple accept="image/png, image/jpeg, image/jpg"/>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
                <div className="comleate-req-div">
                        <button className="complete-btn" onClick={()=>{
                                document.querySelector(".services-section .parent-of-requests-popub").classList.remove("active");
                                document.querySelector(".close-request-ask").classList.remove("active");
                            }}>Complete</button>
                </div>

            </div>





            </div>
        </section>
        
        </>
    )
}

export default ServicesSection;