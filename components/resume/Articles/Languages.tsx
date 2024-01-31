import { FC } from 'react'
import { BR, US, FR, DE } from 'country-flag-icons/react/3x2'

const Languages: FC = () => {
    return (
        <div className="flex gap-2 pb-2 pt-2">
            <BR title="Portuguese" className="w-7" />
            <US title="English" className="w-7" />
            <DE title="German" className="w-7" />
            <FR title="French" className="w-7" />
        </div>
    )
}
export default Languages
