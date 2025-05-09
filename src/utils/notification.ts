import notifee, {
  AndroidColor,
  AndroidImportance,
  AndroidStyle,
} from '@notifee/react-native';
import colors from '../constants/colors';
import imagePath from '../constants/imagePath';

export const onDisplayNotification = async (
  titleValue: string,
  descriptionValue: string,
  bodyValue: string,
) => {
  // Request permissions (required for iOS)
  await notifee.requestPermission();

  // Create a channel (required for Android)
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
    importance: AndroidImportance.HIGH,
    vibration: true,
    vibrationPattern: [300, 500],
    sound: 'hollow',
    // sound: 'pikachu_notification_sound.mp3',
  });

  // Display a notification
  await notifee.displayNotification({
    title: titleValue,
    subtitle: descriptionValue,
    body: bodyValue,
    android: {
      channelId,
      smallIcon: 'ic_launcher', // optional, defaults to 'ic_launcher'.
      vibrationPattern: [300, 500],
      /*
        style: {
          type: AndroidStyle.BIGPICTURE,
          picture: 'https://qph.cf2.quoracdn.net/main-qimg-88a14491cefee50fa13e38063b99a066-lq',
        },
      */
      style: {
        type: AndroidStyle.BIGTEXT,
        text: bodyValue,
      },
      // pressAction is needed if you want the notification to open the app when pressed
      pressAction: {
        id: 'default',
      },
      sound: 'hollow' /* sound: 'pikachu_notification_sound.mp3', */,
      largeIcon: imagePath?.mobileIcon, // Optional; shows on the left for some styles
      color: colors?.darkGrey,
    },
    ios: {
      attachments: [
        {
          url: imagePath?.mobileIcon, // Must be HTTPS and image format
        },
      ],
      // foregroundPresentationOptions: [true, true],
    },
  });
};
