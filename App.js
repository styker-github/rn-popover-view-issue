import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Popover from 'react-native-popover-view';

function App() {
  return (
    <SafeAreaView>
      <Popover
        from={
          <TouchableOpacity>
            <Text>Press here to open popover!</Text>
          </TouchableOpacity>
        }>
        <View style={{height: 150}}>
          <ScrollView onScroll={event => console.log('hbvhbv', event)}>
            <View>
              {[...new Array(40)].map((item, index) => (
                <Text>{`${index}. Welcome to React native`}</Text>
              ))}
            </View>
          </ScrollView>
        </View>
      </Popover>
    </SafeAreaView>
  );
}

export default App;
