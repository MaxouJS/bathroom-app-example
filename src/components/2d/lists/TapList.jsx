import TapItem from '../items/TapItem'

const TapList = (props) => {
  return (
    <div>
      <span className='font-extrabold'>Tap</span>
      <ul className='grid grid-cols-4 gap-4'>
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
    </div>
  )
}

export default TapList