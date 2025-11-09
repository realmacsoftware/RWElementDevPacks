# Page Lock Component for Elements

## Overview
The `Page Lock` component adds a VERY lightweight password gate to any RapidWeaver Elements page. Visitors are prompted for a shared password before seeing the protected content, and the component uses PHP sessions to keep authenticated visitors on the page without repeated prompts.

> **Important:** This component is intended as a teaching example. It demonstrates how to combine Elements portals, dropzones, and properties. It is **not** a replacement for production-ready authentication or membership systems.

## Features
- Password prompt rendered before the rest of the page content.
- Simple session-based authentication that persists across page loads.
- Logout link to clear the session.
- `@dropzone("extraItems")` inside the unlocked view so you can add Elements content that should display only after authentication.

## Requirements
- RapidWeaver Elements with support for custom components.
- Hosting environment with PHP sessions enabled (most standard hosting plans meet this requirement).


## Security Considerations
- This approach uses a single shared password and stores authentication status in a PHP session. Anyone with the password can share it.
- There is no brute-force protection, rate limiting, or audit logging.
- For sensitive or client production websites, use a full authentication or membership solution instead.

## Support
Because this component is provided for educational purposes, it is offered without official support. Use it as a starting point for your own experiments or enhancements.