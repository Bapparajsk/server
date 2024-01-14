const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: "606217397409-86jamjdcs7tonilbb0fu3b4cceic8dsu.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: 'http://localhost:3000/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
    // User profile data is available in the 'profile' object
    return done(null, profile);
}));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});
