import TapItem from '../items/TapItem'

const TapList = (props) => {
  return (
    <ul>
      <li className='font-bold px-4 py-2'>
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