import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import { Button, Input, ListItem } from "@rneui/base";

export default function App() {
  const [texts, setTexts] = useState([]);

  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setTexts((oldTexts) => [...oldTexts, input]);
    console.log(texts);
  };

  const Item = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Test App!</Text>
      <Input
        label={"Insert some text to save"}
        onChangeText={(text) => setInput(text)}
      />
      <Button title={"Save"} onPress={handleSubmit} />
      <FlatList
        style={styles.list}
        data={texts}
        renderItem={({ item }) => Item({ item })}
        keyExtractor={() => Math.random() * 100}
      />

      {/* {texts.map((text) => (
        // <ListItem>
        //   <ListItem.Content>
        //     <ListItem.Title>{text}</ListItem.Title>
        //   </ListItem.Content>
        // </ListItem>
        <Text>{text}</Text>
      ))} */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    padding: 30,
  },
  list: {
    padding: 15,
  },
  itemText: {
    padding: 5,
  },
});
