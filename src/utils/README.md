# Utils Directory

This directory contains utility functions and constants used throughout the application.

## Files

### `constants.ts`

- Navigation items configuration
- Animation timing constants
- Scroll behavior constants
- Responsive breakpoints
- Social media icon mappings

### `scrollUtils.ts`

- `scrollToSection()` - Smooth scroll to specific sections
- `isScrolled()` - Check if user has scrolled past threshold
- `getActiveSection()` - Determine active section based on scroll position
- `scrollCarouselNext()` - Navigate carousel forward
- `scrollCarouselPrev()` - Navigate carousel backward

### `socialUtils.ts`

- `getSocialIconPath()` - Get SVG path for social platform
- `createSocialIcon()` - Create social media icon component

## Usage

```typescript
import { NAV_ITEMS, CARD_WIDTH } from "@/utils/constants";
import { scrollToSection } from "@/utils/scrollUtils";
import { createSocialIcon } from "@/utils/socialUtils";
```

## Benefits

- **Centralized Configuration**: All constants in one place
- **Reusable Functions**: Common functionality extracted
- **Type Safety**: Full TypeScript support
- **Performance**: Optimized utility functions
- **Maintainability**: Easy to update and extend
