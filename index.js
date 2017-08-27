const ReactNative = require('react-native')
const {
  NativeModules,
  DeviceEventEmitter
} = ReactNative
const BluetoothSerial = NativeModules.BluetoothSerial

BluetoothSerial.on = (eventName, handler) => {
  DeviceEventEmitter.addListener(eventName, handler);
}

BluetoothSerial.removeListener = (eventName, handler) => {
  DeviceEventEmitter.removeListener(eventName, handler)
}

BluetoothSerial.write = (data, callback) => {
  if (typeof data === 'string') {
    data = new Buffer(data);
  }
  BluetoothSerial.writeToDevice(data.toString('base64'))
    .then(() => callback(null))
    .catch(err => callback(err));
};

module.exports = BluetoothSerial;