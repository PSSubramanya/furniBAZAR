package com.furnitureapp

import android.telephony.SmsManager
import android.util.Log;
import com.facebook.react.bridge.*

class SmsModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    private val context = reactContext

    override fun getName(): String {
        return "SmsModule"
    }

    @ReactMethod
    fun sendSms(phoneNumber: String, message: String, promise: Promise) {
        Log.d("SMSModule", "I am in the sendSms function");
        try {
            val smsManager = SmsManager.getDefault()
            smsManager.sendTextMessage(phoneNumber, null, message, null, null)
            promise.resolve("SMS sent to $phoneNumber and message sent is: $message")
            Log.d("SMSModule Triggered", "HERE: SMS sent to $phoneNumber and message sent is: $message");
        } catch (e: Exception) {
            promise.reject("SMS_ERROR", "Failed to send SMS", e)
        }
    }
}
