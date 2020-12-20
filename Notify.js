import React from "react";
import { View, Button } from "react-native";

import { showMessage, hideMessage } from "react-native-flash-message";


function popUp(){

    var msg={message:'Hello',type:'info',color: "white",type:'success',icon: { icon: "auto", position: "left" },
    color: "#606060"};
    
    showMessage(msg, 12000);

}

const Notify=()=> {
 
    return (
      <View style={{ flex: 1 }}>
        <Button
          onPress={setTimeout(popUp,3000)}
          title="Request Details"
          color="#841584"
        />
      </View>
    );
  
}


export default Notify;