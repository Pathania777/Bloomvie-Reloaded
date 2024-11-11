import { View, Text, StyleSheet , SafeAreaView , Platform, Image} from "react-native";



const getTypeDetails = (type)=>
{

    switch(type.toLowerCase())
{
 case "electric":
    return { borderColor : "red", emoji: "💎"};
    case "water":
    return { borderColor : "orange", emoji: "🧶"};

    case "fire":
    return { borderColor : "green", emoji: "🧧"};

    case "glass":
    return { borderColor : "purple", emoji: "🎡"};
    default:
        return { borderColor : "grey", emoji: "🌂"};



}
};

export default function PokemonCard(
    {

        name,
        image,
        type,
        hp,
        moves,
        weakness
    }
) {

const {borderColor, emoji} = getTypeDetails(type);

    return(

        <View style= {styles.card}> 

                <View style= {styles.nameContainer}>

                            <Text style= {styles.nam}>{name}</Text>
                            <Text  style= {styles.hp} > ❤{hp}</Text>
                </View >
                <Image source={image} accessibilityLabel={`${name} pokemon`}  style={styles.image} resizeMode="contain" />

                <View style= {styles.typeContainer}>
                  <View style={[styles.badge, {borderColor}]}>
                  <Text style={styles.typeEmoji}>{emoji}</Text>
                  <Text style={styles.typeText}>{type}</Text>
                  </View>
                </View>

                <View style={styles.movesContainer}>
                    <Text style={styles.movestext}>
                           Moves : {moves.join(",")}
                    </Text>
                </View>

                <View style={styles.weaknessContainer}>
 
                <Text style={styles.weaknessText}>
                           Weakness : {weakness.join(",")}
                    </Text>
                </View>
          
        </View>
    
      );


}

const styles = StyleSheet.create({

  nameContainer:
  {
    flexDirection:'row',
    justifyContent: 'space-between',
    marginBottom: 34
  },
  nam:
  {
    fontSize: 30,
      fontWeight: 'bold'
  },

  hp:
  {
    fontSize: 22
  },
  image:
  {
   width: '100%',
   height:200,
   marginBottom :16
  },

  typeContainer:
  {
    marginBottom: 40,
    alignItems: 'center'

  },
  badge:
  {
 flexDirection: "row",
 alignItems: 'center',
 borderRadius: 20,
 paddingHorizontal: 12,
 borderWidth:4
  },

  typeEmoji:
  {
    fontSize:30,
    marginRight: 12,

  },
  typeText:
  {
    fontSize: 22,
    fontWeight: 'bold'
  }
,

movesContainer:{
marginBottom: 16
},
movestext:
{
fontSize: 22,
fontWeight: 'bold'
},

weaknessContainer:
{
marginBottom: 8
},
weaknessText:
{
fontSize:22,
fontWeight: 'bold'
},

   

   

    card:
    {
   flex: 1,
   backgroundColor : "#cdcdcd",
   borderRadius: 16,
   margin: 16,
   borderWidth: 2,
   padding: 16,

...Platform.select(
    {

        android:
        {
            elevation : 5
        },

        ios:
        {
           shadowOffset : {width: 2, height: 2} ,
           shadowColor: '#333',
           shadowOpacity :0.3,
           shadowRadius: 4

        }
    }
)
  
    }
  })