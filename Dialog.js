import React, { useState } from "react";
import {
  Alert,
  
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import Modal from 'modal-react-native-web';

const Dialog = () => {
  const [modalVisible, setModalVisible] = useState('');
  const [modalVisible2, setModalVisible2] = useState('');
  
  return (
    
    <View style={styles.centeredView}>


     <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Delete</Text>
      </TouchableHighlight>






    
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are You Sure You Want To Delete?</Text>
            <View style={{flexDirection:'row'}}>
            <TouchableHighlight
              style={ styles.openButton}
              onPress={() => {
                setModalVisible2(!modalVisible2),setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Yess</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.openButton}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>No</Text>
            </TouchableHighlight>
              
          </View>
          </View>
        </View>
      </Modal>




      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Deleted Items Will Not Be Recovered, Still Want To Delete?</Text>
            <View style={{flexDirection:'row'}}>
            <TouchableHighlight
              style={styles.openButton}
              onPress={() => {
                setModalVisible2(!modalVisible2);
              }}
            >
              <Text style={styles.textStyle}>No</Text>
            </TouchableHighlight>
              
              <TouchableHighlight
              style={styles.openButton}
              onPress={() => {
                setModalVisible2(!modalVisible2);
              }}
            >
              <Text style={styles.textStyle}>Yes</Text>
            </TouchableHighlight>
          </View>
          </View>
        </View>
      </Modal>
      
      





     
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width:100
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default Dialog;
