import { useRecoilState } from 'recoil'

import currentSinkState from '../../../atoms/currentSinkState'

const SinkItem = (props) => {
  const [currentSink, setCurrentSink] = useRecoilState(currentSinkState)

  return (
    <li>
      {
        currentSink && props
          ?
            <button
              onClick={() => setCurrentSink(props)}
              className={`md:text-base text-xs w-16 p-2 hover:bg-neutral-100 duration-200 ${currentSink.name === props.name ? 'bg-neutral-100/50' : null}`}
            >
              {
                props.name.includes('Black')
                  ?
                    <img src='/images/Black.jpg' />
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

export default SinkItem