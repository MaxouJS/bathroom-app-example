import { useRecoilState } from 'recoil'

import currentTapState from '../../../atoms/currentTapState'

const TapItem = (props) => {
  const [currentTap, setCurrentTap] = useRecoilState(currentTapState)

  return (
    <li>
      {
        currentTap
          ?
            <button
              onClick={() => setCurrentTap(props)}
              className={`md:text-base text-xs w-full px-4 py-2 hover:bg-neutral-100 duration-200 ${currentTap.name === props.name ? 'bg-neutral-100/50' : null}`}
            >
              {props.name}
            </button>
          :
            null
      }
    </li>
  )
}

export default TapItem