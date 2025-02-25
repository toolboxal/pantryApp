import { View, Text, Modal, Pressable } from 'react-native'
import { tv } from 'tailwind-variants'
import DateTimePicker from '@react-native-community/datetimepicker'
import { primary } from '@/constant/colors'

type Props = {
  openPicker: boolean
  setOpenPicker: React.Dispatch<React.SetStateAction<boolean>>
  datePick: Date
  setDatePick: React.Dispatch<React.SetStateAction<Date>>
  today?: Date
}

const formDatePickerStyle = tv({
  slots: {},
})

const FormDatePicker = ({
  openPicker,
  setOpenPicker,
  datePick,
  setDatePick,
  today,
}: Props) => {
  return (
    <Modal
      visible={openPicker}
      onRequestClose={() => setOpenPicker(false)}
      animationType="slide"
      className="bg-transparent"
    >
      <Pressable
        className="flex-col bg-[rgba(255,255,255,0.3)] h-full items-center justify-end pb-20"
        onPress={() => setOpenPicker(false)}
      >
        <View>
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
      </Pressable>
    </Modal>
  )
}
export default FormDatePicker
