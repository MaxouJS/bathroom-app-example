import TapItem from '../items/TapItem'

const TapList = (props) => {
  return (
    <ul>
      <li className='md:text-base text-sm font-bold px-4 py-2'>
        Tap
      </li>
      {
        props.taps && props.taps.length > 0
          ?
            props.taps.map((t, index) => 
              <TapItem
                key={index}
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