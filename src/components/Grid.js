import { Square } from './Square'

const squares = [
  { text: '1', color: 'red-200' },
  { text: '2', color: 'red-300' },
  { text: '3', color: 'red-400' },
  { text: '4', color: 'red-500' },
  { text: '5', color: 'red-600' },
  { text: '6', color: 'red-700' },
]

export const Grid = () => {
  return (
    <div className='mt-20 max-w-4xl xl:max-w-7xl mx-auto p-5 grid grid-cols-3 gap-4'>
      {squares.map((sq) => (
        <Square text={sq.text} color={sq.color} />
      ))}
    </div>
  )
}
