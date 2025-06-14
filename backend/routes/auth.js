import { Router } from 'express';
import passport from 'passport';``

const router = Router();

// Start Google OAuth login flow
router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Handle Google OAuth callback
router.get('/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login', 
    session: true
  }),
  (req, res) => {
    // Redirect to your frontend app after login
    res.redirect('http://localhost:5173/');
  }
);


router.get('/logout', (req, res, next) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('http://localhost:5173/');  // Redirect to frontend home
  });
});

// Send currently logged-in user info
router.get('/user', (req, res) => {
  res.json(req.user || null);
});

export default router;
