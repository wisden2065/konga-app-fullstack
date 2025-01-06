import './DealsCard.css'
import { dealsProduct } from '../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'

const Dealscard = () => {
  return (
    <div >
         <ul className='deals-card-cont'>
            {dealsProduct.map((product, index)=>{
                return <li key={index}>
                            <img src={product['Product Image']} alt="" />
                            <h3>{product['Product Name']}</h3>
                            <p>{product['Product Desc']}</p>
                            <span>Shop now <FontAwesomeIcon icon={faCircleChevronRight} /></span>
                       </li>
            })}
        </ul>
    </div>
  )
}

export default Dealscard
