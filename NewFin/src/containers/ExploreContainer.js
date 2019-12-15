import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, FlatList,SafeAreaView,TouchableHighlight } from "react-native";
import colors from "../styles/colors";
import prettyTime from './PrettyTime';

const ExploreContainer = ({ navigation }) => {
  const [headlines, setHeadlines] = useState({});
  const category = "technology";
  const country = "tr";
  const API_KEY = "af4f5408d07041069c14a7c585b20fe9";
  const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`;
  
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    (await fetch(url)).json().then(res => setHeadlines(res));
  }
  
  function renderItem({ item }) {
    return (
      
<TouchableHighlight onPress={() => { navigation.navigate('NewsWebView', { url: item.url, title: item.title })}}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          padding: 10,
          borderBottom: 1,
          borderBottomWidth: 1,
          borderBottomColor: "#eee"
        }}
      >
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: item.urlToImage }}
        />
        <View style={{ flex: 1, paddingLeft: 10 }}>
          <Text style={{ flexWrap: "wrap" }}>{item.title}</Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end"
            }}
          >
            <Text>{item.source.name}</Text>
            <Text>{prettyTime(item.publishedAt)}</Text>
          </View>
        </View>
      </View>
      </TouchableHighlight>
    );
  }
  return (
<SafeAreaView style={styles.wrapper}>
    <FlatList
      data={headlines.articles}
      renderItem={renderItem}
      keyExtractor={(item) => item.title}
    />
  </SafeAreaView>
  );
};

ExploreContainer.navigationOptions = ({ navigation }) => ({
  title: `${navigation.state.params && navigation.state.params.category} Haberleri`
});


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white
  },
  
});

export default ExploreContainer;
