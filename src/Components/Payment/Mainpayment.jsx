import React from "react";
import {ArrowBackIos} from "@material-ui/icons"
import styles from  "../Infopage/infopage.module.css";
import "./Summary.css"
import {Tabs} from "./Tabs"
import axios from "axios";
import {useSelector} from "react-redux"
import {useHistory} from "react-router-dom"
import { useStateValue } from '../../Redux/Login/StateProvider'
export function Mainpayment(){
    const {guests,customerDate} = useSelector((state) => state.Navbar)
    const {data} = useSelector((state) => state.info);
    const history = useHistory();
    let tempDate1 = customerDate[0];
    let tempDate2 = customerDate[1];
    let days = dayCal(tempDate1, tempDate2)
    const pricing = data.price * days;
    const cleaning = Math.ceil(pricing*0.04);
    const servicefee = Math.ceil(pricing*0.05);
    const tax = Math.ceil(pricing*0.1);
    const total = pricing + cleaning+servicefee+tax;
    const [{user}]=useStateValue()
    console.log(user)
const  loadScript=(src)=> {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    async function displayRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        const result = await axios.post(`https://airbnb-clone2-server.herokuapp.com/payment/orders?q=${total}`);

        if (!result) {
            alert("Server error. Are you online?");
            return;
        }

        const { amount, id: order_id, currency } = result.data;

        const options = {
            key: "rzp_test_Pm6NPep4cHepqE", // Enter the Key ID generated from the Dashboard
            amount: amount.toString(),
            currency: currency,
            name: "Airbnb",
            description: "Test Transaction",
            // image: { logo },
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };

                axios.post("https://airbnb-clone2-server.herokuapp.com/payment/success", data).then((res)=>{
                    alert('Payment Successful');
                    history.push('/')
                })
                

            },
            prefill: {
                name: `${user?.displayName}`,
                email:  `${user?.email}`,
                contact: "9876543210",
            },
            notes: {
                address: "Airbnb Office",
            },
            theme: {
                color: "#61dafb",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }
    return (
        <div className="payment-layout">
             <div>
               <button className="payment-back-button"><ArrowBackIos fontSize="small"/></button><div className="payment-heading">Confirm and pay</div>
             </div>
             <div className="payflexbody">
                 <div className="payment-body">
                     <h3>Your trip</h3>
                     <div>
                        <Tabs head={"Date"} subhead={"17 Jun – 30 Jun"}/>
                        <Tabs head={"Guests"} subhead={`${guests} guests`}/>
                     </div>
                     <div>
                         <div className="payflexbody">
                             <div>
                                 <h2>Pay with</h2>
                             </div>
                             <div style={{width:"21%",marginTop:"15px"}}>
                                <img className="payment-option-image" src="https://a0.muscache.com/airbnb/static/packages/logo_mastercard.f18379cf.svg" alt="master"></img>
                                <img className="payment-option-image1" src="https://a0.muscache.com/airbnb/static/packages/logo_visa.0adea522.svg" alt="visa"></img>
                                <img className="payment-option-image1" src="https://a0.muscache.com/airbnb/static/packages/logo_amex.84088b52.svg" alt="amex"></img>
                             </div>
                         </div>
                         <div>
                             <div>
                                 <div className="paymentdrop">
                                    <i style={{fontSize:"24px",color:"lightgrey"}} className="fa">&#xf09d;</i>
                                    <div style={{display:"inline-block",marginLeft:"2%"}}>Credit or Debit card</div>  
                                 </div>
                             </div>
                         </div>
                     </div>
                     <hr/>
                     <div>
                         <h3 >Cancellation policy</h3>
                         <p>Cancel before 11:00 AM on 19 Jun and get a full refund for the nights that remain 24 hours after you cancel, minus the service and cleaning fees.<span className="learnmore"> Learn more</span></p>
                         <p><b style={{color:"black"}}>Make sure this host’s cancellation policy works for you.</b> Our Extenuating Circumstances policy may not cover travel disruptions caused by known events, such as COVID-19, or foreseeable events, such as common severe weather. <span className="learnmore">Learn more </span></p>
                     </div>
                     <br/>
                     <hr/>
                     <p className="termsncond">
                     By selecting the button below, I agree to the House Rules, Safety Disclosures, Cancellation Policy, Airbnb’s social distancing and other COVID-19-related guidelines, and the Guest Refund Policy. I also agree to pay the total amount shown, which includes Occupancy Taxes and Service Fees. Airbnb now collects and remits government-imposed Occupancy Taxes in this location.
                     </p>
                     <button style={{width:"30%"}} className="submitbutton" onClick={displayRazorpay}>
                        Pay ₹{total}
                    </button>
                 </div>
                 <div className="payment-body2">
                    <div style={{display: 'flex'}}>
                        <div>
                         <img width="130px" style={{maxHeight:"100px"}} src={data?.img[0]} alt=""/>
                        </div>
                        <div>
                           <span>{data.name}</span>
                           <div>    
                                <i className="fa fa-star" style={{fontSize:"16px",color:"rgb(255,56,92)",paddingTop:"10px"}} />
                                <span><b>{data.rating}</b></span>
                                <span> (<u  className={styles.topdec}>{data.review?.length} reviews</u>)</span>
                           </div>
                        </div>
                    </div>
                    <hr/>
                     <div>
                     <h3>Pricing details</h3>
                     <div className="pricing">
                                <div>
                                {data.price} x {days} nights
                                </div>
                                <div>
                                ₹{pricing}
                                </div>
                            </div>
                            <div className="pricing">
                                <div>
                                Cleaning fee
                                </div>
                                <div>
                                ₹{cleaning}
                                </div>
                            </div>
                            <div className="pricing">
                                <div>
                                Service fee
                                </div>
                                <div>
                                ₹{servicefee}
                                </div>
                            </div>
                            <div className="pricing">
                                <div>
                                Occupancy taxes and fees
                                </div>
                                <div>
                                ₹{tax}
                                </div>
                            </div>
                            <hr/>
                            <div className="pricing">
                            <div>
                                <b>Total</b>
                            </div>
                            <div>
                            ₹{total}
                            </div>
                            </div>
                     </div>
                 </div>
            </div>
        </div>
    )
}


function dayCal(date1,date2){
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return diffDays
  }