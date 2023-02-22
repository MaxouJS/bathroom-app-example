import CabinetItem from '../items/CabinetItem'

const CabinetList = (props) => {
  return (
    <div className='py-2 border-b border-black/25'>
      <span className='font-extrabold'>Vanity</span>
      <ul className='grid grid-cols-4 gap-2'>
        {
          props.cabinets && props.cabinets.length > 0
            ?
              props.cabinets.map((c, index) => 
                <CabinetItem
                  key={index}
                  name={c.name}
                />
              )
            :
              null
        }
      </ul>
    </div>
  )
}

export default CabinetList