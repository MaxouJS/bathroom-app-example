import SinkItem from '../items/SinkItem'

const SinkList = (props) => {
  return (
    <div className='py-2 border-b border-black/25'>
      <span className='font-extrabold'>Basin</span>
      <ul className='grid grid-cols-4 gap-2'>
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
    </div>
  )
}

export default SinkList