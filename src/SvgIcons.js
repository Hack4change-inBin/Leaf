import { View } from 'react-native';
import Svg, { Path, G, Rect, Defs, ClipPath } from "react-native-svg";

export function LeafActiveSvg(props) {
    return <Svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <Path d="M12.6316 4.21053C5.05263 5.89474 3.28421 11.0905 1.53263 15.4442L3.12421 16L3.92421 14.0632C4.32842 14.2063 4.74947 14.3158 5.05263 14.3158C14.3158 14.3158 16.8421 0 16.8421 0C16 1.68421 10.1053 1.89474 5.89474 2.73684C1.68421 3.57895 0 7.15789 0 8.84211C0 10.5263 1.47368 12 1.47368 12C4.21053 4.21053 12.6316 4.21053 12.6316 4.21053Z" fill="#588157"/>
    </Svg>
}
  
export function LeafInactiveSvg(props) {
    return <Svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <Path d="M12.6316 4.21053C5.05263 5.89474 3.28421 11.0905 1.53263 15.4442L3.12421 16L3.92421 14.0632C4.32842 14.2063 4.74947 14.3158 5.05263 14.3158C14.3158 14.3158 16.8421 0 16.8421 0C16 1.68421 10.1053 1.89474 5.89474 2.73684C1.68421 3.57895 0 7.15789 0 8.8421C0 10.5263 1.47368 12 1.47368 12C4.21053 4.21053 12.6316 4.21053 12.6316 4.21053Z" fill="#B4B4B4"/>
    </Svg>
}
  
export function CommentSvg(props) {
    return <Svg strokeWidth="2" width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <Path d="M16.0526 8.08336C16.0555 9.18325 15.7985 10.2683 15.3026 11.25C14.7146 12.4265 13.8107 13.416 12.6922 14.1078C11.5736 14.7995 10.2845 15.1662 8.96928 15.1667C7.86939 15.1696 6.78437 14.9126 5.80261 14.4167L1.05261 16L2.63595 11.25C2.14005 10.2683 1.88308 9.18325 1.88595 8.08336C1.88645 6.76815 2.25312 5.47907 2.94488 4.36048C3.63663 3.2419 4.62616 2.338 5.80261 1.75002C6.78437 1.25413 7.86939 0.997156 8.96928 1.00002H9.38595C11.1229 1.09585 12.7635 1.82899 13.9936 3.05907C15.2236 4.28915 15.9568 5.92973 16.0526 7.66669V8.08336Z" stroke="#232323" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
}
  
export function ShareSvg({stroke = '#232323', ...props}) {
    return <Svg strokeWidth="2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <Path d="M3.33331 10V16.6667C3.33331 17.1087 3.50891 17.5326 3.82147 17.8452C4.13403 18.1577 4.55795 18.3333 4.99998 18.3333H15C15.442 18.3333 15.8659 18.1577 16.1785 17.8452C16.4911 17.5326 16.6666 17.1087 16.6666 16.6667V10" stroke={stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M13.3334 5.00008L10 1.66675L6.66669 5.00008" stroke={stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M10 1.66675V12.5001" stroke={stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
}

export function HeaderLogoSvg(props) {
    return <View style={{flexDirection: 'row'}} {...props}>
        <Svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M19.5349 7.34514C7.81398 9.9498 5.07908 17.9852 2.37024 24.7182L4.83164 25.5778L6.06885 22.5824C6.69397 22.8038 7.34514 22.9731 7.81398 22.9731C22.1396 22.9731 26.0466 0.833496 26.0466 0.833496C24.7443 3.43815 15.628 3.76374 9.1163 5.06607C2.60466 6.3684 0 11.9033 0 14.508C0 17.1126 2.27908 19.3917 2.27908 19.3917C6.51165 7.34514 19.5349 7.34514 19.5349 7.34514Z" fill="#588157"/>
        </Svg>
        <Svg width="72" height="30" viewBox="0 0 72 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M4.83348 7.28782C5.00875 6.09017 4.83348 5.79806 4.1032 4.89251C3.72346 4.42513 3.51898 4.13302 3.5774 3.75328C3.69425 2.81852 5.24244 2.46799 8.77698 2.46799C12.3115 2.46799 13.8013 2.81852 13.6845 3.75328C13.626 4.13302 13.3047 4.42513 12.8081 4.89251C11.8441 5.79806 11.552 6.09017 11.3768 7.28782L9.71174 19.1768C9.65332 19.6733 9.82858 19.907 10.3252 19.907H10.7341C12.4576 19.907 14.2395 19.2644 16.4303 16.6354C17.3358 15.5254 17.8616 15.1748 18.5335 15.1748C19.848 15.1748 19.7896 16.4893 18.4751 20.1115C17.5403 22.6821 16.4887 24.0258 15.4663 24.0258C14.8529 24.0258 14.6484 23.5 13.6552 23.5H5.82666C2.29211 23.5 0.831555 23.1495 0.977611 22.2147C1.00682 21.835 1.32814 21.5429 1.82473 21.0755C2.7887 20.1699 3.08081 19.8778 3.22687 18.6802L4.83348 7.28782ZM26.4645 13.8019C26.3769 14.3277 26.4061 15.0288 26.4645 15.5838C28.2756 15.5838 29.3272 15.058 29.5317 13.539C29.7362 12.3121 29.1228 11.5819 28.3048 11.5819C27.3993 11.5819 26.669 12.429 26.4645 13.8019ZM20.4178 15.8467C21.0897 11.0853 25.1208 8.13495 29.4733 8.13495H29.5025C33.5044 8.13495 35.6368 10.5303 35.2571 13.3053C34.7313 17.0736 29.9699 18.3004 27.0196 18.3004C27.4285 19.4689 28.7138 20.1699 30.0283 20.1699C31.0507 20.1699 32.2484 19.761 33.3 18.5633C33.5921 18.2128 33.9426 17.9207 34.3808 17.9207C34.9942 17.9207 35.2279 18.3881 34.9942 19.352C34.6437 20.5789 33.7673 21.7473 32.3652 22.6821C31.0799 23.5 29.3857 24.0842 27.4285 24.0842C22.8132 24.0842 19.746 20.6081 20.4178 15.8467ZM44.654 20.4328C46.4066 20.4328 47.1369 18.3881 47.3706 17.0443L47.4582 16.5185C47.6627 14.5906 47.2245 11.6111 45.1505 11.6111C43.3979 11.6111 42.6384 13.7143 42.4047 15.204C42.171 16.9567 42.3171 20.4328 44.654 20.4328ZM36.4748 15.7883C37.0591 11.5234 39.8925 8.0181 44.2742 8.0181C45.9392 8.0181 47.1953 8.68996 48.0717 9.74156C48.1885 9.88761 48.393 9.82919 48.4222 9.65393L48.4514 9.3326C48.5975 8.39785 49.2693 8.16416 50.1749 8.36864C51.1388 8.60232 55.2576 10.0629 55.0531 11.465C55.0239 11.8155 54.7902 12.1953 54.2352 12.8087C53.7386 13.3345 53.5341 13.7143 53.3589 15.1164L52.7746 19.1768C52.4825 21.3384 53.8555 19.9655 54.5273 20.4036C54.9947 20.6957 54.7318 21.6305 54.0307 22.4776C53.242 23.4416 52.0152 23.9674 50.4962 23.9674C48.8019 23.9674 47.838 23.3247 47.3706 22.3023C47.2537 22.0102 46.9032 21.9518 46.6695 22.1563C45.4427 23.3247 43.8653 24.0258 41.9665 24.0258C37.322 24.0258 35.9198 19.7318 36.4748 15.7883ZM64.1681 12.1369L62.4447 24.4348C62.0357 27.2682 60.8673 29.6343 57.6248 29.6343C56.1059 29.6343 55.025 29.1085 54.4992 28.1446C54.0319 27.2974 54.0611 26.3627 54.5869 26.0706C55.3756 25.6324 56.3688 27.0053 56.6901 24.8437L58.472 12.1369C58.5304 11.6403 58.3259 11.4358 57.8293 11.4358C57.1575 11.4358 56.1351 11.0561 56.3103 9.88761L56.3395 9.65393C56.5732 8.0181 58.9978 8.33942 59.1438 7.37546C59.2899 6.23622 59.0854 5.30147 59.2314 4.13302C59.5528 2.00061 60.9841 0.0726753 65.1613 0.0726753C68.7251 0.0726753 71.0035 2.00061 71.0912 4.04539C71.1496 5.35989 70.3025 6.76202 68.4914 6.87887C65.395 7.11256 66.2129 3.13984 64.6647 3.5488C63.5255 3.84091 64.3726 5.73963 64.6355 7.43388C64.6939 7.95968 64.9276 8.13495 65.4242 8.13495H67.2937C68.988 8.13495 68.988 8.51469 68.8711 9.39103C68.7251 10.4134 68.2869 11.4358 65.8624 11.4358H64.986C64.4894 11.4358 64.2265 11.6403 64.1681 12.1369Z" fill="#1D201F"/>
        </Svg>
    </View>
}

export function HomeSvg() {
    return <Svg strokeWidth="2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M9 22V12H15V22" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
}

export function LeaderboardSvg() {
    return <Svg strokeWidth="2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M8.21 13.8899L7 22.9999L12 19.9999L17 22.9999L15.79 13.8799" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
}

export function MapSvg() {
    return <Svg strokeWidth="2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M2 12H22" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
}

export function AddSvg() {
    return <Svg strokeWidth="2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M12 8V16" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M8 12H16" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg> 
}

export function SettingsSvg() {
    return <Svg strokeWidth="2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <G clip-path="url(#clip0_27_80)">
            <Path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </G>
        <Defs>
        <ClipPath id="clip0_27_80">
            <Rect width="24" height="24" fill="white"/>
        </ClipPath>
        </Defs>
    </Svg>
}

export function BackArrowSvg() {
    return <Svg strokeWidth="3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M22 12H2" stroke="black" stroke-width="2.85714" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M12 22L2 12L12 2" stroke="black" stroke-width="2.85714" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
}

export function FilterSvg() {
    return <Svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M13 0.600098H1L5.8 6.2761V10.2001L8.2 11.4001V6.2761L13 0.600098Z" stroke="#232323" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
}