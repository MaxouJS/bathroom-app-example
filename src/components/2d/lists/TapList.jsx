import TapItem from '../items/TapItem'

const TapList = (props) => {
  return (
    <ul className='bg-white/50'>
      <li className='bg-black/50 text-white font-bold px-4 py-2'>
        Taps
      </li>
      {
        props.taps && props.taps.length > 0
          ?
            props.taps.map(t => 
              <TapItem
                name={t.name}
              />
            )
          :
            null
      }
    </ul>
  )
}

export default TapList