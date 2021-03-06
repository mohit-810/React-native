import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Dishdetail from './DishdetailComponent';
import { View,Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
// stack based navigation
const MenuNavigator=createStackNavigator({
  Menu:{screen:Menu},
  Dishdetail:{screen:Dishdetail}

},
{
  initialRouteName:'Menu',
  navigationOptions:{
    headerStyle: {
      backgroundColor:"#512DA8"
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        color: "#fff"            
    }
}
}
);
// stack navigator to use Draw


const HomeNavigator = createStackNavigator({
  Home: { screen: Home }
}, {
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
        backgroundColor: "#512DA8"
    },
    headerTitleStyle: {
        color: "#fff"            
    },
    headerTintColor: "#fff"  
  })
});
const ContactNavigator = createStackNavigator({
  Contact: { screen:Contact  }
}, {
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
        backgroundColor: "#512DA8"
    },
    headerTitleStyle: {
        color: "#fff"            
    },
    headerTintColor: "#fff"  
  })
});
const AboutNavigator = createStackNavigator({
  About: { screen:About  }
}, {
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
        backgroundColor: "#512DA8"
    },
    headerTitleStyle: {
        color: "#fff"            
    },
    headerTintColor: "#fff"  
  })
});
//DRaw navigation
const MainNavigator = createDrawerNavigator({
  Home: 
    { screen: HomeNavigator,
      navigationOptions: {
        title: 'Home',
        drawerLabel: 'Home '
      }
    },
  Menu: 
    { screen: MenuNavigator,
      navigationOptions: {
        title: 'Menu',
        drawerLabel: 'Menu'
      }, 
    },
    About: 
    { screen: AboutNavigator,
      navigationOptions: {
        title: 'About Us',
        drawerLabel: 'About Us'
      }, 
    },
    Contact: 
    { screen: ContactNavigator,
      navigationOptions: {
        title: 'Contact Us',
        drawerLabel: 'Contact Us'
      }, 
    }


}, {
drawerBackgroundColor: '#D1C4E9'
});
class Main extends Component {
 
  render() {
 
    return (
      <View style={{flex:1,paddingTop:Platform.OS==='ios' ? 0:Expo.Constants.statusBarHeight}}>
            <MainNavigator/>
        </View>
        
    );
  }
}
  
export default Main;