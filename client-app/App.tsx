import React, { useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import { SearchBar } from 'react-native-elements';


import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Icon from 'react-native-vector-icons/FontAwesome5';
import "./global.css"
import Tmp from './comps/Tmp';


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { atom, useAtom, useAtomValue } from 'jotai';

const BG_COLOR = "#fcfcfc"

const AtomStore = atom({
  name: "lbaraka store",
  address: "Golf city, Plot 8, Sector 75",
  nearset: {
    uuid: "#HWDSF776567DS",
    status: "On the way",
    date: "24 June",
  },
})

// Screens
function HomeScreen() {
  const [atomStore, setAtomStore] = useAtom(AtomStore);
  return (
    <View style={{ flex: 1, backgroundColor: BG_COLOR }} className='gap-4'>
      <View className='w-full p-4 pb-4 gap-3' style={{ backgroundColor: "#2080e2" }}>
        <View className='flex-row'>
          <Image style={{ width: 40, height: 40 }} source={require("./icons/store.png")} />

          
          <View className='flex-1 items-center' >
            <View className='items-center flex-row justify-center'>
              <Text className='text-white'>{atomStore.name}  </Text>
              <Icon className='pt-1' name='angle-down' size={16} color={"white"} />
            </View>
            <Text className='opacity-70 text-white text-sm '>{atomStore.address}  </Text>

          </View>

          <View className='w-12 h-12 items-center justify-center rounded-full border border-white'>
            <Image style={{ width: 18, height: 18 }} source={require("./icons/bell.png")} />

          </View>

        </View>

        <Text className='self-center text-2xl font-medium text-white'> Your Shop, Always in Sync. </Text>

        <View className='bg-white rounded-xl flex-row p-4 justify-between relative z-10'>
          <View className='items-center gap-1'>
            <Image style={{ width: 32, height: 32 }} source={require("./icons/item1.png")} />
            <Text>Ai Advice</Text>
          </View>

          <View className='items-center gap-1'>
            <Image style={{ width: 32, height: 32 }} source={require("./icons/item2.png")} />
            <Text>Order</Text>
          </View>

          <View className='items-center gap-1'>
            <Image style={{ width: 32, height: 32 }} source={require("./icons/item3.png")} />
            <Text>Drop Off</Text>
          </View>

          <View className='items-center gap-1'>
            <Image style={{ width: 32, height: 32 }} source={require("./icons/item4.png")} />
            <Text>History</Text>
          </View>
        </View>



        <Image className='absolute bottom-0 right-0' source={require("./icons/bg.png")} />
        <Image className='absolute bottom-0 left-0' source={require("./icons/bg.png")} />
        <Image className='absolute bottom-0 left-1/2' source={require("./icons/bg.png")} />


      </View>

      <View className='px-4 gap-4'>
        <View className='gap-2'>
          <View className='flex-row  justify-between'>
            <Text className='text-[15px]' >Nearest Shipment</Text>
            <Text className='text-[15px]' style={{ color: "#2080e2" }}>View All</Text>
          </View>
          {ShipmentItem(atomStore)}


        </View>
      </View>

      <View className='px-4 gap-4 flex-1'>
        <View className='gap-2'>
          <View className='flex-row  justify-between'>
            <Text className='text-[15px]' >Low Stock</Text>
            <Text className='text-[15px]' style={{ color: "#2080e2" }}>View All</Text>
          </View>


        
          <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
            data={[1, 2, 3, 5, 4, 6, 7]}
            renderItem={({ item }) => {

              let rnd = (Math.random() * 100) > 80;
              return StockItem(rnd);
            }}/>

      </View>
      </View>
            <View className='h-[80px]'></View>
    </View>
  );
}

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });
function ShipmentItem({name, address} : any) {
  return <View className=' bg-white   rounded-lg border py-2 pb-4 gap-1 px-1 border-gray-100 '>
    <View className='flex-row items-center'>
      <Image className='w-[48px] h-[48px]' source={require("./icons/near.png")} />
      <View className='flex-row'>

        <View className='p-4'>
          <Text className='text-sm'>{"#HWDSF776567DS"}</Text>
          <Text className='text-sm'>{"On The Way"} . {"20 Mars"} </Text>
        </View>

      </View>


      <View className='flex-row gap-2 flex-1 justify-end '>
        <Image className='w-[32px] h-[32px]' source={require('./icons/temp.png')} />
        <Image className='w-[24px] h-[24px]' source={require('./icons/compass.png')} />
      </View>
    </View>


    <View>
      <View className='self-center h-4 items-center w-[100%]'>
        <Image className='w-[90%] h-4' source={require('./icons/track.png')} />
      </View>
      <View className='justify-between flex-row'>
        <View>
          <Text className='text-sm color-[#2080e2]'> From </Text>
          <Text className='text-sm'> elHarrach, Alger </Text>
        </View>

        <View>
          <Text className='text-sm color-[#e2961c]'> Estimated Time </Text>
          <Text className='text-sm'> 1h20min rest </Text>
        </View>

        <View>
          <Text className='text-sm color-[#2080e2]'> Destination </Text>
          <Text className='text-sm'> ELweaam, Sba </Text>
        </View>


      </View>
    </View>

  </View>;
}

function TrackingScreen() {
  const [atomHome, setAtomHome] = useAtom(AtomHome);


  return (
    <View className='bg-red-100 h-full'>
      <Text>asd</Text>
    <MapView
    style={styles.map}
    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
    region={{
      longitude: 28.0339,
      latitude: 1.6596,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    }}
  >
  </MapView>
  </View>

    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: BG_COLOR }}>
    //   <Text>Tracking Screen</Text>
    // </View>
  );
}

function StockScreen() {
  const [atomHome, setAtomHome] = useAtom(AtomHome);

  return  <View>


      <FlatList
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
        data={[1, 2, 3, 5, 4, 6, 7]}
        renderItem={({ item }) => {

          let rnd = (Math.random() * 100) > 80;
    return StockItem(rnd)
        }}
        keyExtractor={(item) => item.toString()}
      />
    </View>


}

function StockItem(rnd: boolean): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null {
  return <View className='m-2'>

    <View className='py-3  flex-row justify-between rounded-lg border-gray-100  bg-white  border p-1  items-center'>
      <View className='flex-row justify-between bg-white'>
        <Image className='w-[48] h-[48]' source={require('./icons/near.png')} />
        <View>
          <Text>Hamoud Bida</Text>
          <View className='flex-row gap-2'>
            <Text className={!rnd ? 'color-[#2080e2]' : '' + ` color-[#cc2b2b] text-[12px]`}>{rnd ? 'Out of Stock' : 'In Stock'} </Text>
            <Text className='color-[#ababab] text-[12px]'>{rnd ? '0' : (Math.random() * 15).toFixed()} item in stock</Text>
          </View>
        </View>
      </View>
      <Image className='w-[24] h-[24]' source={require('./icons/demand.png')} />

    </View>

  </View>;
}

function ShipmentScreen() {
  const [atomHome, setAtomHome] = useAtom(AtomHome);
  


  return (


    
     <View className='p-4'>
  <SearchBar 
  platform='android'
        placeholder="Search For Shipment..."
        onChangeText={() => {}}
        value={""}
      />

    <View className='mb-4'></View>
    <FlatList
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
      data={[1, 2, 3, 5, 4, 6, 7]}
      renderItem={({ item }) => {

        let rnd = (Math.random() * 100) > 80;
  return <View className='mb-4 '> { ShipmentItem('')} </View>
      }}
      keyExtractor={(item) => item.toString()}
    />
  </View>

  );
}


// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();

function MiddelNavItem({ children, onPress }: any) {
  return <TouchableHighlight
    underlayColor="white"

    style={{
      top: -24,
      justifyContent: 'center',
      alignContent: 'center',
      position: "absolute",
      // backgroundColor: BG_COLOR,
      width: 60,
      height: 60,
      alignSelf: 'center',
      borderRadius: 1000,
      alignItems: "center",
    }}
    onPress={onPress}>
    <View style={{
      justifyContent: 'center',
      alignContent: 'center',
      position: "absolute",
      backgroundColor: "#2080e2",
      width: 50,
      height: 50,
      alignSelf: 'center',
      borderRadius: 1000,
      alignItems: "center",

    }}>

      <View
        style={{
          top: 0,
          justifyContent: 'center',
          alignContent: 'center',
          position: "absolute",
          width: 50,
          height: 50,
          alignSelf: 'center',
          borderRadius: 100,
          alignItems: "center",
          borderWidth: 2,

          borderTopColor: BG_COLOR,
          borderBottomColor: "#ddd",
          borderLeftColor: "#ddd",
          borderRightColor: "#ddd",
        }}
      > </View>

      {children}
    </View>
  </TouchableHighlight>
}


function NavItem({ children, onPress }: any) {
  const [atomHome, setAtomHome] = useAtom(AtomHome);


  return <TouchableHighlight onPress={onPress}
    style={{
      alignContent: "center",
      justifyContent: "center",
      alignItems: "center",
      gap: 2,
      paddingTop: 4,
    }}
  >
    <View>

      <View style={{ position: "absolute", top: -7 }}>
        <Image source={require("./icons/selected.png")} />
      </View>

      {children}
    </View>
  </TouchableHighlight>
}

const AtomHome = atom("Home")

function App() {
  const [atomHome, setAtomHome] = useAtom(AtomHome);
  return (
    <NavigationContainer onStateChange={(state) => {
      if (state && state.index !== undefined) {
        const activeRoute = state.routes[state.index].name;
        setAtomHome(activeRoute); // Update the atom state when navigation changes
      }
    }}

    >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconSource;

            if (route.name === 'Home') {
              iconSource = !focused ? require('./icons/home.png') : require('./icons/home_filled.png'); // You might want a different "unfocused" home icon if you have one
            } else if (route.name === 'Tracking') {
              iconSource = require('./icons/compass.png')  // Or a different "unfocused" compass
            } else if (route.name === 'Stock') {
              iconSource = require('./icons/stock.png')
            } else if (route.name === 'Shipment') {
              iconSource = require('./icons/package.png')
            } else if (route.name === 'Scan') {  // Added the Scan route
              iconSource = require('./icons/scan.png')
            }
            return <Image source={iconSource} style={{ width: 19, height: 19 }} tintColor={focused ? "#2080e2" : "#667085"} /> // Adjust width and height as needed

          },

          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          elevation: 100,
          tabBarStyle: {
            position: "absolute",
            elevation: 25,
            borderTopRightRadius: 36,
            borderTopLeftRadius: 36,
            borderColor: BG_COLOR,
            height: 50,
            paddingTop: 0,
          }
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false, tabBarLabelStyle: { ...lableStyle.tabBarLabelStyle, color: atomHome != "Home" ? "#667085" : "#2080e2" }, }} />
        <Tab.Screen name="Tracking" options={{headerSearchBarOptions: {

        } , tabBarLabelStyle: { ...lableStyle.tabBarLabelStyle, color: atomHome != "Tracking" ? "#667085" : "#2080e2" } }} component={TrackingScreen} />
        <Tab.Screen name="Scan" component={HomeScreen}
          options={
            {
              tabBarLabelStyle: { display: 'none', ...lableStyle.tabBarLabelStyle },
              tabBarIcon: () => {
                let iconSource = require('./icons/scan.png');
                return <Image source={iconSource} style={{ width: 20, height: 20 }} />
              },
              tabBarButton: (props) => {
                return <MiddelNavItem {...props}></MiddelNavItem>
              }

            }
          }
        />
        <Tab.Screen name="Stock" options={{ headerSearchBarOptions : {}, headerShadowVisible: false,  tabBarLabelStyle: { ...lableStyle.tabBarLabelStyle, color: atomHome != "Stock" ? "#667085" : "#2080e2" } }} component={StockScreen} />
        <Tab.Screen
          options={{
            tabBarLabelStyle: { ...lableStyle.tabBarLabelStyle, color: atomHome != "Shipment" ? "#667085" : "#2080e2" },
          }}
          name="Shipment" component={ShipmentScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const lableStyle = StyleSheet.create({
  tabBarLabelStyle: {
    color: "#667085"
  }
})

export default App;
