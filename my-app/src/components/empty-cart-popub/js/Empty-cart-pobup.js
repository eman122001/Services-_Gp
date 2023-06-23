import "../css/empty-cart-popub.css"
function EmptyCartPopub() {
    return (
        <>

            <div className="parent-of-empty-cart-popub">
                <div className="empty-cart-pupub">
                    <img src="https://tse3.explicit.bing.net/th?id=OIP.EKxmVELiN7SbqGrFSYAJGwHaHa&pid=Api&P=0" alt=""/>
                    <p className="popub-text">الرجاء اختيار خدمة</p>
                    <button className="ok-btn" onClick={()=>{
                        let empttCartPopub = document.querySelector(".parent-of-empty-cart-popub");
                        empttCartPopub.classList.remove("active")
                    }}>Ok</button>
                </div>
            </div>
        
        </>
    )
}

export default EmptyCartPopub;