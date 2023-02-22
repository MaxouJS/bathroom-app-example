import CabinetItem from '../items/CabinetItem'

const CabinetList = (props) => {
  return (
    <div className='py-2 border-b border-black/25'>
      <span className='flex font-extrabold items-center'>Vanity <span className='ml-1 text-white/50 text-xs'>(Mounted)</span></span>
      <ul className='grid grid-cols-4 gap-2'>
        {
          props.cabinets && props.cabinets.length > 0
            ?
              props.cabinets.map((c, index) =>
                (
                  c.mounted
                    ?
                      <CabinetItem
                        key={index}
                        name={c.name}
                      />
                    :
                      null
                )
              )
            :
              null
        }
      </ul>
      <span className='flex font-extrabold items-center'>Vanity <span className='ml-1 text-white/50 text-xs'>(On floor)</span></span>
      <ul className='grid grid-cols-4 gap-2'>
        {
          props.cabinets && props.cabinets.length > 0
            ?
              props.cabinets.map((c, index) =>
                (
                  !c.mounted
                    ?
                      <CabinetItem
                        key={index}
                        name={c.name}
                      />
                    :
                      null
                )
              )
            :
              null
        }
      </ul>
    </div>
  )
}

export default CabinetList