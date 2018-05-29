/**
 *this is fucking created by wangxin in fucking 2018/5/28 bitches
 */


import React, {Component} from "react";


import {Dimensions, Modal, TouchableWithoutFeedback, View} from "react-native";

const {width = SCREEN_WIDTH, height = SCREEN_HEIGHT} = Dimensions.get("window");
import VerticalDrawer from "../main/VerticalDrawer";
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../../utils/Constant";

export default class TopHeaderModal extends Component {

    static defaultProps = {
        onItemPressReload: {},
        VerticalDrawerData: {},
    };



    state = {
        isVerticalDrawerAppears: false,
    };

    onVainPress = () => {
        this.setState({
            isVerticalDrawerAppears: false,
        });
    };

    onRequestClose = () => {
        this.setState({
            isVerticalDrawerAppears: false,
        });
        alert("onRequestClose");
    };

    onTitlePress = () => {
        this.setState({
            isVerticalDrawerAppears: true,
        });
    };


    render() {
        return (
            <Modal
                pointerEvents={"box-none"}
                animationType="none"
                transparent={true}
                visible={this.state.isVerticalDrawerAppears}
                onRequestClose={() => this.onRequestClose()}>
                <TouchableWithoutFeedback onPress={this.onVainPress}>
                    <View style={{
                        width: width,
                        height: height,
                    }}>
                        <VerticalDrawer
                            data={this.props.VerticalDrawerData}
                            onVainPress={this.onVainPress}
                            onItemPressReload={(item) => this.props.onItemPressReload(item)}
                        />
                    </View>
                </TouchableWithoutFeedback>


            </Modal>
        )
    }

}