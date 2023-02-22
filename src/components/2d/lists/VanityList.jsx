import VanityItem from '../items/VanityItem'

const VanityList = (props) => {
  return (
    <ul>
      <li className='md:text-base text-sm font-bold px-4 py-2'>
        Vanity
      </li>
      {
        props.vanities && props.vanities.length > 0
          ?
            props.vanities.map((v, index) => 
              <VanityItem
                key={index}
                name={v.name}
              />
            )
          :
            null
      }
    </ul>
  )
}

export default VanityList