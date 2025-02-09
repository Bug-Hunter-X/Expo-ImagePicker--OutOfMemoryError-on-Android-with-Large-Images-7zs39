This solution uses the `react-native-image-resizer` library to resize the image before it's processed by Expo.  This significantly reduces the memory footprint.  Make sure to install the library using: `expo install react-native-image-resizer`

```javascript
import * as ImagePicker from 'expo-image-picker';
import ImageResizer from 'react-native-image-resizer';

const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.cancelled) {
    // Resize image before processing
    try {
      const resizedImage = await ImageResizer.createResizedImage(result.uri, 1000, 1000, 'JPEG', 80);
      // Now use resizedImage.uri
      console.log('Resized image URI:', resizedImage.uri);
      // ... further image processing ...
    } catch (error) {
      console.error('Image resizing error:', error);
    }
  }
};
```