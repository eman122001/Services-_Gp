import "../css/department-card.css";

function DepartmentCard(props) {
    let card = props;

    return (
        <>
        
            <div className='card' id={card.selectionId} >
                <img src={card.img} alt=""/>
                <p className="department-name">{card.department_name}</p>
            </div>

        </>
    )
}

export default DepartmentCard;