import SinkItem from '../items/SinkItem'

const SinkList = (props) => {
  return (
    <ul className='bg-white/50'>
      <li className='bg-black/50 text-white font-bold px-4 py-2'>
        Sinks
      </li>
      {
        props.sinks && props.sinks.length > 0
          ?
            props.sinks.map(s => 
              <SinkItem
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