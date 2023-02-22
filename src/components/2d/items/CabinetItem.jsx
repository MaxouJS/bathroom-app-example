import { useRecoilState } from 'recoil'

import currentCabinetState from '../../../atoms/currentCabinetState'

const CabinetItem = (props) => {
  const [currentCabinet, setCurrentCabinet] = useRecoilState(currentCabinetState)

  return (
    <li>
      {
        currentCabinet && props
          ?
            <button
              onClick={() => setCurrentCabinet(props)}
              className={`md:text-base text-xs w-16 p-1 hover:bg-neutral-100 duration-200 ${currentCabinet.name === props.name ? 'bg-white/50 rounded-md' : null}`}
            >
              {
                props.name.includes('Black')
                  ?
                    <img src='/images/Black.jpg' className='rounded-md' />
                  :
                    null
              }
              {
                props.name.includes('Grey')
                  ?
                    <img src='/images/Grey.jpg' className='rounded-md' />
                  :
                    null
              }
              {
                props.name.includes('Neutral')
                  ?
                    <img src='/images/Neutral.jpg' className='rounded-md' />
                  :
                    null
              }
              {
                props.name.includes('White')
                  ?
                    <img src='/images/White.jpg' className='rounded-md' />
                  :
                    null
              }
            </button>
          :
            null
      }
    </li>
  )
}

export default CabinetItem