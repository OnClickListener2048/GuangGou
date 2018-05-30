/**
 *this is fucking created by wangxin in fucking 2018/5/30 bitches
 */

import React, {Component} from "react";
import {Text, View, Image, ScrollView, StyleSheet, Switch} from "react-native";
import {SCREEN_WIDTH} from "../../utils/Constant";

export default class SettingPage extends Component {

    static navigationOptions = ({navigation}) => {
        return ({
            title: 'Home',
            headerStyle: {
                backgroundColor: 'white',
            },
            headerTitle: "设置",
            headerTintColor: '#fff',
            headerTitleStyle: {
                flex: 1,
                fontSize: 20,
                width: SCREEN_WIDTH,
                alignSelf: "center",
                textAlign: "center",
                color: "black"
            },

            headerRight: (
                <View/>
            ),

            gesturesEnabled: true,
            headerBackImage: (<View style={{
                flexDirection: "row",
                justifyContent: "center",
                marginLeft: 10,
            }}>
                <Image source={{uri: "back", width: 20, height: 20}}/>
                <Text style={{
                    color: "black"
                }}>返回</Text>
            </View>)

        });

    };

    constructor(props) {
        super(props);

        this.renderRow = this.renderRow.bind(this);
        this.state={
            switchOn:false,
        }
    }

    renderRow(renderLeft = () => {
    }, renderRight = () => {
    }) {
        return (
            <View style={{flex: 1, marginTop: 5, marginBottom: 5, marginLeft: 10, flexDirection: "column"}}>
                <View style={{flex: 1, justifyContent: "space-between", flexDirection: "row", alignItems: "center"}}>
                    {renderLeft()}
                    {renderRight()}
                </View>

                <View style={{flex: 1, height: 1, width: SCREEN_WIDTH, backgroundColor: "gray", marginTop:5,}}/>
            </View>
        )
    }

    render() {
        return (
            <ScrollView style={style.container}>
                {this.renderRow(() => {
                    return ( <Text>淘宝天猫快捷下单</Text>)
                }, () => {
                    return ( <View>
                        <Switch value={this.state.switchOn} onValueChange={()=>this.setState({switchOn:!this.state.switchOn})}/>
                    </View>);
                })}

                {this.renderRow(() => {
                    return ( <Text>清理图片缓存</Text>)
                }, () => {
                    return (<Image style={{width: 10, height: 10, marginRight: 10}}
                                   source={{uri: "icon_cell_rightarrow"}}/>);
                })}
            </ScrollView>
        )
    }
};


const style = StyleSheet.create({
    container: {
        flex: 1
    },
});

