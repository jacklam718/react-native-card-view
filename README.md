# React Native Card View
Only tested in IOS, but I think should works in Android too.

![Example](https://www.dropbox.com/s/44aildn3lhq9rik/react-native-card-view.gif?dl=1)

## Install
npm install --save react-native-card-view


## Example
##### <a href="https://github.com/jacklam718/react-native-card-view/blob/master/example/CardExample.js" target="_blank">Detailed example</a>

##### Quick example here
```javascript
import React, {Component} from 'react';
import {
  StyleSheet
} from 'react-native';

import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction
} from 'react-native-card-view';

import Button from 'react-native-button';

Class Example extends Component {
  render () {
    return (
      <Card>
        <CardTitle>
          <Text style={styles.title}>Card Title</Text>
        </CardTitle>
        <CardContent>
          <Text>Content</Text>
        </CardContent>
        <CardAction >
          <Button
            style={styles.button}
            onPress={() => {}}>
            Button 1
          </Button>
          <Button
            style={styles.button}
            onPress={() => {}}>
            Button 2
          </Button>
        </CardAction>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 38,
    backgroundColor: 'transparent'
  },
  button: {
    marginRight: 10
  }
});
```

## Override Component Styles
##### You can use you own style to override the following components style
- Card
- CardImage
- CardTitle
- CardContent
- CardAction

You just pass the styles as an object and the key same as the component name

##### Just like the following
```javascript
const card      = {card: {width: 300, height: 300}};
const cardTitle = {cardTitle: {fontSize: 40}}

<Card styles={card}></Card>
<CardTitle styles={cardTitle}></CardTitle>
```
