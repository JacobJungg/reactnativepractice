import { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { Video } from "expo-av";

import { db, storage } from '../../firebaseConfig';
import EmptyState from "../../components/EmptyState";
import ProgressBar from "../../components/ProgressBar";


export default function HomeScreen() {
  return (
    <View>
      <EmptyState/>
      <ProgressBar progress={60}/>
    </View>
  );
}
