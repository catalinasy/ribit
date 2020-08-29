
import './styles.scss'

const MOCKUP = [
    'Vinos',
    'Flores',
    'Quesos',
    'Cafe'
]

const Sugestions = () => {
    return (
    <div className='sugestionsRoot'> {MOCKUP.map(sug => <div className="sugestionCard">
        <span className='category'/>
        <p className='sugestionContent'>{sug}</p>
        </div>)} </div>
    )
}

export default Sugestions;