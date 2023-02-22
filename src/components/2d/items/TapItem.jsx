import { useRecoilState } from 'recoil'

import currentTapState from '../../../atoms/currentTapState'

const TapItem = (props) => {
  const [currentTap, setCurrentTap] = useRecoilState(currentTapState)

  return (
    <li>
      {
        currentTap && props
          ?
            <button
              onClick={() => setCurrentTap(props)}
              className={`md:text-base text-xs w-16 p-2 hover:bg-neutral-100 duration-200 ${currentTap.name === props.name ? 'bg-neutral-100/50' : null}`}
            >
              {
                props.name.includes('Black')
                  ?
                    <img src='/images/Black.jpg' />
                  :
                    null
              }
              {
                props.name.includes('Silver')
                  ?
                    <img src='/images/Grey.jpg' />
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

export default TapItem