// Bài tập 1 về css
// import { useState } from "react";
// import { Button, StyleSheet, Text, View } from "react-native";

// export default function App() {
//   const [count, setCount] = useState(0);

//   const increaseCount = () => {
//     setCount(count + 1);
//   };

//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <Text style={styles.text}>Hello PNV23-React Native</Text>
//       <Button onPress={increaseCount} title="Increase Count"></Button>
//       <Text style={styles.count}>Count: {count}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: {
//     color: "#FF0000", // Red color
//     fontSize: 50,
//     fontStyle: "italic",
//   },
//   count: {
//     fontSize: 30,
//   },
// });






//Bài tập 2 về kéo, load lại trang
// import { useState } from "react";
// import {
//   RefreshControl,
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
// } from "react-native";

// export default function App() {
//   const [items, setItems] = useState([
//     { key: 1, item: "item 1" },
//     { key: 2, item: "item 2" },
//     { key: 3, item: "item 3" },
//     { key: 4, item: "item 4" },
//     { key: 5, item: "item 5" },
//     { key: 6, item: "item 6" },
//     { key: 7, item: "item 7" },
//     { key: 8, item: "item 8" },
//     { key: 9, item: "item 9" },
//     { key: 10, item: "item 10" },
//     { key: 11, item: "item 11" },
//     { key: 12, item: "item 12" },
//     { key: 13, item: "item 13" },
//   ]);

//   const [refreshing, setRefreshing] = useState(false);

//   const onRefresh = () => {
//     setRefreshing(true);
//     setItems([...items, { key: 14, item: "item 14" }]);
//     setRefreshing(false);
//   };

//   return (
//     <ScrollView
//       refreshControl={
//         <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
//       }
//       style={styles.container}
//     >
//       {items.map((item) => {
//         return (
//           <View style={styles.item} key={item.key}>
//             <Text style={styles.text}>{item.item}</Text>
//           </View>
//         );
//       })}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   text: {
//     color: "#FF0000", // Red color
//     fontSize: 50,
//     fontStyle: "italic",
//   },
//   item: {
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });





// text intput 
// import { useState } from "react";
// import { StyleSheet, Text, TextInput, View } from "react-native";

// export default function App() {
//   const [name, setName] = useState("");

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Text Input</Text>
//       <TextInput
//         onChangeText={(value) => setName(value)}
//         style={styles.input}
//         placeholder="Enter your Name"
//       />
//       <Text style={styles.text}>Name: {name}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   text: {
//     color: "#FF0000", // Red color
//     fontSize: 50,
//     fontStyle: "italic",
//     alignItems: "center",
//   },
//   item: {
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   input: {
//     width: 300,
//     height: 50,
//     borderWidth: 2,
//     borderRadius: 20,
//     borderColor: "#FF0000",
//     textAlign: "center",
//   },
// });






//Bài tập Todolist
// import { useState } from "react";
// import {
//     KeyboardAvoidingView,
//     StyleSheet,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     View,
// } from "react-native";
// import Task from "./components/Task";

// export default function App() {
//     const [task, setTask] = useState("");
//     const [tasks, setTasks] = useState([]);

//     const addTask = () => {
//         setTasks([...tasks, task]);
//         setTask(null);
//     };

//     const completeTask = (index) => {
//         let tasksCopy = [...tasks];
//         tasksCopy.splice(index, 1);
//         console.log(tasksCopy);
//         // setTasks(tasksCopy);
//     };

//     return (
//         <View style={styles.container}>
//             <View style={styles.taskWrapper}>
//                 <Text style={styles.sectionTitle}>Today's tasks</Text>
//                 <View style={styles.items}>
//                     {tasks.map((item, index) => {
//                         return (
//                             <TouchableOpacity
//                                 onPress={completeTask(index)}
//                                 key={index}
//                             >
//                                 <Task text={item} />
//                             </TouchableOpacity>
//                         );
//                     })}
//                 </View>
//             </View>
//             <KeyboardAvoidingView
//                 style={styles.writeTaskWrapper}
//                 behavior="height"
//             >
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Add new task ..."
//                     value={task}
//                     onChangeText={(text) => setTask(text)}
//                 />
//                 <TouchableOpacity onPress={addTask}>
//                     <View style={styles.addWrapper}>
//                         <Text>+</Text>
//                     </View>
//                 </TouchableOpacity>
//             </KeyboardAvoidingView>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#E8EAED",
//     },
//     taskWrapper: {
//         paddingTop: 80,
//         paddingHorizontal: 20,
//     },
//     items: {
//         marginTop: 20,
//     },
//     sectionTitle: {
//         fontSize: 24,
//         fontWeight: "bold",
//     },
//     input: {
//         paddingHorizontal: 15,
//         paddingVertical: 15,
//         backgroundColor: "#FFF",
//         borderRadius: 60,
//         width: 250,
//         borderWidth: 1,
//         borderColor: "#C0C0C0",
//     },
//     writeTaskWrapper: {
//         position: "absolute",
//         bottom: 60,
//         width: "100%",
//         flexDirection: "row",
//         justifyContent: "space-around",
//         alignContent: "center",
//     },
//     addText: {},
//     addWrapper: {
//         width: 60,
//         height: 60,
//         backgroundColor: "#FFF",
//         borderRadius: 60,
//         justifyContent: "center",
//         alignItems: "center",
//         borderColor: "#C0C0C0",
//         borderWidth: 1,
//     },
// });


// Bài tập về Hooks
// import { useState } from "react";
// import { View } from "react-native";

// function Test(){
//   const [count, setCount] = useState(0);
//   return (
//     <View>
//       <text> you clicked {count} times</text>
//       <button onPress ={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </View>
//   );
// }



//Quay lại bài tập dòng đầu tiên
// import { useState } from "react";
// import { Button, StyleSheet, Text, View } from "react-native";

// export default function App() {
//   const [count, setCount] = useState(0);

//   const increaseCount = () => {
//     setCount(count + 1);
//   };

//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <Text style={styles.text}>Hello PNV23-React Native</Text>
//       <Button onPress={increaseCount} title="Increase Count"></Button>
//       <Text style={styles.count}>Count: {count}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: {
//     color: "#FF0000", // Red color
//     fontSize: 50,
//     fontStyle: "italic",
//   },
//   count: {
//     fontSize: 30,
//   },
// });




import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function FirstScreen() {
  const[selectedValue, setSelectedValue] = useState('ltr');
  const values = ['ltr', 'rtl'];
  return(
    <View style={{padding: 10, flex: 1}}>
      <View style={styles.row}>
        {values.map(value => (
          <TouchableOpacity
            key={value}
            onPress={() => setSelectedValue (value)}
            style={[styles.button, selectedValue === value && styles.selected]}>
            <Text
              style={[
                styles.buttonLabel,
                selectedValue === value && styles.selectedLabel,
              ]}>
              {value}
            </Text>
          </TouchableOpacity>
         ))}
         </View>
         <View>
          <View style ={[selectedValue.container, {direction: selectedValue}]}>
            <View style={{width: 50, height: 50, backgroundColor:'#EE2C38'}} />
            <View style={{width: 50, height: 50, backgroundColor:'#FAA030'}} />
            <View style={{width: 50, height: 50, backgroundColor:'#32B76C'}} />
          </View>
         </View>
      </View>
  );

}

function SecondScreen() {
  const [position, setPosition] = useState('relative');
  const values = ['relative', 'absolute'];

  return (
    <View style={{padding: 10, flex: 1}}>
      <View style={styles.row}>
        {values.map(value => (
          <TouchableOpacity
            key={value}
            onPress={() => setPosition(value)}
            style={[styles.button, position === value && styles.selected]}>
            <Text
              style={[
                styles.buttonLabel,
                position === value && styles.selectedLabel,
              ]}>
              {value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.container}>
        <View
          style={[
            styles.box,
            {
              top: 25,
              left: 25,
              position,
              backgroundColor: 'powderblue',
            },
          ]}
        />
        <View
          style={[
            styles.box,
            {
              top: 50,
              left: 50,
              position,
              backgroundColor: 'skyblue',
            },
          ]}
        />
        <View
          style={[
            styles.box,
            {
              top: 75,
              left: 75,
              position,
              backgroundColor: 'steelblue',
            },
          ]}
        />
      </View>
    </View>
  );
}

function ThirdScreen() {
  const [justifyContent, setJustifyContent] = useState("flex-start");
  return (
    <PreviewLayout1
      label="justifyContent"
      selectedValue={justifyContent}
      values={[
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
      ]}
      setSelectedValue={setJustifyContent}
    >
      <View
        style={[styles.box, { backgroundColor: "powderblue" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "skyblue" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "steelblue" }]}
      />
    </PreviewLayout1>
  );
}
const PreviewLayout1 = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, { [label]: selectedValue }]}>
      {children}
    </View>
  </View>
);

   
      
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="direction" component={FirstScreen} />
      <Tab.Screen name="position" component={SecondScreen} />
      <Tab.Screen name="justifyContent" component={ThirdScreen} />
    </Tab.Navigator>
  );
}

const styles = {
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'grey',
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

