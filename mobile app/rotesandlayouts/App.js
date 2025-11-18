import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const openLink = async (url) => {
    try {
      await Linking.openURL(url);
    } catch (err) {
      console.warn('Failed to open URL:', err);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.container}>

        <Text style={styles.name}>Shreyas Gowda</Text>
        <Text style={styles.title}>Creator • Engineer • Educator</Text>

        <Text style={styles.bio}>
          Building things that help students learn beyond college. I create
          content about engineering education, careers, and building real-world
          skills. Let's build, learn, and grow together.
        </Text>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Ionicons name="mail-outline" size={18} />
            <Text style={styles.buttonText}>Message</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.primary]} onPress={() => {}}>
            <Ionicons name="person-add-outline" size={18} color="white" />
            <Text style={[styles.buttonText, { color: 'white' }]}>Follow</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.links}>
          <TouchableOpacity style={styles.linkItem} onPress={() => openLink('https://github.com/VishwanathArchakMR')}>
            <Ionicons name="logo-github" size={20} />
            <Text style={styles.linkText}>GitHub</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.linkItem} onPress={() => openLink('https://www.linkedin.com/in/')}>
            <Ionicons name="logo-linkedin" size={20} color="#0A66C2" />
            <Text style={styles.linkText}>LinkedIn</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.linkItem} onPress={() => openLink('https://www.youtube.com/channel/')}>
            <Ionicons name="logo-youtube" size={20} color="#FF0000" />
            <Text style={styles.linkText}>YouTube</Text>
          </TouchableOpacity>
        </View>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { flexGrow: 1 },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#eee',
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
  },
  title: {
    fontSize: 14,
    color: '#666',
    marginTop: 6,
  },
  bio: {
    marginTop: 12,
    textAlign: 'center',
    color: '#444',
    lineHeight: 20,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
    justifyContent: 'space-around',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  primary: {
    backgroundColor: '#111',
    borderColor: '#111',
  },
  buttonText: {
    marginLeft: 8,
    fontWeight: '600',
  },
  links: {
    marginTop: 28,
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 18,
  },
  linkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  linkText: {
    marginLeft: 12,
    fontSize: 16,
  },
});