# Expo Router Bug Reproduction

This repository demonstrates a navigation bug in Expo Router where navigating from `/[groupId]/(subgroup)/item` back to `/[groupId]` fails silently. This issue has been reported in [expo/expo#33985](https://github.com/expo/expo/issues/33985).

## The Bug

When trying to navigate from a nested route `/[groupId]/(subgroup)/item` back to `/[groupId]`, both `<Link />` and `router.push()` fail silently with no route changes or error messages. The issue appears to be related to the presence of `_layout.tsx` in `[groupId]/(subgroup)/_layout.tsx`.

## Steps to Reproduce

1. Install dependencies
   ```bash
   npm install
   ```

2. Start the app
   ```bash
   npx expo start
   ```

3. Navigate to `/[groupId]/(subgroup)/item`
4. Try to navigate back to `/[groupId]` using either `<Link />` or `router.push()`

## Environment

- expo: ~52.0.23
- expo-router: ~4.0.15
- react: 18.3.1
- react-native: 0.76.5

## Additional Notes

- The issue affects web platforms (not tested on iOS/Android)
- Removing `_layout.tsx` in `[groupId]/(subgroup)/_layout.tsx` resolves the issue
- Navigation to the homepage ('/') works correctly
- Navigation to invalid routes correctly shows the 404 page

For more details, please refer to the [issue on GitHub](https://github.com/expo/expo/issues/33985).
