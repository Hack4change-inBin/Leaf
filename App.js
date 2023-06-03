import { StyleSheet, Platform, StatusBar, Text, View, Image, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import { LeafActiveSvg, LeafInactiveSvg, CommentSvg, ShareSvg} from './src/SvgIcons'
import Header from './src/Header';


export function Post() {
  const data = {
    name: 'Maciek',
    time: '20 minut temu',
    image: require('./assets/images/example-post.png'),
    leaves: 673,
    comments: 23,
    liked: true
  }

  return <View style={{ width: '100%'}}>
    <Text style={{ fontSize: 20, fontFamily: 'HelveticaBold', color: '#000000', lineHeight: 20}}>{data.name}</Text>
    <Text style={{ fontSize: 14, fontFamily: 'Helvetica', color: '#A3A3A3', lineHeight: 14}}>{data.time}</Text>
    <Image style={{ height: undefined, width: '100%', aspectRatio: 3/2, marginTop: 5, borderRadius: 10  }} source={data.image}></Image>
    <View style={{ width: '100%', flexDirection: 'row', justifyContent:'space-between', alignItems: 'center', marginTop: 16 }}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{ fontSize: 18, fontFamily: 'Helvetica', color: '#000', lineHeight: 18}}>{data.leaves}</Text>
        {data.liked ? <LeafActiveSvg style={{marginHorizontal: 8}} /> : <LeafInactiveSvg style={{marginHorizontal: 8}} />}
        <Text style={{ fontSize: 18, fontFamily: 'Helvetica', color: '#000', lineHeight: 18 }}>{data.comments}</Text> 
        <CommentSvg style={{marginHorizontal: 8}} />
      </View>
      <ShareSvg />
    </View>
  </View>
}

export default function App() {
  const [ loadedFonts ] = useFonts({
    HelveticaLight: require('./assets/fonts/Helvetica-Light.ttf'),
    Helvetica: require('./assets/fonts/Helvetica.ttf'),
    HelveticaBold: require('./assets/fonts/Helvetica-Bold.ttf')
  })

  if(!loadedFonts) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header></Header>
      <Text>Open up App.js to startt working on your app!</Text>
      <StatusBar style="auto" />
      <Post></Post>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 28,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
