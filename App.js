import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  //Dimensions,
  Switch,
  Platform,
  StatusBar,
} from 'react-native';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import globalStyle from './assets/styles/globalStyle';
import UserStory from './components/UserStory/UserStory';
import UserPost from './components/UserPost/UserPost';
import {scaleFontSize} from './assets/styles/scaling';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  const userStories = [
    {
      firstName: 'Joseph',
      id: 1,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Angel',
      id: 2,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'White',
      id: 3,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Olivier',
      id: 4,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Nata',
      id: 5,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Nicolas',
      id: 6,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Nino',
      id: 7,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Nana',
      id: 8,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Verneri',
      id: 9,
      profileImage: require('./assets/images/default_profile.png'),
    },
  ];

  const userPosts = [
    {
      firstName: 'Verneri',
      lastName: 'Lopperi',
      location: 'Boston, MA',
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
      id: 1,
    },
    {
      firstName: 'Jennifer',
      lastName: 'Wilson',
      location: 'Worcester, MA',
      likes: 1301,
      comments: 25,
      bookmarks: 70,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
      id: 2,
    },
    {
      firstName: 'Adam',
      lastName: 'Ondra',
      location: 'Worcester, MA',
      likes: 1501,
      comments: 225,
      bookmarks: 90,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
      id: 3,
    },
    {
      firstName: 'Nata',
      lastName: 'Vates',
      location: 'New York, NY',
      likes: 120,
      comments: 15,
      bookmarks: 20,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
      id: 4,
    },
    {
      firstName: 'Nicholas',
      lastName: 'Namoradze',
      location: 'Berlin, Germany',
      likes: 2000,
      comments: 32,
      bookmarks: 22,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
      id: 5,
    },
  ];

  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const userPostsPageSize = 2;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

  //const [isOn, setIsOn] = useState(false);
  console.log(Platform);

  //const [screenData, setScreenData] = useState(Dimensions.get('screen'));
  //console.log(screenData);

  const pagination = (database, currentPage, pageSize) => {
    //console.log('currentpage', currentPage);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData);
    setIsLoadingUserStories(false);

    setIsLoadingUserPosts(true);
    const getInitialDataPosts = pagination(userPosts, 1, userPostsPageSize);
    setUserPostsRenderedData(getInitialDataPosts);
    setIsLoadingUserPosts(false);

    /*Dimensions.addEventListener('change', result => {
      setScreenData(result.screen);
      console.log('RESULT', result);
    });*/
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaView>
        <StatusBar backgroundColor={'red'} barStyle={'light-content'} />
        {/*<View
        style={{
          backgroundColor: 'red',
          height: screenData.height / 2,
          width: screenData.width / 2,
        }}
      />*/}
        <View>
          <FlatList
            ListHeaderComponent={
              <>
                <View style={globalStyle.header}>
                  <Title title="Let’s Explore" />
                  <TouchableOpacity style={globalStyle.messageIcon}>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size={scaleFontSize(20)}
                      color="#898DAE"
                    />
                    <View style={globalStyle.messageNumberContainer}>
                      <Text style={globalStyle.messageNumber}>2</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                {/*<View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                }}>
                <Switch
                  value={isOn}
                  style={
                    Platform.OS === 'android' && {
                      transform: [{scaleX: 1.5}, {scaleY: 1.5}],
                    }
                  }
                  ios_backgroundColor={'#000'}
                  trackColor={
                    Platform.OS === 'android' && {false: 'grey', true: 'red'}
                  }
                  onValueChange={value => setIsOn(value)}
                />
                </View>*/}
                <View style={globalStyle.userStoryContainer}>
                  <FlatList
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                      if (isLoadingUserStories) {
                        return;
                      }
                      setIsLoadingUserStories(true);
                      const contentToAppend = pagination(
                        userStories,
                        userStoriesCurrentPage + 1,
                        userStoriesPageSize,
                      );
                      if (contentToAppend.length > 0) {
                        setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                        setUserStoriesRenderedData(prev => [
                          ...prev,
                          ...contentToAppend,
                        ]);
                      }
                      setIsLoadingUserStories(false);
                    }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={userStoriesRenderedData}
                    renderItem={({item}) => (
                      <UserStory
                        key={'userStory' + item.id}
                        firstName={item.firstName}
                        profileImage={item.profileImage}
                      />
                    )}
                  />
                </View>
              </>
            }
            onEndReachedThreshold={0.5} //when half of the downloaded content is loaded we do something
            onEndReached={() => {
              if (isLoadingUserPosts) {
                return; //if already loading then do nothing
              }
              setIsLoadingUserPosts(true);
              const contentToAppend = pagination(
                userPosts,
                userPostsCurrentPage + 1,
                userPostsPageSize,
              );
              if (contentToAppend.length > 0) {
                setUserPostsCurrentPage(userPostsCurrentPage + 1);
                setUserPostsRenderedData(prev => [...prev, ...contentToAppend]);
              }
              setIsLoadingUserPosts(false);
            }}
            showsVerticalScrollIndicator={false}
            data={userPostsRenderedData}
            renderItem={({item}) => (
              <View style={globalStyle.userPostContainer}>
                <UserPost
                  firstName={item.firstName}
                  lastName={item.lastName}
                  image={item.image}
                  likes={item.likes}
                  comments={item.comments}
                  bookmarks={item.bookmarks}
                  profileImage={item.profileImage}
                  location={item.location}
                />
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
