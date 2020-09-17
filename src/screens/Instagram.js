/**
 * Instagram
 */

import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Text,
  FlatList,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Awesome from 'react-native-vector-icons/FontAwesome';
import feedData from '../datas/FeedData';

function Instagram() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.containerView}>
        <View style={styles.headerView}>
          <View style={styles.emptyView}></View>
          <Image
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png',
            }}
            style={styles.logoImage}
            resizeMode="contain"
          />
          <Feather name="send" style={styles.inboxIcon} size={30} color="black" />
        </View>
        <View style={styles.flatList}>
          <FlatList
            data={feedData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item, index}) => (
              <>
                <OneFeed
                  name={item.name}
                  image={item.image}
                  likeCount={item.likeCount}
                  avatar={item.avatar}
                />
                <FlatListItemSeparator />
              </>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

function OneFeed({name, image, likeCount, avatar}) {
  return (
    <View style={styles.oneFeed}>
      <View style={styles.avatarWrapper}>
        <Image source={avatar} resizeMode="cover" style={styles.avatarImage} />
        <Text style={styles.posterName}>{name}</Text>
      </View>
      <View style={styles.imageWrapper}>
        <Image source={image} resizeMode='contain' style={styles.imagePoster} />
      </View>
      <View style={styles.viewIcon}>
        <Feather name="heart" style={styles.inboxIcon} size={20} color="black" />
        <Feather
          name="message-square"
          style={styles.inboxIcon}
          size={20}
          color="black"
        />
        <Feather name="share" style={styles.inboxIcon} size={20} color="black" />
      </View>
      <View style={styles.viewLike}>
        <Awesome
          name="heart"
          style={styles.inboxIcon}
          size={15}
          color="brown"
          onPress={() => alert('Liked')}
        />
        <Text>{likeCount} like</Text>
      </View>
    </View>
  );
}

const FlatListItemSeparator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#efeff5',
  },
  containerView: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#efeff5'
  },

  // LOGO
  headerView: {
    backgroundColor: '#efeff5',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  emptyView: {
    marginLeft: 10,
    width: 30,
    aspectRatio: 1,
  },
  logoImage: {
    flex: 1,
    width: null,
    height: 40,
  },
  inboxIcon: {
    marginRight: 10,
  },

  // LIST:
  flatList: {
    flex: 1,
  },
  oneFeed: {
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  avatarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 8,
  },
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  posterName: {
    marginLeft: 12,
    fontSize: 15,
    color: 'black',
    fontWeight: '700'
  },
  imagePoster: {
    width: '100%',
    height: 300,
  },
  viewIcon: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 8,
  },
  viewLike: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 8,
  },
  separator: {
    height: 10,
    width: '100%',
  },
});

export default Instagram;
