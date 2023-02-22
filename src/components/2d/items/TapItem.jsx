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
              className={`md:text-base text-xs w-16 p-1 hover:bg-neutral-100 duration-200 ${currentTap.name === props.name ? 'bg-white/50 rounded-md duration-200' : null}`}
            >
              {
                props.name.includes('Black')
                  ?
                    <img src='/images/Black.jpg' className='rounded-md' />
                  :
                    null
              }
              {
                props.name.includes('Silver')
                  ?
                    <img src='/images/Grey.jpg' className='rounded-md' />
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