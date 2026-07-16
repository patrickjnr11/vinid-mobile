import React from "react";

import {

  Pressable,

  StyleSheet,

  Text,

  View,

} from "react-native";

import { Colors } from "../theme/colors";

import { Spacing } from "../theme/spacing";

import { Typography } from "../theme/typography";

interface BookingCardProps{

  service:string;

  provider:string;

  status:string;

  onPress:()=>void;

}

export default function BookingCard({

  service,

  provider,

  status,

  onPress,

}:BookingCardProps){

  return(

<Pressable

style={styles.card}

onPress={onPress}

>

<Text style={styles.service}>

{service}

</Text>

<Text style={styles.provider}>

{provider}

</Text>

<View style={styles.row}>

<Text style={styles.status}>

{status}

</Text>

<Text style={styles.view}>

View →

</Text>

</View>

</Pressable>

  );

}

const styles=StyleSheet.create({

card:{

backgroundColor:"#FFFFFF",

borderRadius:16,

padding:Spacing.lg,

marginBottom:Spacing.md,

elevation:2,

},

service:{

fontSize:Typography.fontSize.lg,

fontWeight:Typography.fontWeight.bold,

color:Colors.text,

marginBottom:6,

},

provider:{

fontSize:Typography.fontSize.md,

color:Colors.textSecondary,

marginBottom:Spacing.md,

},

row:{

flexDirection:"row",

justifyContent:"space-between",

alignItems:"center",

},

status:{

color:"#16A34A",

fontWeight:"600",

},

view:{

color:Colors.primary,

fontWeight:"700",

},

});