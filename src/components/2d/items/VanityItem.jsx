import { useRecoilState } from 'recoil'

import currentVanityState from '../../../atoms/currentVanityState'

const VanityItem = (props) => {
  const [currentVanity, setCurrentVanity] = useRecoilState(currentVanityState)

  return (
    <li>
      {
        currentVanity
          ?
            <button
              onClick={() => setCurrentVanity(props)}
              className={`md:text-base text-xs w-full px-4 py-2 hover:bg-neutral-100 duration-200 ${currentVanity.name === props.name ? 'bg-neutral-100/50' : null}`}
            >
              {props.name}
            </button>
          :
            null
      }
    </li>
  )
}

export default VanityItem