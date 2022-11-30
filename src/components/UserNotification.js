import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

function UserNotification() {
    return (
        <View style={styles.userNotificationContainer}>
            <Image source={require("../../assets/account.png")} style={styles.userNotificationAccountStyle} />{/* Touchable yapılabilir. */}

            <View style={styles.userNotificationTextContainerStyle}>

                <Text style={[styles.userNotificationTopTextStyle, styles.userNotificationHelloStyle]}>Merhaba,
                    <Text style={[styles.userNotificationTopTextStyle, styles.userNotificationNameStyle]}> Fatih Şimşek</Text>
                </Text>

                <Text style={styles.userNotificationBottomTextStyle}>Devam eden 35 görev bulunuyor. {"\n"}
                    <Text style={[styles.userNotificationBottomTextStyle, styles.userNotificationInvoiceQuantity]}>1 adet </Text> ödenmemiş faturanız bulunmaktadır.
                </Text>

            </View>


        </View>
    );
}

const styles = StyleSheet.create({

    userNotificationContainer: {
        width: "100%",
        height: "18%", //14
        flexDirection: "row",
        alignItems: "center",
    

    },
    userNotificationAccountStyle: {
        width: "20%",
        height: "100%",
       
    },
    userNotificationTextContainerStyle: {
      
        width: "80%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    
    },
    userNotificationTopTextStyle: {
        color: "blue",
        fontSize: 24,
       
    },
    userNotificationHelloStyle: {

        fontWeight: "800"

    },
    userNotificationNameStyle: {
        fontWeight: "400",

    },
    userNotificationBottomTextStyle: {
        color: "black", 
        fontSize: 14,
    },
    userNotificationInvoiceQuantity: {
        fontWeight: "800"
    }
})

export default UserNotification