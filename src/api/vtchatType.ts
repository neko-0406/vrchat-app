interface AuthConfig {
    requiresTwoFactorAuth: ('totp' | 'otp')[];
}