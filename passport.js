const passport = require('passport');

var GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_ID= "1063783694271-kottmmkph6oolahbbbn5n5gbproi6v4r.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"


passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile)
  }
));

passport.serializeUser((user,done)=>{
    done(null,user)
})

passport.deserializeUser((user,done)=>{
    done(null,user)
})