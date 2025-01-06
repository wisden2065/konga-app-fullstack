import './OfficialStores.css'
import { featured_brands } from '../../assets/images'

const OfficialStores = () => {
  return (
    <div className='brands-cont'>
      {featured_brands.map((brand, index)=>{
        return <a href="" className='brand' key={index}>
                <img src={brand} alt="" />
               </a>
      })}
    </div>
  )
}

export default OfficialStores
