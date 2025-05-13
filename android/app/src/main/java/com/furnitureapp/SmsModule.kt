package com.furnitureapp

import android.telephony.SmsManager
import android.widget.Toast
import com.facebook.react.bridge.*

class SmsModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    private val context = reactContext

    override fun getName(): String {
        return "SmsModule"
    }

    @ReactMethod
    fun sendSms(phoneNumber: String, message: String, promise: Promise) {
        try {
            val smsManager = SmsManager.getDefault()
            smsManager.sendTextMessage(phoneNumber, null, message, null, null)
            promise.resolve("SMS sent to $phoneNumber and message sent is: $message")
        } catch (e: Exception) {
            promise.reject("SMS_ERROR", "Failed to send SMS", e)
        }
    }
}
