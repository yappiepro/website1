# AI Agent Rules

## Core Principles

1. **Read before editing** - Always understand existing code patterns
2. **Follow conventions** - Match existing style and patterns
3. **Test locally** - Run `npm run generate` before pushing
4. **Be explicit** - State what was changed and why

## Code Style

### Vue Components

```vue
<script setup>
// Imports first
import { ref } from 'vue'
import { IconName } from 'lucide-vue-next'

// Props
const props = defineProps({
  title: String
})

// Reactive data
const isOpen = ref(false)

// Functions
function handleClick() {}
</script>

<template>
  <!-- Single root element -->
  <div class="component">
    <!-- Content -->
  </div>
</template>
```

### Tailwind Classes

- Use utility classes
- Group logically: layout → spacing → typography → colors
- Use `clsx()` for conditionals

```js
const classes = clsx(
  'flex items-center',      // layout
  'p-4 gap-2',              // spacing
  'text-sm font-medium',    // typography
  'text-gray-900',          // color
  isActive && 'bg-blue-500' // conditional
)
```

## Content Editing

### Landing Page Arrays

Edit arrays in `pages/index.vue`:
- `problems[]` - Business problems
- `benefits[]` - Company benefits
- `automationItems[]` - Solutions
- `portfolio[]` - Projects
- `faqs[]` - Questions/answers

### Adding Content

1. Check existing patterns
2. Match structure exactly
3. Use Russian language
4. Test locally

## Git Rules

### Before Committing

```bash
git status --short --branch
git remote -v  # Verify no credentials
```

### Commit Messages

```
<type>: <description>

# Types:
# feat: new feature
# fix: bug fix
# content: content update
# style: styling change
# refactor: code refactor
# chore: maintenance

# Examples:
# content: update hero section text
# feat: add new blog article
# fix: correct navigation link
```

### Never

- Commit secrets or tokens
- Use `reset --hard` without request
- Force push to main
- Add credentials to git remote

## Build Verification

Before claiming success:

```bash
npm run generate
# Check for errors
ls dist/  # Verify output exists
```

## Deployment Verification

1. Push completed
2. Actions workflow started
3. Build succeeded
4. Site accessible at live URL

## Error Handling

### Build Errors

1. Report exact error
2. Identify cause
3. Provide fix
4. Re-run build

### Push Failures

1. Report exact command and error
2. Check network/credentials
3. Retry only with permission

## Communication

### Be Explicit About

- What was changed
- What was pushed
- What needs user action

### Use Concrete References

- Commit hash
- File path
- Line number

### State Uncertainty

If something is not verified, say so clearly.

## File References

When referencing code, use format:
```
file_path:line_number
```

Example: `pages/index.vue:45`
