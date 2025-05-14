package com.furnitureapp

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class OtpModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "OtpModule"

    @ReactMethod
    fun showOtp(otp: String) {
        val notifier = OtpNotification(reactApplicationContext)
        notifier.showOtpNotification(otp)
    }
}
