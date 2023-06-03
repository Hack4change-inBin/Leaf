import { View, Text, Image} from 'react-native'
import { LeafActiveSvg, LeafInactiveSvg, ShareSvg, CommentSvg } from '../SvgIcons';

export function Post() {
    const data = {
      name: "Maciek",
      time: "20 minut temu",
      image: require("../../assets/images/example-post.png"),
      leaves: 673,
      comments: 23,
      liked: true,
    };
  
    return (
      <View style={{ width: "100%", paddingHorizontal: 28, paddingTop: 40 }}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "Helvetica",
            color: "#000000",
            lineHeight: 18,
          }}
        >
          {data.name}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: "HelveticaLight",
            color: "#A3A3A3",
            lineHeight: 14,
            marginTop: 2
          }}
        >
          {data.time}
        </Text>
        <Image
          style={{
            height: undefined,
            width: "100%",
            aspectRatio: 3 / 2,
            marginTop: 5,
            borderRadius: 10,
          }}
          source={data.image}
        ></Image>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 16,
          }}
        >
          <View style={{ flexDirection: "row", alignItems:'center' }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Helvetica",
                color: "#000",
              }}
            >
              {data.leaves}
            </Text>
            {data.liked ? (
              <LeafActiveSvg style={{ marginHorizontal: 8 }} />
            ) : (
              <LeafInactiveSvg style={{ marginHorizontal: 8 }} />
            )}
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Helvetica",
                color: "#000",
                marginLeft: 16
              }}
            >
              {data.comments}
            </Text>
            <CommentSvg style={{ marginHorizontal: 8 }} />
          </View>
          <ShareSvg />
        </View>
      </View>
    );
  }