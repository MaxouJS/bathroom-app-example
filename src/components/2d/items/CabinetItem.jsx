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
              className={`md:text-base text-xs w-16 p-2 hover:bg-neutral-100 duration-200 ${currentCabinet.name === props.name ? 'bg-neutral-100/50' : null}`}
            >
              {
                props.name.includes('Black')
                  ?
                    <img src='/images/Black.jpg' />
                  :
                    null
              }
              {
                props.name.includes('Grey')
                  ?
                    <img src='/images/Grey.jpg' />
                  :
                    null
              }
              {
                props.name.includes('Neutral')
                  ?
                    <img src='/images/Neutral.jpg' />
                  :
                    null
              }
              {
                props.name.includes('White')
                  ?
                    <img src='/images/White.jpg' />
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