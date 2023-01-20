import { useRecoilState } from 'recoil'

import currentSinkState from '../../../atoms/currentSinkState'

const SinkItem = (props) => {
  const [currentSink, setCurrentSink] = useRecoilState(currentSinkState)

  return (
    <li>
      {
        currentSink
          ?
            <button
              onClick={() => setCurrentSink(props)}
              className={`md:text-base text-xs w-full px-4 py-2 hover:bg-neutral-100 duration-200 ${currentSink.name === props.name ? 'bg-neutral-100/50' : null}`}
            >
              {props.name}
            </button>
          :
            null
      }
    </li>
  )
}

export default SinkItem