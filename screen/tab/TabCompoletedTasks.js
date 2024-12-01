import { StyleSheet, Text, View } from 'react-native'
import ScrollLayout from '../../component/layout/ScrollLayout'
import MainHeader from '../../component/TabScreenComponents/MainHeader'
import {useAppContext} from '../../store/context'
const TabCompoletedTasks = () => {
  const {allCompletedTasks}=useAppContext()
  console.log(allCompletedTasks,allCompletedTasks.length,'User Completed Tasks'
  )

  return (
   <ScrollLayout title={'Completed Tasks'}>
    
   </ScrollLayout>
  )
}

export default TabCompoletedTasks

const styles = StyleSheet.create({})