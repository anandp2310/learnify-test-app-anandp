import React from 'react';
import { View } from 'react-native';
import { Image } from 'native-base';

export default function Images(props: any) {
  return (
    <View style={props.containerStyle}>
      {props.src ? (
       
        // ?
       
        <Image
          alt={'Image'}
          size={props.size}
          style={props.style}
          width={props.width}
          height={props.height}
          resizeMode={props.resizeMode}
          borderRadius={props.borderRadius}
          source={{
            uri: props.src,
          }}
        />
      ) : (
        <Image
          alt={'Image'}
          size={props.size}
          style={props.style}
          width={props.width}
          source={props.source}
          height={props.height}
          resizeMode={props.resizeMode}
          borderRadius={props.borderRadius}
        />
      )}
    </View>
  );
}