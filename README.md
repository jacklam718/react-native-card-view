# React Native Card View
Only tested in IOS, but I think should works in Android too.

# Install:
npm install --save react-native-card-view


# Example:
### <a href="https://github.com/jacklam718/react-native-card-view/blob/master/example/CardExample.js" target="_blank">Detailed example</a>

### Quick example
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
