import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import friescard from '../assets/friescard.jpg'; // Ensure the correct path
import eggcard from '../assets/eggcard.jpg'; // Ensure the correct path
import pizzacard from '../assets/pizzacard.jpg';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SavedOrder = () => {
    const navigation = useNavigation();
    // Initial items in the order
    const [items, setItems] = useState([
        { id: 1, name: 'Fresh Fries', price: 5, quantity: 1, image: friescard },
        { id: 2, name: 'Scrambled Eggs', price: 3, quantity: 1, image: eggcard },
        { id: 3, name: 'Peri Pizza', price: 12, quantity: 1, image: pizzacard },
    ]);

    const incrementQuantity = (id) => {
        setItems(items.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const decrementQuantity = (id) => {
        setItems(items.map(item =>
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ));
    };

    const calculateTotal = () => {
        return items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
    };

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>${item.price}</Text>
            </View>
            <View style={styles.counterContainer}>
                <TouchableOpacity onPress={() => decrementQuantity(item.id)} style={styles.counterButton}>
                    <Text style={styles.counterButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.counterText}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => incrementQuantity(item.id)} style={styles.counterButton}>
                    <Text style={styles.counterButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.backButton}>
                <TouchableOpacity style={{ width: 45, height: 45 }} onPress={() => navigation.navigate('UserScreen')}>
                    <MaterialCommunityIcons name="keyboard-backspace" size={29} color="black" />
                </TouchableOpacity>
                    <Text style={styles.headerText}>Review & Order</Text>
            </View>
            <View style={styles.separator}>
                <View style={styles.redLine} />
                <View style={styles.RepeatButton}>
                    {/* <FontAwesome name="user" size={24} color="black" style={styles.RepeatIcon} /> */}
                    <Text style={styles.RepeatButtonText}>Your Past Orders</Text>
                </View>
            </View>
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
            <View style={styles.totalContainer}>
               <View style={{flexDirection: 'row', justifyContent: 'space-between',marginBottom: 5}}>
                    <Text style={styles.totalText}>Total:</Text>
                    <Text style={styles.totalText}>${calculateTotal()}</Text>
               </View>
                <TouchableOpacity style={styles.orderButton}>
                    <Text style={styles.orderButtonText}>Repeat Order!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        padding: 20,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center', // Vertically centers items in the row
        marginBottom: 5 // Space below the header
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 15
    },
    separator: {
        marginBottom: 20, // Space below the separator
        // alignItems: 'center',
    },
    redLine: {
        width: 'auto',
        height: 2,
        backgroundColor: 'red',
    },
    repeatOrdersText: {
        padding: 15,
        fontSize: 20,
        fontWeight: 'semibold',
        color: 'black',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 3,
    },
    itemImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    itemDetails: {
        flex: 1,
        marginLeft: 10,
    },
    itemName: {
        fontSize: 18,
        fontWeight: '600',
    },
    itemPrice: {
        fontSize: 16,
        color: '#888',
    },
    counterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    counterButton: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    counterButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    counterText: {
        marginHorizontal: 10,
        fontSize: 18,
    },
    totalContainer: {
        // flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 20,
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    orderButton: {
        backgroundColor: '#ea0028',
        padding: 15,
        borderRadius: 25,
    },
    orderButtonText: {
        alignSelf: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    },
    RepeatButton: {
        marginTop: 10,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#ff8d00',
        borderRadius: 10,
        width: '100%',
        height: 50,
        justifyContent: 'center',
    },
    RepeatButtonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10, 
    },
    RepeatIcon: {
        alignSelf: 'center',
    },
});

export default SavedOrder;
