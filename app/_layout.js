import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#1e88e5',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: { backgroundColor: '#f5f5f5', height: 60 },
        headerStyle: { backgroundColor: '#1e88e5' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color }) => <FontAwesome size={26} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="historia"
        options={{
          title: 'História',
          tabBarIcon: ({ color }) => <FontAwesome size={26} name="book" color={color} />,
        }}
      />
      <Tabs.Screen
        name="pisantes"
        options={{
          title: 'Pisantes',
          tabBarIcon: ({ color }) => <FontAwesome size={26} name="shoe-prints" color={color} />,
        }}
      />
      <Tabs.Screen
        name="quadras"
        options={{
          title: 'Quadras',
          tabBarIcon: ({ color }) => <FontAwesome size={26} name="th-large" color={color} />,
        }}
      />
      <Tabs.Screen
        name="aboutme"
        options={{
          title: 'Sobre Mim',
          tabBarIcon: ({ color }) => <FontAwesome size={26} name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
