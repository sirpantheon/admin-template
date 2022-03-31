import MenuItem from './MenuItem'
import {IconeConfig, IconeHome, IconeList} from '../icons'

export default function MenuLateral(props){
    return(
        <aside>
            <ul>
                <MenuItem url="/" texto='Home' icone={IconeHome}/>
                <MenuItem url="/ajustes" texto='Ajustes' icone={IconeConfig}/>
                <MenuItem url="/lista" texto='Lista' icone={IconeList}/>
            </ul>
        </aside>
    )
}