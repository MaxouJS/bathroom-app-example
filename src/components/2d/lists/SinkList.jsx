import SinkItem from '../items/SinkItem'

const SinkList = (props) => {
  return (
    <ul>
      <li className='font-bold px-4 py-2'>
        Sinks
      </li>
      {
        props.sinks && props.sinks.length > 0
          ?
            props.sinks.map((s, index) => 
              <SinkItem
                key={index}
                name={s.name}
              />
            )
          :
            null
      }
    </ul>
  )
}

export default SinkList