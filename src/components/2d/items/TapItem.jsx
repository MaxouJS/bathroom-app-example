const TapItem = (props) => {
  return (
    <li>
      <button className='w-full px-4 py-2 hover:bg-neutral-100 duration-200'>
        {props.name}
      </button>
    </li>
  )
}

export default TapItem