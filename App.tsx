import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import CoursesScreen from './src/screens/CoursesScreen';
import AddCourseScreen from './src/screens/AddCourseScreen';
import EditCourseScreen from './src/screens/EditCourseScreen';
import CourseDetailsScreen from './src/screens/CourseDetailsScreen';
import TimeTable from './src/screens/TimetableScreen';
import DevMenuScreen from './src/screens/DevMenuScreen'
import TaskScreen from './src/screens/TaskScreen';
import AddTaskScreen from './src/screens/AddTaskScreen';
import BottomTabs from './src/components/BottomTabs';
import TaskDetailsScreen from './src/screens/TaskDetailScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1e90ff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="Bottom Tabs"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Courses" component={CoursesScreen} />
        <Stack.Screen name="Add Course" component={AddCourseScreen} />
        <Stack.Screen name="Course Details" component={CourseDetailsScreen} />
        <Stack.Screen name="Edit Course" component={EditCourseScreen} />
        <Stack.Screen name="Timetable" component={TimeTable} />
        <Stack.Screen name="Task" component={TaskScreen} />
        <Stack.Screen name="Add Task" component={AddTaskScreen} />
        <Stack.Screen name="Task Details" component={TaskDetailsScreen} />
        {__DEV__ && (
          <Stack.Screen name="Dev Menu" component={DevMenuScreen} />
        )}
        {/* Other screens */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
