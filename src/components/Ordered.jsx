import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Modal, TextInput, Button } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const FoodOrderScreen = () => {
    const navigation = useNavigation();
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState('Medium');
    const [additions, setAdditions] = useState({
        fries: false,
        corn: false,
        extraFries: false, // Added for extra fries toggle
    });
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedRating, setSelectedRating] = useState(0);
    const [feedback, setFeedback] = useState('');

    const handleRatingPress = (rating) => {
        setSelectedRating(rating);
    };

    const handleReviewSubmit = () => {
        setModalVisible(false);
        console.log(`Rating: ${selectedRating}, Feedback: ${feedback}`);
    };

    // Function to handle quantity changes
    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => quantity > 1 && setQuantity(quantity - 1);

    // Function to toggle additions
    const toggleAddition = (item) => {
        setAdditions((prev) => ({
            ...prev,
            [item]: !prev[item],
        }));
    };

    const total = 80 * quantity; // Assuming a fixed price for simplicity

    return (
        <ScrollView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/pizzacard.jpg')} style={styles.foodImage} />

                {/* Back Button */}
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('UserScreen')}>
                    <View style={{ width: 45, height: 45, borderRadius: 50, backgroundColor: '#fffffa' }}>
                        <MaterialCommunityIcons name="keyboard-backspace" size={29} color="black" style={{ padding: 7 }} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.reviewIcon} onPress={() => setModalVisible(true)}>
                    <View style={{ width: 45, height: 45, borderRadius: 50, backgroundColor: '#fffffa' }}>
                        <MaterialCommunityIcons name="star-outline" size={29} color="black" style={{ padding: 7 }} />
                    </View>
                </TouchableOpacity>

                {/* Delivery Info */}
                <View style={styles.deliveryInfoContainer}>
                    <Text style={styles.deliveryInfo}>20 - 25 min</Text>
                </View>
            </View>
            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Rate and Review</Text>

                        {/* Star Rating */}
                        <View style={styles.starContainer}>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <TouchableOpacity key={star} onPress={() => handleRatingPress(star)}>
                                    <MaterialCommunityIcons
                                        name={selectedRating >= star ? 'star' : 'star-outline'}
                                        size={40}
                                        color={selectedRating >= star ? '#f1c40f' : '#888'}
                                    />
                                </TouchableOpacity>
                            ))}
                        </View>

                        {/* Feedback Input */}
                        <TextInput
                            style={styles.input}
                            placeholder="Write your review here..."
                            value={feedback}
                            onChangeText={setFeedback}
                            multiline
                        />

                        {/* Submit Button */}
                        <Button title="Submit" onPress={handleReviewSubmit} color={'#ea0028'} />

                        {/* Cancel Button */}
                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                            <Text style={styles.cancelButton}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            

            {/* Food Name and Price */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <View>
                    <Text style={styles.foodName}>Peri Peri Pizza</Text>
                    <Text style={styles.restaurantName}>Chuck Donut Restaurant</Text>
                </View>
                <Text style={styles.price}>${total}</Text>
            </View>

            {/* Rating and Delivery */}
            <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>⭐ 4.7</Text>
                <Text style={styles.reviewsText}>(100 Reviews)</Text>

                <View style={styles.deliveryIconContainer}>
                    <MaterialCommunityIcons name="truck-outline" size={24} color="#888" />
                    <Text style={styles.deliveryText}>Free Delivery</Text>
                </View>
            </View>

            {/* Size Selection */}
            <Text style={styles.sectionTitle}>Size</Text>
            <View style={styles.sizeContainer}>
                {['Small', 'Medium', 'Large'].map((sizeOption) => (
                    <TouchableOpacity
                        key={sizeOption}
                        onPress={() => setSize(sizeOption)}
                        style={[
                            styles.sizeButton,
                            size === sizeOption && styles.sizeButtonSelected,
                        ]}
                    >
                        <Text style={styles.sizeButtonText}>{sizeOption}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Additions Selection */}
            <View style={styles.additionsLabelContainer}>
                <Text style={styles.additionsLabel}>Choose Additional</Text>
                <Text style={styles.additionsBonusLabel}>(Bonus)</Text>
            </View>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.additionsContainer}>
                <TouchableOpacity onPress={() => toggleAddition('fries')} style={styles.additionButton}>
                    <Text style={styles.additionText}>Potato Wedges</Text>
                    {additions.fries && <Text style={styles.additionSelected}>✓</Text>}
                </TouchableOpacity>

                <TouchableOpacity onPress={() => toggleAddition('corn')} style={styles.additionButton}>
                    <Text style={styles.additionText}>Corn on the Cob</Text>
                    {additions.corn && <Text style={styles.additionSelected}>✓</Text>}
                </TouchableOpacity>

                <TouchableOpacity onPress={() => toggleAddition('extraFries')} style={styles.additionButton}>
                    <Text style={styles.additionText}>Extra Fries</Text>
                    {additions.extraFries && <Text style={styles.additionSelected}>✓</Text>}
                </TouchableOpacity>
            </ScrollView>

            {/* Quantity Controls */}
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ height: 50, width: 120, backgroundColor: '#cfcfcf', borderRadius: 20, borderWidth: 1, borderColor: '#888' }}>
                    <View style={styles.quantityContainer}>
                        <TouchableOpacity onPress={decrementQuantity} style={styles.quantityButton}>
                            <Text style={styles.quantityButtonText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.quantityText}>{quantity}</Text>
                        <TouchableOpacity onPress={incrementQuantity} style={styles.quantityButton}>
                            <Text style={styles.quantityButtonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>


            {/* Add to Cart Button */}
            <TouchableOpacity style={styles.addToCartButton}>
                <Text style={styles.addToCartText}>Order Now!</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        padding: 20,
    },
    imageContainer: {
        position: 'relative',
    },
    foodImage: {
        width: '100%',
        height: 300,
        borderRadius: 20,
    },
    foodName: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    backButton: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 1,
    },
    reviewIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1,
    },
    price: {
        fontSize: 20,
        color: '#ea0028',
        fontWeight: 'bold',
    },
    restaurantName: {
        fontSize: 16,
        color: '#333',
    },
    deliveryInfoContainer: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: '#888',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    deliveryInfo: {
        color: '#fff',
        fontSize: 12,
    },
    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    ratingText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
    },
    reviewsText: {
        color: '#888',
        fontSize: 15,
        marginRight: 50
    },
    deliveryIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    deliveryText: {
        color: 'black',
        fontSize: 15,
        marginLeft: 5,
    },
    sectionTitle: {
        fontSize: 15,
        color: '#888',
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    sizeContainer: {
        flexDirection: 'row',
        width: '80%',
    },
    sizeButton: {
        padding: 10,
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        flex: 1,
        marginHorizontal: 5,
        alignItems: 'center',
    },
    sizeButtonSelected: {
        backgroundColor: '#ea0028',
    },
    sizeButtonText: {
        color: 'black',
    },
    additionsLabelContainer: {
        flexDirection: 'row',
        marginTop: 20,
        gap: 5,
    },
    additionsLabel: {
        color: '#888',
        fontWeight: 'bold',
        fontSize: 15,
    },
    additionsBonusLabel: {
        color: '#cfcfcf',
        fontSize: 15,
    },
    additionsContainer: {
        paddingVertical: 10,
        flexDirection: 'row',
    },
    additionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        width: 150, // Adjusted for better scroll experience
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        marginRight: 10,
    },
    additionText: {
        fontSize: 14,
        color: 'black',
    },
    additionSelected: {
        color: '#ea0028',
        fontSize: 18,
        marginLeft: 10,
    },
    quantityContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    quantityButton: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    quantityButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    quantityText: {
        marginHorizontal: 10,
        fontSize: 18,
    },
    addToCartButton: {
        backgroundColor: '#ea0028',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    addToCartText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        color: '#ea0028',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    starContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    input: {
        height: 100,
        width: '100%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        textAlignVertical: 'top',
    },
    cancelButton: {
        marginTop: 10,
        color: '#ea0028',
        textDecorationLine: 'underline',
    },
});

export default FoodOrderScreen;
