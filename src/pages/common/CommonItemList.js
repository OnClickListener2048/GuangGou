/**
 *this is fucking created by wangxin in fucking 2018/5/29 bitches
 */


import React, {Component} from "react";
import {FlatList, ActivityIndicator, StyleSheet} from "react-native";
import MainPageItem from "../main/MainPageItem";

const CommonItemList = (props) => {

    const {
        refreshing = false,
        loadMore = false,
        data = [],
        onEndReached = () => {

        },
        onRefresh = () => {

        },
        renderHeader = () => {
            return null;
        },
        style = {},
        onItemPress = (id) => {
            props.navigation.navigate("MainPageItemDetailsPage", {url: 'https://guangdiu.com/api/showdetail.php' + '?' + 'id=' + id});
        },
    } = props;

    return (
        <FlatList contentContainerStyle={style}
                  data={data}
                  renderItem={({item}) => (<MainPageItem
                      image={item.image}
                      title={item.title}
                      name={item.mall}
                      id={item.id}
                      onPress={(id) => onItemPress(id)}
                  />)}
                  keyExtractor={(item) => item.id}
                  ListFooterComponent={() => {
                      return  <ActivityIndicator size="large" style={{
                          marginTop: 5,
                          marginBottom: 5
                      }}/>;
                  }}
                  onEndReached={onEndReached}
                  onRefresh={onRefresh}
                  refreshing={refreshing}
                  ListHeaderComponent={renderHeader}
                  onEndReachedThreshold={0.1}
        />
    );
};

const style = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
    },

    root: {},


});

export default CommonItemList;