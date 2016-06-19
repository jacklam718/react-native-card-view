import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';

import Button from 'react-native-button';

import {
  Card,
  CardTitle,
  CardImage,
  CardContent,
  CardAction
} from 'react-native-card-view';

export default class CardExample extends Component {

  _renderTitle (title) {
    return (
      <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
        <Text style={{fontSize: 20}}>{title}</Text>
      </View>
    )
  }

  render () {
    return (
      <ScrollView>
        <View style={styles.container}>
          {this._renderTitle('Basic')}
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

          {this._renderTitle('Fix Width = 300')}
          <Card styles={{card: {width: 300}}}>
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

          {this._renderTitle('Card Image + Card Title + Card Content + Card Action')}
          <Card>
            <CardImage>
              <Image
                style={{width: 300, height: 200}}
                source={{uri: 'https://getmdl.io/assets/demos/image_card.jpg'}}
              />
            </CardImage>
            <CardTitle>
              <Text style={styles.title}>Card Title</Text>
            </CardTitle>
            <CardContent>
              <Text>Content</Text>
              <Text>Content</Text>
              <Text>Content</Text>
              <Text>Content</Text>
              <Text>Content</Text>
              <Text>Content</Text>
            </CardContent>
            <CardAction separator>
              <Button
                style={styles.button}
                onPress={() => {}}>
                Button 1
              </Button>
              <Button
                style={styles.button}
                styleDisabled={{color: 'red'}}
                onPress={() => {}}>
                Button 2
              </Button>
            </CardAction>
          </Card>

          {this._renderTitle('Card Image')}
          <Card>
            <CardImage>
              <Image
                style={{width: 256, height: 256}}
                source={{uri: 'https://getmdl.io/assets/demos/image_card.jpg'}}
              >
                <Text style={[styles.title, {alignSelf: 'center'}]}>Beautiful Girl</Text>
              </Image>
            </CardImage>
          </Card>

          {this._renderTitle('Card Image')}
          <Card>
            <CardImage>
              <Image
                style={{width: 256, height: 256}}
                source={{uri: 'https://static.pexels.com/photos/59523/pexels-photo-59523.jpeg'}}
              />
            </CardImage>
          </Card>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    marginBottom: 60
  },
  title: {
    fontSize: 38,
    backgroundColor: 'transparent'
  },
  button: {
    marginRight: 10
  },
  card: {
    width: 300
  }
});
