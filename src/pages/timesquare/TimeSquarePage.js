import React, {Component} from 'react';
import {
    Image,
    Text, TouchableOpacity,
    View,
    StyleSheet,
} from 'react-native';
import {SCREEN_WIDTH} from "../../utils/Constant";
import CommonItemList from "../common/CommonItemList";

export default class TimeSquarePage extends Component {

    static navigationOptions = ({navigation}) => {
        return ({
            title: 'Home',
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTitle: "小时风云榜",
            headerTintColor: '#fff',
            headerTitleStyle: {
                flex: 1,
                fontSize: 20,
                width: SCREEN_WIDTH,
                alignSelf: "center",
                textAlign: "center",
            },
            headerBackTitle: null,
            headerLeft: (<View/>),

            headerRight: (
                <TouchableOpacity onPress={() => navigation.navigate("SettingPage")}>
                    <Text style={{
                        color: "white",
                        marginRight: 10,
                        fontSize: 18,
                    }}>
                        设置
                    </Text>
                </TouchableOpacity>
            ),
            gesturesEnabled: true,
        });

    };

    state = {
        data: {},
        nextEnable: false,
        loaded: false,
        refreshing: false,
        lastEnable: false,
    };

    componentDidMount() {
        this.loadData();
    }


    loadData(date, hour) {
        let params = {};

        if (date) {
            params = {
                "date": date,
                "hour": hour,

            };
        }

        HTTPBase.get("http://guangdiu.com/api/getranklist.php", params)
            .then(response => {

                setTimeout(() => {
                    this.setState({
                        data: response,
                        nextEnable: response.hasnexthour !== "0",
                        loaded: true,
                        lastEnable: true,
                    });

                    const {
                        nexthourhour,
                        nexthourdate,
                        lasthourhour,
                        lasthourdate,
                    } = response;

                    this.nexthourhour = nexthourhour;
                    this.nexthourdate = nexthourdate;
                    this.lasthourhour = lasthourhour;
                    this.lasthourdate = lasthourdate;
                }, 100)
            })


    }


    render() {
        const {data = {}, loaded = false, lastEnable, nextEnable} = this.state;
        return (

            <View style={style.container}>
                {loaded ? <View style={style.listHeader}>
                    <Text style={{
                        fontSize: 15,
                    }}>
                        {`今日${data.rankhour}点档（${data.rankduring}）`}
                    </Text>
                </View> : null}

                <CommonItemList
                    data={data.data}
                    navigation={this.props.navigation}
                    refreshing={this.state.refreshing}
                    onRefresh={null}
                    renderFooter={null}
                />

                <View style={style.bottomView}>
                    <TouchableOpacity onPress={() => this.loadData(this.lasthourdate, this.lasthourhour)}
                                      disabled={!lastEnable}>
                        <Text style={{
                            color: lastEnable ? "green" : "gray",
                            fontSize: 15,
                        }}>
                            {"<上一小时"}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity disabled={!nextEnable}
                                      onPress={() => this.loadData(this.nexthourdate, this.nexthourhour)}>
                        <Text style={{
                            marginLeft: 20,
                            fontSize: 15,
                            color: nextEnable ? "green" : "gray",
                        }}>
                            {"下一小时>"}
                        </Text>
                    </TouchableOpacity>


                </View>
            </View>

        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },

    listHeader: {
        width: SCREEN_WIDTH,
        height: 40,
        backgroundColor: "rgba(239,239,239,0.5)",
        justifyContent: "center",
        alignItems: "center"
    },

    bottomView: {
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(239,239,239,0.5)",
        flexDirection: "row"
    }
});