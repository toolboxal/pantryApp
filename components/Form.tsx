import { useState } from 'react'
import { Text, View, TextInput, StyleSheet, Pressable, Keyboard, TouchableWithoutFeedback, Modal } from 'react-native'
import { getLocales } from 'expo-localization';
import DateTimePicker from '@react-native-community/datetimepicker'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { pantryItemsInsertSchema } from '@/db/schema'
import { tv } from 'tailwind-variants'
import { primary } from '@/constant/colors'
import {format} from 'date-fns'
import Entypo from '@expo/vector-icons/Entypo';
import FormDatePicker from './FormDatePicker';

const formStyle = tv({
    slots: {
        mainContainer: 'w-11/12 mx-auto h-full',
        categoryGrpBox: 'flex-row justify-between mb-5',
        categoryContainer: 'p-1 w-24 h-24 flex items-center justify-center rounded-xl',
        categoryText: 'text-lg font-bitter-regular text-center leading-[1.3]',
        currencyText: 'text-lg font-poppins-regular text-primary-600',
        costContainer: 'flex-row items-center content-center bg-white rounded-[8] pl-[10] -z-10 mb-[10]',
        dateBox: 'flex-row items-center justify-between bg-white rounded-[8] py-3 px-4',
        dateText: 'font-poppins-regular text-lg text-primary-700 mb-1',
    },
    variants: {
        selected: {
            true: {
                categoryContainer: 'bg-primary-600',
                categoryText: 'text-white'
            },
            false: {
                categoryContainer: 'bg-primary-50',
                categoryText: 'text-primary-600'
            }
        }
    }
})
const categories = ['food', 'personal hygiene', 'pets', 'others']


const Form = () => {
const [selectedCategory, setSelectedCategory] = useState("food");
const today = new Date()
const [datePickToday, setDatePickToday] = useState(today)
const [datePickExp, setDatePickExp] = useState(today)
const [openPicker, setOpenPicker] = useState(false)
const {
  currencyCode,
} = getLocales()[0];
const {mainContainer,categoryGrpBox, categoryContainer, categoryText,currencyText,costContainer,dateBox,dateText} = formStyle()

const { register, handleSubmit, control } = useForm({
    resolver: zodResolver(pantryItemsInsertSchema),
  })
  return (
    <TouchableWithoutFeedback  onPress={() => {
      Keyboard.dismiss()
      setOpenPicker(false)
    }}>
      <View className={mainContainer()}>
        <View className={categoryGrpBox()}>
        {categories.map((category) => {
        const isSelected = category === selectedCategory
        return (
            <Pressable key={category} className={categoryContainer({selected:isSelected})} onPress={() => setSelectedCategory(category)}>
            <Text className={categoryText({selected:isSelected})}>{category}</Text>
        </Pressable>
            )
})}
        </View>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value } }) => (
          <TextInput 
            onChangeText={onChange} 
            value={value} 
            placeholder="Product Item" 
            placeholderTextColor={primary[300]} 
            multiline={false}  
            style={styles.textInput}
            onFocus={() => setOpenPicker(false)}
          />
        )}
      />  
         <Controller
        control={control}
        name="quantity"
        render={({ field: { onChange, value } }) => (
            <TextInput 
              onChangeText={onChange}
              value={value?.toString() || ''} 
              placeholder="Quantity"
              placeholderTextColor={primary[300]}
              keyboardType="decimal-pad"
              multiline={false}
              style={styles.textInput}
              onFocus={() => setOpenPicker(false)}
            />
        )}
        />  
        <View className={costContainer()}>
          <Text className={currencyText()}>{currencyCode}</Text>
      <Controller
        control={control}
        name="cost"
        render={({ field: { onChange, value } }) => (
            <TextInput 
              onChangeText={onChange}
              value={value?.toString() || ''} 
              placeholder="Cost"
              placeholderTextColor={primary[300]}
              keyboardType="decimal-pad"
              multiline={false}
              style={[styles.textInput,{flex:1, marginBottom: 0}]}
              onFocus={() => setOpenPicker(false)}
            />
        )}
        />
        </View>
       
        <Pressable
        className={dateBox()}
          onPress={(e)=> {
            e.stopPropagation() // Prevent the TouchableWithoutFeedback from handling this press
            Keyboard.dismiss()
            setOpenPicker((prev)=>!prev)
          }}
        >
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text className={dateText()}>Date Bought: </Text>
          <Text className={dateText()}>{format(datePickToday, 'dd MMM yyyy')}</Text>
        </View>
          <Entypo name="chevron-small-right" size={22} color={primary[300]}/>
          {/* {openPicker &&  <View  style={{
                        position: 'absolute',
                        top: 40,
                        left: -5,
                        transform: [{ scale: 0.9 }],
                        backgroundColor: primary[100],
                        borderRadius: 15,
                        padding: 10,
                        zIndex: 99
                    }}>
            <DateTimePicker
                  value={datePick}
                  locale={'en'}
                  mode="date"
                  display="inline"
                  accentColor={primary[900]}
                  themeVariant="light"
                  minimumDate={today}
                  onChange={(event, date) => {
                      setDatePick(date || new Date())
                    }}
                   
                    />
                    </View>
                    } */}
                </Pressable>
    <FormDatePicker openPicker={openPicker} setOpenPicker={setOpenPicker} datePick={datePickToday} setDatePick={setDatePickToday} today={today}/>
    </View>
    </TouchableWithoutFeedback>
  )
}
export default Form

const styles = StyleSheet.create({
    textInput: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
        color: primary[700],
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        paddingVertical: 12,
        marginBottom: 10
    }
})
