import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Style} from './main-menu.style';
import translate from "../../modules/translation/translation";

export class MainMenu extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={Style.mainMenuWrapper}>
                <View style={Style.holderWrapper}></View>
                <View style={Style.buttonWrapper}>
                    <TouchableOpacity style={Style.button}>
                        <Text style={Style.buttonText}>{translate.t('My cards')}</Text>
                    </TouchableOpacity>
                </View>
                <View style={Style.buttonWrapper}>
                    <TouchableOpacity style={Style.button}>
                        <Text style={Style.buttonText}> {translate.t('Settings')} </Text>
                    </TouchableOpacity>
                </View>
                <View style={Style.buttonWrapper}>
                    <TouchableOpacity style={Style.button}>
                        <Text style={Style.buttonText}> {translate.t('Info')} </Text>
                    </TouchableOpacity>
                </View>
                <View style={Style.holderWrapper}></View>
            </View>
        )
    }
}
