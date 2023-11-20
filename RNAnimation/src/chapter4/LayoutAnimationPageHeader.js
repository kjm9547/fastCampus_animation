import {useState} from 'react';
import {LayoutAnimation, Platform, SafeAreaView, ScrollView, StatusBar, Text, UIManager, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
if(Platform.OS ==="android"){
    if(UIManager.setLayoutAnimationEnabledExperimental){
        UIManager.setLayoutAnimationEnabledExperimental(true)
    }
}
export default function LayoutAnimationPageHeader() {
  const [expanded, setExpanded] = useState(true);
  const onScroll = e => {
    console.log(e.nativeEvent.contentOffset.y);
    const y = e.nativeEvent.contentOffset.y;
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    if (y > 10) {
        
      setExpanded(false);
    } else {
      setExpanded(true);
    }
  };
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <ScrollView
        contentContainerStyle={{height: 1000}}
        onScroll={e => onScroll(e)}>
        {expanded ? (
          <View style={{backgroundColor: '#333'}}>
            <SafeAreaView style={{flexDirection: 'row'}}>
              <View
                style={{
                  backgroundColor: '#222',
                  marginLeft: 20,
                  marginRight: 20,
                  marginBottom: -10,
                  width: 60,
                  height: 60,
                  borderRadius: 60,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="preson" size={30} color="white" />
              </View>
              <View>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    marginBottom: 2,
                    marginTop: 8,
                  }}>
                  개발자 지렁이맨
                </Text>
                <Text style={{color: 'white'}}>힘이 들면 힘들내야지</Text>
              </View>
            </SafeAreaView>
          </View>
        ) : (
          <View
            style={{
              backgroundColor: '#333',
              height: 400,
              position: 'relative',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <View
              style={{
                position: 'absolute',
                bottom: -100,
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#222',

                  width: 160,
                  height: 160,
                  borderRadius: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="preson" size={100} color="#333" />
              </View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  marginBottom: 20,
                  marginTop: 20,
                }}>
                개발자 지렁이맨
              </Text>
              <Text style={{fontSize: 14}}>힘이 들면 힘들내야지</Text>
            </View>
          </View>
        )}
      </ScrollView>
    </>
  );
}
