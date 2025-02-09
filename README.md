# Expo ImagePicker OutOfMemoryError on Android

This repository demonstrates a bug in Expo's ImagePicker library where processing large images on Android devices can lead to an `OutOfMemoryError`.  The issue is due to insufficient memory allocation during image processing.  The solution involves using a different method of image handling to reduce the memory footprint.

## Bug Description

When a user selects a very large image using `ImagePicker.launchImageLibraryAsync`, the Android app crashes with the error `java.lang.OutOfMemoryError: Failed to allocate a ... byte allocation ...`. This is because the default image processing in Expo tries to load the entire image into memory at once.

## Solution

The solution involves using a library like `react-native-image-resizer` to resize the image before processing. This reduces the memory required to handle the image and prevents the `OutOfMemoryError`.

## Steps to reproduce the bug:

1. Clone the repository.
2. Run the app on an Android device or emulator.
3. Select a very large image (several MBs) using the ImagePicker.
4. Observe the app crashing with the `OutOfMemoryError`. 