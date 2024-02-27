import { ActivityIndicator, StyleSheet,  TouchableOpacity,  View } from 'react-native'
import React from 'react'




export default function LoadingContainer({children, IsLoading, IndicatorColor, OnPress}:{children:React.ReactNode,IndicatorColor:string, IsLoading:boolean,OnPress: () => void}) {
  



  return (
    <TouchableOpacity onPress={()=>{OnPress()}}  >
      
      <View style={{ 
        
        justifyContent:'center', 
        alignItems:'center'}}>
      
        
        {IsLoading?
        <ActivityIndicator color={IndicatorColor}/>:
      children
        }
        
      </View>
      
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})