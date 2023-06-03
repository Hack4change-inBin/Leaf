import { StyleSheet, Platform, StatusBar, Text, View, Image, SafeAreaView, FlatList, RefreshControl } from 'react-native';
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

  return <View style={{ width: '100%', paddingHorizontal: 28, paddingTop: 40 }}>
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

export function Filter() {
  function FilterButton({name}) {
    return <View style={{ borderWidth: 1, borderRadius: 50, paddingHorizontal: 8, paddingVertical: 6, marginRight: 8 }}>
      <Text style={{ fontSize: 16, fontFamily: 'Helvetica', color: '#000', lineHeight: 18, marginBottom: -4 }}>{name}</Text>
    </View>
  }

  return <View style={{ width: '100%', backgroundColor: '#F6F6F6', paddingHorizontal: 28, paddingVertical: 24}}>
    <Text style={{ fontSize: 20, fontFamily: 'HelveticaBold', color: '#000000', lineHeight: 20}}>Sort</Text>
    <View style={{flexDirection: 'row', marginTop: 6}}>
      <FilterButton name="Ostatnie" clicked></FilterButton>
      <FilterButton name="Popularne"></FilterButton>
      <FilterButton name="Najbliżej"></FilterButton>
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

  const DATA = [{},{},{}]

  return (
    <SafeAreaView style={styles.container}>
      <Header></Header>
      <Filter></Filter>
      <FlatList data={DATA} renderItem={({item}) => <Post />} style={{width:'100%'}} refreshControl={
        <RefreshControl />
      }/>
    </SafeAreaView>
  );
}0

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
