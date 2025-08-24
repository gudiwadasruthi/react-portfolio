# How to Add Video to Your Emotion-Based Music Player Project

## ✅ What I've Done

I've updated your portfolio to support videos! Here's what was changed:

1. **CardProject Component** - Now supports video display with hover-to-play functionality
2. **ProjectDetail Component** - Shows videos with full controls in the detail view
3. **Project Data** - Added Video field to your emotion-based music player project

## 🎥 How to Add Your Video

### Step 1: Prepare Your Video
- Record a demo of your emotion-based music player
- Save it as MP4 format (recommended)
- Keep it under 10MB for better performance
- Recommended resolution: 720p or 1080p

### Step 2: Add Video File
1. Place your video file in the `public/` directory
2. Name it `emotion-music-demo.mp4` (or change the name in the code)

### Step 3: Update Video Path (if needed)
If you named your video differently, update this line in `src/Pages/Portofolio.jsx`:

```javascript
Video: "/your-video-filename.mp4",  // Change this to your video filename
```

## 🎮 Video Features

- **Project Cards**: Video plays on hover, shows play button overlay
- **Project Details**: Full video with controls (play, pause, volume, etc.)
- **Responsive**: Works on all devices
- **Fallback**: Shows image if no video is provided

## 📁 File Structure
```
public/
├── emotion-music-demo.mp4  ← Add your video here
├── ebm.jpg                 ← Your existing image
└── other files...
```

## 🚀 Test It
1. Add your video file to the `public/` directory
2. Run `npm run dev`
3. Go to your portfolio and check the Projects section
4. Hover over your emotion-based music player project to see the video play

## 💡 Tips
- Use screen recording software like OBS Studio or Loom
- Show the key features: emotion detection, music playing, interface
- Keep the video short (30-60 seconds) for better engagement
- Make sure the video demonstrates the emotion recognition working

That's it! Your emotion-based music player project will now have a live demo video! 🎉 