# Mobile Responsive Testing Guide

## 🧪 Testing Checklist

### 1. Visual Testing

#### Desktop (>1024px)
- [ ] Sidebar full width 260px
- [ ] All menu items visible with icons and labels
- [ ] Header shows all elements (search, quick actions, messages, settings, notifications, user info)
- [ ] Grid layouts show 2-4 columns
- [ ] No hamburger menu button visible
- [ ] Dropdowns appear below buttons

#### Tablet (768px - 1024px)
- [ ] Sidebar width 200px
- [ ] Grid layouts show 2 columns
- [ ] Header elements responsive
- [ ] Content readable and accessible

#### Mobile (<768px)
- [ ] Sidebar collapsed to 70px (icons only)
- [ ] Hamburger menu button visible di kanan bawah
- [ ] Tap hamburger → sidebar expands to 260px
- [ ] Overlay backdrop muncul (semi-transparent black)
- [ ] Menu labels visible saat sidebar expanded
- [ ] Tap overlay → sidebar collapses
- [ ] Select menu → sidebar auto-closes
- [ ] Header dropdowns appear at bottom of screen
- [ ] User info hidden (only avatar visible)
- [ ] Single column layout untuk semua grids
- [ ] Buttons full-width
- [ ] Tables horizontal scrollable

#### Small Mobile (<480px)
- [ ] Further compact spacing
- [ ] Hamburger button 48x48px
- [ ] All touch targets minimum 44px
- [ ] Text readable
- [ ] Forms usable

#### Landscape Mode
- [ ] Stat cards horizontal layout
- [ ] Content fits without excessive scrolling
- [ ] Compact padding

### 2. Interaction Testing

#### Sidebar
```
Test Steps:
1. Resize browser to <768px
2. Verify sidebar collapsed (70px, icons only)
3. Verify hamburger button visible (bottom right)
4. Tap hamburger button
5. Verify sidebar expands (260px)
6. Verify overlay appears
7. Verify menu labels visible
8. Tap overlay
9. Verify sidebar closes
10. Tap hamburger again to open
11. Select any menu item
12. Verify sidebar auto-closes
13. Verify navigation works
```

#### Header Dropdowns
```
Test Steps:
1. Resize to mobile (<768px)
2. Tap Search button
3. Verify dropdown appears at bottom
4. Verify full-width (left/right 10px margin)
5. Verify max-height 70vh
6. Close search
7. Tap Quick Actions
8. Verify previous dropdown closed
9. Verify only one dropdown open at a time
10. Repeat for Messages, Settings, Notifications
```

#### Touch Targets
```
Test Steps:
1. Enable "Show tap targets" in DevTools
2. Verify all buttons ≥44x44px
3. Verify sidebar menu items ≥44px height
4. Verify hamburger button 48x48px (small mobile)
5. Test tap accuracy on mobile device
```

#### Forms
```
Test Steps:
1. Open any form on mobile
2. Tap input field
3. Verify NO auto-zoom on iOS (font-size 16px)
4. Verify keyboard doesn't obscure field
5. Verify buttons full-width
6. Verify submit button easy to tap
```

#### Tables
```
Test Steps:
1. Navigate to page with table (e.g., Farmasi)
2. Verify table has horizontal scroll
3. Swipe left/right to scroll
4. Verify custom scrollbar visible
5. Verify table content readable
6. Verify action buttons accessible
```

#### Tabs
```
Test Steps:
1. Navigate to page with tabs (e.g., Registrasi)
2. Verify tabs horizontal scrollable
3. Swipe left/right on tabs
4. Verify active tab visible
5. Verify tap works on all tabs
```

### 3. Device Testing

#### iOS Safari
- [ ] iPhone SE (375px)
- [ ] iPhone 12/13/14 (390px)
- [ ] iPhone 14 Pro Max (430px)
- [ ] iPad Mini (768px)
- [ ] iPad Pro (1024px)

#### Android Chrome
- [ ] Small phone (360px)
- [ ] Medium phone (412px)
- [ ] Large phone (480px)
- [ ] Tablet (768px)

#### Orientation
- [ ] Portrait mode
- [ ] Landscape mode
- [ ] Rotation transition smooth

### 4. Chrome DevTools Testing

```bash
# Open Chrome DevTools
F12 or Cmd+Option+I

# Enable Device Toolbar
Cmd+Shift+M (Mac) or Ctrl+Shift+M (Windows)

# Test Devices:
1. iPhone SE (375x667)
2. iPhone 12 Pro (390x844)
3. iPhone 14 Pro Max (430x932)
4. Pixel 5 (393x851)
5. Samsung Galaxy S20 Ultra (412x915)
6. iPad Mini (768x1024)
7. iPad Air (820x1180)
8. Responsive mode (custom sizes)
```

### 5. Performance Testing

#### Lighthouse Mobile Audit
```
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Select "Mobile" device
4. Run audit
5. Verify scores:
   - Performance: >90
   - Accessibility: >95
   - Best Practices: >90
```

#### Animation Performance
```
1. Open DevTools → Performance tab
2. Start recording
3. Toggle sidebar multiple times
4. Stop recording
5. Verify 60fps maintained
6. Check for long tasks (should be <50ms)
```

### 6. Accessibility Testing

#### Screen Reader
- [ ] Sidebar toggle has aria-label
- [ ] Menu items have proper labels
- [ ] Dropdowns accessible with keyboard
- [ ] Focus indicators visible

#### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Enter/Space activates buttons
- [ ] Escape closes dropdowns/sidebar
- [ ] Focus visible at all times

#### Color Contrast
- [ ] Text meets WCAG AA (4.5:1)
- [ ] Interactive elements have sufficient contrast
- [ ] Disabled states clearly indicated

### 7. Edge Cases

#### Very Small Screens (<320px)
- [ ] Content still readable
- [ ] No horizontal overflow
- [ ] Buttons still tappable

#### Very Wide Screens (>1920px)
- [ ] Content not stretched excessively
- [ ] Max-width containers applied
- [ ] Layout remains balanced

#### Slow Network
- [ ] Animations still smooth
- [ ] No layout shift
- [ ] Progressive enhancement works

#### High DPI Displays
- [ ] Icons crisp (SVG)
- [ ] Text sharp
- [ ] No pixelation

## 🐛 Common Issues & Solutions

### Issue: Sidebar tidak expand di mobile
**Solution:** 
- Verify useState dan useEffect di Sidebar.js
- Check console for errors
- Verify .mobile-expanded class added to sidebar

### Issue: Dropdown terpotong di viewport
**Solution:**
- Verify fixed positioning di mobile
- Check z-index hierarchy
- Verify max-height 70vh applied

### Issue: Text terlalu kecil di mobile
**Solution:**
- Verify media query applied
- Check font-size di mobile breakpoint
- Ensure min-font-size 12px

### Issue: Buttons sulit di-tap
**Solution:**
- Verify min-width dan min-height 44px
- Check padding sufficient
- Ensure no overlapping elements

### Issue: Table tidak scroll horizontal
**Solution:**
- Verify .table-wrapper applied
- Check overflow-x: auto
- Ensure table min-width set

### Issue: iOS auto-zoom pada input focus
**Solution:**
- Verify input font-size ≥16px
- Check viewport meta tag
- Ensure no maximum-scale=1

## 📱 Quick Test Commands

### Start Development Server
```bash
cd /home/engine/project
npm start
```

### Build Production
```bash
npm run build
```

### Serve Production Build Locally
```bash
npx serve -s build
```

### Test on Local Network (Mobile Device)
```bash
# Get your local IP
ipconfig getifaddr en0  # Mac
hostname -I | awk '{print $1}'  # Linux

# Start with network access
npm start
# Access from mobile: http://YOUR_IP:3000
```

## 📊 Expected Results

### Before Enhancement (v2.11.0)
- ❌ No sidebar toggle on mobile
- ❌ Dropdowns overflow viewport
- ❌ Small touch targets (<44px)
- ❌ Forms trigger auto-zoom on iOS
- ❌ No mobile-specific optimizations

### After Enhancement (v2.12.0)
- ✅ Sidebar toggle dengan hamburger menu
- ✅ Smart dropdown positioning
- ✅ All touch targets ≥44px
- ✅ Forms dengan 16px font (no auto-zoom)
- ✅ Comprehensive mobile optimizations

## 🎯 Success Criteria

- [ ] All visual tests pass
- [ ] All interaction tests pass
- [ ] Tested on ≥3 physical devices
- [ ] Lighthouse mobile score >90
- [ ] No console errors
- [ ] Smooth 60fps animations
- [ ] Accessibility score >95
- [ ] All edge cases handled

## 📝 Testing Report Template

```markdown
# Mobile Responsive Testing Report

**Date:** [DATE]
**Tester:** [NAME]
**Version:** v2.12.0

## Devices Tested
- [ ] iPhone [MODEL] - iOS [VERSION]
- [ ] Android [MODEL] - Android [VERSION]
- [ ] iPad [MODEL] - iOS [VERSION]

## Test Results

### Sidebar Toggle
- Status: ✅ Pass / ❌ Fail
- Notes: [NOTES]

### Header Dropdowns
- Status: ✅ Pass / ❌ Fail
- Notes: [NOTES]

### Touch Targets
- Status: ✅ Pass / ❌ Fail
- Notes: [NOTES]

### Forms
- Status: ✅ Pass / ❌ Fail
- Notes: [NOTES]

### Tables
- Status: ✅ Pass / ❌ Fail
- Notes: [NOTES]

### Performance
- Lighthouse Score: [SCORE]
- FPS: [FPS]
- Notes: [NOTES]

## Issues Found
1. [ISSUE 1]
2. [ISSUE 2]

## Recommendations
1. [RECOMMENDATION 1]
2. [RECOMMENDATION 2]

## Overall Assessment
✅ APPROVED / ❌ NEEDS WORK
```

## 🔗 Related Documentation

- [MOBILE_RESPONSIVE_ENHANCEMENT.md](./MOBILE_RESPONSIVE_ENHANCEMENT.md) - Complete feature documentation
- [RESPONSIVE_IMPROVEMENTS.md](./RESPONSIVE_IMPROVEMENTS.md) - v2.11.0 responsive guide
- [README.md](./README.md) - Project overview

---

**Happy Testing! 🚀**
