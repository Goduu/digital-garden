import { FaStar } from 'react-icons/fa6'
import { FC } from 'react'

interface StarRatingProps {
  stars: 1 | 2 | 3
}

const Star: FC<{ className?: string }> = () => {
  return <FaStar className="text-yellow-500 dark:text-yellow-300" />
}

export const StarRating: FC<StarRatingProps> = (props) => {
  const { stars } = props

  return (
    <span className="flex items-center">
      {stars >= 1 && <Star />}
      {stars >= 2 && <Star />}
      {stars >= 3 && <Star />}
    </span>
  )
}
