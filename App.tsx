import * as React from 'react';
import {SafeAreaView, Text, useWindowDimensions, View} from 'react-native';
import {Reader, ReaderProvider} from 'epubjs-react-native';

export default function App() {
  return (
    <SafeAreaView>
      <ReaderProvider>
        <Book />
      </ReaderProvider>
    </SafeAreaView>
  );
}

export function Book() {
  const {width, height} = useWindowDimensions();

  return (
    <View>
      <Reader
        onBeginning={() => {
          console.log('loading finished');
        }}
        onStarted={() => console.log('loading started')}
        src={{uri: 'https://s3.amazonaws.com/epubjs/books/moby-dick.epub'}}
        // src={{
        //   uri: 'https://s3.amazonaws.com/epubjs/books/moby-dick/OPS/package.opf',
        // }}
        width={width}
        height={height}
        onDisplayError={(reason: string) => console.log('reason', reason)}
        renderLoadingComponent={() => (
          <View
            style={{
              width: width,
              height: height,
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              backgroundColor: 'gray',
            }}>
            <Text>Loading...</Text>
          </View>
        )}
      />
    </View>
  );
}
