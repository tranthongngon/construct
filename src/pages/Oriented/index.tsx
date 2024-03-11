import Construction from './Construction'
import Invest from './Invest'
import Economy from './Economy'
import Diversification from './Diversification'
import OrientedHeader from './OrientedHeader'

export default function Oriented() {
    return (
        <div style={{ padding: '30px',height:'100vh' }} >
            <OrientedHeader />
            <Construction />
            <Construction />
            <Invest />
            <Economy />
            <Diversification />
        </div>
    )
}
