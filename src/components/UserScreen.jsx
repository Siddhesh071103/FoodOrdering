import { StyleSheet, Text, Image, View, ImageBackground, TextInput, TouchableOpacity, ScrollView, Modal, Alert } from 'react-native';
import React, { useRef, useEffect, useState } from 'react';
import person from '../assets/profile.jpg';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';
import delivery from '../assets/delivery.png';
import card2 from '../assets/card2.jpg';
import card3 from '../assets/card3.jpg';
import card4 from '../assets/card4.jpg';
import egg from '../assets/egg.jpg';
import fish from '../assets/fish.jpg';
import fries from '../assets/fries.jpg';
import pizza from '../assets/pizza.jpg';
import burger from '../assets/burger.jpg';
import barbeques from '../assets/barbeques.jpg';
import meat from '../assets/meat.jpg';
import tacco from '../assets/tacco.jpg';
import pizzacard from '../assets/pizzacard.jpg'
import burgercard from '../assets/burgercard.jpg'
import meatcard from '../assets/meatcard.jpg';
import tacocard from '../assets/tacocard.jpg';
import friescard from '../assets/friescard.jpg';
import eggcard from '../assets/eggcard.jpg';
import fishcard from '../assets/fishcard.jpg';
import barbcard from '../assets/barbcard.jpg';

const UserScreen = () => {
    let scrollPosition = 0;
    const dishes = [
        { id: 'periPeriPizza', name: 'Peri Peri Pizza', image: pizzacard, price: '$12', rating: '⭐⭐⭐⭐' },
        { id: 'macBurger', name: 'Mac Burger', image: burgercard, price: '$8', rating: '⭐⭐⭐⭐' },
        { id: 'meat', name: 'Grilled Meat', image: meatcard, price: '$15', rating: '⭐⭐⭐⭐' },
        { id: 'taco', name: 'Taco Fiesta', image: tacocard, price: '$10', rating: '⭐⭐⭐⭐⭐' },
        { id: 'fries', name: 'Crispy Fries', image: friescard, price: '$5', rating: '⭐⭐⭐⭐' },
        { id: 'egg', name: 'Boiled Egg', image: eggcard, price: '$3', rating: '⭐⭐⭐' },
        { id: 'fish', name: 'Grilled Fish', image: fishcard, price: '$15', rating: '⭐⭐⭐⭐' },
        { id: 'barb', name: 'Paneer Barb', image: barbcard, price: '$10', rating: '⭐⭐⭐⭐⭐' },
        { id: 'cheesePizza', name: 'Cheese Pizza', image: pizzacard, price: '$8', rating: '⭐⭐⭐⭐⭐' },
        { id: 'mushroomPizza', name: 'Mushroom Pizza', image: pizzacard, price: '$8', rating: '⭐⭐⭐' },
        { id: 'volcanoPizza', name: 'Volcano Pizza', image: pizzacard, price: '$15', rating: '⭐⭐⭐⭐' },
    ];

    const [filterDishes, setFilteredDishes] = useState(dishes); // Now 'dishes' is defined
    const [likedDishes, setLikedDishes] = useState({});
    const navigation = useNavigation();
    const specialOffersRef = useRef(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState(null);

    const applyFilter = () => {

        const getRatingValue = (rating) => {
            return rating.split('⭐').length - 1; // Convert star rating to a numerical value
        };

        // Initial filtering based on the search query
        let newFilteredDishes = filterDishes.filter(dish =>
            dish.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        // Conditional sorting based on selectedFilter
        if (selectedFilter === 'price') {
            newFilteredDishes.sort((a, b) =>
                parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''))
            );
        } else if (selectedFilter === 'rating') {
            newFilteredDishes.sort((a, b) =>
                getRatingValue(b.rating) - getRatingValue(a.rating) // Sort by numeric rating
            );
        } 

        // sortedDishes now contains the filtered and sorted results
        const sortedDishes = newFilteredDishes;


        setFilteredDishes(newFilteredDishes);
        setModalVisible(false);
    };

    const sortedDishes = filterDishes.filter(dish =>
        dish.name.toLowerCase().includes(searchQuery.toLowerCase())
    ).sort((a, b) => {
        if (a.name.toLowerCase() === searchQuery.toLowerCase()) return -1;
        if (b.name.toLowerCase() === searchQuery.toLowerCase()) return 1;
        return 0;
    });

    const toggleHeart = (dishName) => {
        setLikedDishes(prevState => ({
            ...prevState,
            [dishName]: !prevState[dishName],
        }));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            scrollPosition += 300; // Adjust based on card width
            if (specialOffersRef.current) {
                specialOffersRef.current.scrollTo({ x: scrollPosition, animated: true });
            }
            if (scrollPosition > 600) { // Adjust based on total scrollable width
                scrollPosition = 0; // Reset to the first card
            }
        }, 3000); // Auto-scroll every 3 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    const filteredDishes = dishes.filter(dish =>
        dish.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <ImageBackground source={require('../assets/mainbg.jpg')} style={styles.background}>
            <View style={styles.container}>
                <View style={styles.profile}>
                    <Image source={person} style={styles.compimage} />
                    <View style={styles.texts}>
                        <Text style={styles.textstyle}>Hello User 👋</Text>
                        <Text style={styles.locstyle}>Thane, Maharashtra</Text>
                    </View>
                </View>
                <View style={styles.question}>
                    <Text style={styles.qtext}>What would you like</Text>
                    <Text style={styles.qtext}>to eat today ??</Text>
                </View>
                <Image source={delivery} style={styles.deliveryboy} />

                {/* Search Input with Icon and Filter Icon beside */}
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <View style={styles.searchContainer}>
                        <View style={styles.inputContainer}>
                            <Feather name="search" size={20} color="gray" style={styles.searchIcon} />
                            <TextInput
                                placeholder='Search for your cravings'
                                placeholderTextColor={"grey"}
                                style={styles.input}
                                value={searchQuery} // Bind value to state
                                onChangeText={setSearchQuery} // Update state on text change
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.filterIconContainer} onPress={() => setModalVisible(true)}>
                        <View style={styles.filterIconBackground}>
                            <Ionicons name="options-outline" size={25} color="black" />
                        </View>
                    </TouchableOpacity>

                    {/* Modal for filter options */}
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={isModalVisible}
                        onRequestClose={() => setModalVisible(false)}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <Text style={styles.modalTitle}>Select a Filter</Text>
                                <TouchableOpacity onPress={() => { setSelectedFilter('price'); applyFilter(); }}>
                                    <Text style={styles.modalOption}>Price</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { setSelectedFilter('rating'); applyFilter(); }}>
                                    <Text style={styles.modalOption}>Rating</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setModalVisible(false)}>
                                    <Text style={styles.modalClose}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>

                {/* Wrap cards and Categories in one view to ensure proper positioning */}
                <ScrollView style={styles.verticalScroll}>
                <View>
                    <View style={{ padding: 15 }}>
                        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 20 }}>Special Offers</Text>
                    </View>

                    {/* Horizontal Scrollable Cards for Special Offers */}
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        ref={specialOffersRef}
                        style={styles.cardScrollView}
                    >
                        <TouchableOpacity>
                            <Image source={card2} style={styles.card} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={card3} style={styles.card} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={card4} style={styles.card} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={card2} style={styles.card} />
                        </TouchableOpacity>
                    </ScrollView>

                    {/* Categories Text directly below the cards */}
                    <View style={{ padding: 15 }}>
                        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 20 }}>Categories</Text>
                    </View>

                    {/* Horizontal Scrollable Cards for Categories */}
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={styles.cardScrollView}
                    >
                        <TouchableOpacity style={styles.catContainer}>
                            <Image source={pizza} style={styles.catcard} />
                            <Text style={styles.catText}>Pizza</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.catContainer}>
                            <Image source={fries} style={styles.catcard} />
                            <Text style={styles.catText}>Fries</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.catContainer}>
                            <Image source={tacco} style={styles.catcard} />
                            <Text style={styles.catText}>Taco</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.catContainer}>
                            <Image source={meat} style={styles.catcard} />
                            <Text style={styles.catText}>Meat</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.catContainer}>
                            <Image source={burger} style={styles.catcard} />
                            <Text style={styles.catText}>Burger</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.catContainer}>
                            <Image source={fish} style={styles.catcard} />
                            <Text style={styles.catText}>Fish</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.catContainer}>
                            <Image source={barbeques} style={styles.catcard} />
                            <Text style={styles.catText}>Barb</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.catContainer}>
                            <Image source={egg} style={styles.catcard} />
                            <Text style={styles.catText}>Egg</Text>
                        </TouchableOpacity>
                    </ScrollView>

                        <View style={{ padding: 15 }}>
                            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 20 }}>Popular Dishes</Text>
                        </View>

                        {/* Map over dishes array to render each dish */}
                        <View style={styles.popularDishesContainer}>
                            {sortedDishes.map((dish) => (
                                <TouchableOpacity key={dish.id} style={styles.popularDishCard} onPress={() => navigation.navigate('Ordered')}>
                                    <View>
                                        <Image source={dish.image} style={styles.popularDishImage} />
                                        <TouchableOpacity
                                            style={styles.heartIconOnDish}
                                            onPress={() => toggleHeart(dish.id)}
                                        >
                                            <FontAwesome
                                                name={likedDishes[dish.id] ? 'heart' : 'heart-o'}
                                                size={25}
                                                color={likedDishes[dish.id] ? 'red' : 'white'}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.cardFooter}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
                                            <Text style={styles.foodName}>{dish.name}</Text>
                                            <Text style={styles.foodCost}>{dish.price}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
                                            <Text style={styles.foodRating}>{dish.rating}</Text>
                                            <TouchableOpacity>
                                                <FontAwesome name="plus-square-o" size={28} color="white" />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                </View>
                </ScrollView>
                <View style={styles.fixedIconContainer}>
                    <TouchableOpacity style={styles.repeatIconBackground} onPress={() => navigation.navigate('SavedOrder')}>
                        <FontAwesome6 name="repeat" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}

export default UserScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        flex: 1
    },
    profile: {
        flexDirection: 'row',
        padding: 20,
    },
    compimage: {
        borderWidth: 2,
        borderColor: '#ea0028',
        width: 55,
        height: 55,
        borderRadius: 50
    },
    texts: {
        marginLeft: 10,
        alignSelf: 'center'
    },
    textstyle: {
        fontSize: 17,
        color: 'black',
        fontWeight: 'bold'
    },
    locstyle: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold'
    },
    deliveryboy: {
        position: 'absolute',
        height: 200,
        width: 250,
        left: 220,
        marginTop: 20
    },
    question: {
        padding: 15,
        // marginTop: 20
    },
    qtext: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'black'
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 20,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ea0028',
        paddingHorizontal: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '85%',
    },
    searchIcon: {
        marginRight: 10
    },
    input: {
        flex: 1,
        height: 50,
        fontSize: 16,
        color: 'black',
    },
    filterIconContainer: {
        marginTop: 8,
        justifyContent: 'center',
        paddingLeft: 5,
    },
    filterIconBackground: {
        width: 55,
        height: 55,
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ea0028',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardScrollView: {
        marginTop: 5,
        marginLeft: 15
    },
    card: {
        width: 280,
        height: 125,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ea0028',
        marginRight: 15,
        resizeMode: 'cover',
    },
    catcard: {
        width: 75,
        height: 75,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#ea0028',
        marginRight: 15,
    },
    catContainer: {
        // alignItems: 'center', // Centers the content vertically
        // marginRight: 15, // Spacing between cards
    },
    catText: {
        fontWeight: 'bold',
        color: '#ea0028',
        marginTop: 2, 
        marginLeft: 18,
        width: '100%', 
    },
    popularDishesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginTop: 10,
    },
    popularDishCard: {
        width: '48%',  
        borderRadius: 15,
        overflow: 'hidden',
        backgroundColor: 'white',
    },
    popularDishImage: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
    },
    cardFooter: {
        backgroundColor: '#ea0028',
        height: 75,
        // alignItems: 'center',
    },
    foodName: {
        color: 'white',
        // fontWeight: 'bold',
        fontSize: 16,
    },
    foodCost: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    foodRating: {
        color: 'white',
        // marginTop: 5,
        padding: 5,
        fontSize: 10,
    },
    heartIconOnDish: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 10, 
    },
    heartIconOnDish: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 10, 
    },
    popularDishesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',  
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    popularDishCard: {
        width: '48%', 
        borderRadius: 15,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginBottom: 15,  
    },
    popularDishImage: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
    },
    cardFooter: {
        backgroundColor: '#ea0028',
        height: 75,
    },
    fixedIconContainer: {
        position: 'absolute',
        bottom: 20,  
        right: 20,   
        zIndex: 100, 
    },
    repeatIconBackground: {
        backgroundColor: '#ea0028',
        borderRadius: 50,   
        borderWidth: 1,
        borderColor: 'white',      
        padding: 15,               
        justifyContent: 'center',  
        alignItems: 'center',
        elevation: 5,               
        shadowColor: '#000',        
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    filterContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        marginVertical: 10,
    },
    filterInput: {
        height: 40,
        borderColor: '#ea0028',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        width: '100%',
    },
    filterPicker: {
        height: 40,
        width: '100%',
        marginBottom: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
        marginBottom: 10,
        color: '#ea0028'
    },
    modalOption: {
        fontSize: 18,
        color: 'black',
        paddingVertical: 10,
    },
    modalClose: {
        fontSize: 16,
        color: 'blue',
        marginTop: 20,
    },
});
