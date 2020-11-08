import {StyleSheet} from "react-native";

export const Style = StyleSheet.create({
    mainMenuWrapper: {
        flex: 1,
        backgroundColor: '#191e20',
        paddingRight: 50,
        paddingLeft: 50,
    },
    buttonWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    holderWrapper: {
        flex: 3,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#294a66',
        minWidth: 220,
        padding: 10,
        marginBottom: 10
    },
    buttonText: {
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        color: '#ffffff',
        fontSize: 22,
    }
});
