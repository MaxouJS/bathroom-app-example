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
              className={`md:text-base text-xs w-16 p-1 hover:bg-neutral-100 duration-200 ${currentSink.name === props.name ? 'bg-white/50 rounded-md' : null}`}
            >
              {
                props.name.includes('Black')
                  ?
                    <img src='/images/Black.jpg' className='rounded-md' />
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

export default SinkItem