import { View, Image } from 'react-native';
import { HeaderLogoSvg } from '../SvgIcons';

export default function Header() {
    return <View style={{width: '100%', height: 110, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 28}}>
        <HeaderLogoSvg />
        <Image source={require('../../assets/images/example-profile-avatar.png')} />
    </View>
}

