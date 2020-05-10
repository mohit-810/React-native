import React,{Component} from 'react'
import {  Text,FlatList } from 'react-native';
import {Card,ListItem} from 'react-native-elements';
import { LEADERS } from '../shared/leaders';
import { ScrollView } from 'react-native-gesture-handler';

class About extends Component{
    constructor(props){
        super(props);
        this.state={
            leaders:LEADERS
        }
    }
    static navigationOptions = {
        title: 'About Us',
    };
render(){
    const RenderLeaders = ({item, index}) => {

    return (
                    <ListItem
                            key={index}
                        title={item.name}
        subtitle={item.description}
        hideChevron={true}
        leftAvatar={{ source: require('./images/alberto.png')}}
    />

);

}

    return(
        <ScrollView>
        <Card title="Our History">
            <Text>
            Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.
            </Text>
           
        </Card>
        <Card title="Corporate Leadership">
        <FlatList 
                data={this.state.leaders}
                renderItem={RenderLeaders}
                keyExtractor={leader => leader.id.toString()}
                />
        </Card>
        </ScrollView>
    );
   
}
}
export default About;