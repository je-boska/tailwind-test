export const Square = ({ text, color }) => {
  return (
    <div
      className={`p-5 py-10 bg-${color} rounded-lg hover:bg-gray-300 text-3xl text-center`}
    >
      <h1 className='text-white font-bold'>{text}</h1>
    </div>
  )
}
