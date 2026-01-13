// AUTO-GENERATED: do not edit. Edit hooks.source.js instead.
const globalAnimations = (app) => {
  const {
    globalScrollAnimationPreviewInEditor: previewInEditor,
    globalScrollAnimationTrigger: triggerType,
    // none, instant, inView, scroll
    globalScrollAnimationEase: ease,
    globalScrollAnimationEaseCustom: easeCustom,
    globalScrollAnimationEaseSteps: easeSteps,
    globalScrollAnimationOrigin: origin,
    globalScrollAnimationDuration: duration,
    globalScrollAnimationDelay: delay,
    // inView
    globalScrollAnimationAmount: amount,
    // spring
    globalScrollAnimationIsSpring: isSpring,
    globalScrollAnimationSpringStrength: springStrength,
    globalScrollAnimationSpringAmplitude: springAmplitude,
    // trigger positions
    globalScrollAnimationTriggerElementPositionEnter: triggerElementPositionEnter,
    globalScrollAnimationTriggerViewportPositionEnter: triggerViewportPositionEnter,
    globalScrollAnimationTriggerElementPositionExit: triggerElementPositionExit,
    globalScrollAnimationTriggerViewportPositionExit: triggerViewportPositionExit,
    // margin
    globalScrollAnimationMarginTop: marginTop,
    globalScrollAnimationMarginBottom: marginBottom,
    // repeat
    globalScrollAnimationRepeat: repeat,
    globalScrollAnimationRepeatTimes: repeatTimes,
    globalScrollAnimationRepeatYoyo: repeatYoyo,
    globalScrollAnimationRepeatDelay: repeatDelay,
    // Effects
    // - start
    globalScrollAnimationEnterState: enterState,
    globalScrollAnimationOpacityEnterStart: opacityEnterStart,
    globalScrollAnimationRotateEnterStart: rotateEnterStart,
    globalScrollAnimationScaleEnterStart: scaleEnterStart,
    globalScrollAnimationTranslateXEnterStart: translateXEnterStart,
    globalScrollAnimationTranslateYEnterStart: translateYEnterStart,
    // - end
    globalScrollAnimationOpacityEnterEnd: opacityEnterEnd,
    globalScrollAnimationRotateEnterEnd: rotateEnterEnd,
    globalScrollAnimationScaleEnterEnd: scaleEnterEnd,
    globalScrollAnimationTranslateXEnterEnd: translateXEnterEnd,
    globalScrollAnimationTranslateYEnterEnd: translateYEnterEnd,
    // exit
    globalScrollAnimationExitEnabled: exitEnabled,
    globalScrollAnimationOpacityExitEnd: opacityExitEnd,
    globalScrollAnimationRotateExitEnd: rotateExitEnd,
    globalScrollAnimationScaleExitEnd: scaleExitEnd,
    globalScrollAnimationTranslateXExitEnd: translateXExitEnd,
    globalScrollAnimationTranslateYExitEnd: translateYExitEnd
  } = app.props, { mode } = app.project, gsapEase = isSpring ? `elastic.out(${springAmplitude}, ${springStrength})` : ease, gsapMargin = (value) => value < 0 ? `-=${Math.abs(value)}` : `+=${value}`, scrollTriggerStart = `${triggerElementPositionEnter}${gsapMargin(marginTop)} ${triggerViewportPositionEnter}${gsapMargin(marginBottom)}`, scrollTriggerEnd = `${triggerElementPositionExit}${gsapMargin(marginTop)} ${triggerViewportPositionExit}${gsapMargin(marginBottom)}`, gsapRepeat = triggerType == "instant" && repeat != "false" ? {
    repeat: repeat == "infinite" ? -1 : repeatTimes,
    yoyo: !!repeatYoyo,
    repeatDelay: repeatDelay / 1e3
  } : !1, onEnterFrom = {
    opacity: opacityEnterStart / 100,
    rotation: rotateEnterStart,
    scale: scaleEnterStart / 100,
    x: `${translateXEnterStart}%`,
    y: `${translateYEnterStart}%`,
    autoAlpha: 0,
    duration: duration / 1e3,
    ease: gsapEase,
    transformOrigin: origin.replace("-", " ")
  }, onEnterTo = {
    opacity: opacityEnterEnd / 100,
    rotation: rotateEnterEnd,
    scale: scaleEnterEnd / 100,
    x: `${translateXEnterEnd}%`,
    y: `${translateYEnterEnd}%`,
    autoAlpha: 1,
    duration: duration / 1e3,
    ease: gsapEase,
    transformOrigin: origin.replace("-", " ")
  }, onLeaveTo = {
    opacity: opacityExitEnd / 100,
    rotation: rotateExitEnd,
    scale: scaleExitEnd / 100,
    x: `${translateXExitEnd}%`,
    y: `${translateYExitEnd}%`,
    autoAlpha: 0,
    duration: duration / 1e3,
    ease: gsapEase,
    transformOrigin: origin.replace("-", " ")
  }, cssVarsFrom = Object.entries(onEnterFrom).map(([key, value]) => `[--scroll-animation-from-${key}:${value}]`).join(" "), cssVarsTo = Object.entries(onEnterTo).map(([key, value]) => `[--scroll-animation-to-${key}:${value}]`).join(" ");
  return {
    isEnabled: triggerType != "none",
    isScroll: triggerType == "scroll",
    isInView: triggerType == "inView",
    isInstant: triggerType == "instant",
    isExitEnabled: exitEnabled,
    previewInEditor: previewInEditor && mode == "edit",
    editorPreviewCSSVars: {
      from: cssVarsFrom,
      to: cssVarsTo,
      duration: `${duration / 1e3}s`,
      delay: `${delay / 1e3}s`
    },
    data: {
      "data-animation": "true",
      "data-animation-trigger-type": triggerType,
      "data-animation-enter-from": JSON.stringify(onEnterFrom).replace(/"/g, "&quot;"),
      "data-animation-enter-to": JSON.stringify(onEnterTo).replace(/"/g, "&quot;"),
      "data-animation-exit-to": JSON.stringify(onLeaveTo).replace(/"/g, "&quot;"),
      "data-animation-trigger-start": scrollTriggerStart,
      "data-animation-trigger-end": scrollTriggerEnd,
      "data-animation-repeat": gsapRepeat ? JSON.stringify(gsapRepeat).replace(/"/g, "&quot;") : !1
    }
  };
}, globalReveal = (rw) => {
  const {
    revealAnimationName: name,
    revealAnimationDirection: direction,
    revealPlay: play,
    revealStart: start,
    revealEnd: end,
    revealDuration: duration,
    revealDelay: delay,
    revealEasing: easing,
    revealDistance: distance,
    revealDegrees: degrees,
    revealScrub: scrub,
    revealDebug: debug
  } = rw.props, { title } = rw.node, revealID = `reveal-${title.replace(/\s+/g, "-").toLowerCase()}`, gsapTriggerPoints = {
    "entering-screen": "top bottom",
    "middle-of-screen": "top center",
    "exiting-screen": "top top"
  }, animationName = `${name}${direction.charAt(0).toUpperCase() + direction.slice(1)}In`, exitAnimationName = animationName.replace("In", "Out");
  return {
    "data-reveal": "",
    "data-reveal-id": revealID,
    "data-reveal-duration": `${duration / 1e3}`,
    "data-reveal-delay": `${delay / 1e3}`,
    "data-reveal-easing": easing,
    "data-reveal-animation": animationName,
    "data-reveal-exit-animation": exitAnimationName,
    "data-reveal-play": play,
    "data-reveal-start": gsapTriggerPoints[start] || gsapTriggerPoints["entering-screen"],
    "data-reveal-end": gsapTriggerPoints[end] || gsapTriggerPoints["exiting-screen"],
    "data-reveal-distance": distance,
    "data-reveal-degrees": degrees,
    "data-reveal-scrub": scrub || !1,
    "data-reveal-debug": debug || !1
  };
}, globalBgColor = (app, args = {}) => {
  const {
    globalControlTypeBg: controlType,
    globalBgColor: color,
    globalBgColorOpacity: opacity,
    globalBgColorEnd: colorEnd,
    globalBgColorOpacityEnd: opacityEnd
  } = app.props, wantsPeer = (args == null ? void 0 : args.peer) || !1, wantsActive = (args == null ? void 0 : args.active) || !1, wantsFocus = (args == null ? void 0 : args.focus) || !1, classes = classnames([color, opacity, `dark:${opacity}`]);
  return controlType == "hover" && (wantsPeer ? classes.add([
    colorEnd.replace(/hover:/g, "peer-hover:"),
    opacityEnd.replace(/hover:/g, "peer-hover:"),
    `dark:${opacityEnd.replace(/hover:/g, "peer-hover:")}`
  ]) : classes.add([colorEnd, opacityEnd, `dark:${opacityEnd}`]), wantsActive && classes.add([
    colorEnd.replace(/hover:/g, "data-[active=true]:"),
    opacityEnd.replace(/hover:/g, "data-[active=true]:"),
    `dark:${opacityEnd.replace(/hover:/g, "data-[active=true]:")}`
  ]), wantsFocus && classes.add([
    colorEnd.replace(/hover:/g, "focus:"),
    opacityEnd.replace(/hover:/g, "focus:"),
    `dark:${opacityEnd.replace(/hover:/g, "focus:")}`
  ])), classes.toString();
}, globalBgGradient = (app, args) => {
  const {
    globalControlTypeBg: controlType,
    globalBgGradientDirection: direction,
    globalBgGradientDirectionEnd: directionEnd,
    globalBgGradientFromColor: fromColor,
    globalBgGradientFromOpacity: fromOpacity,
    globalBgGradientFromPosition: fromPosition,
    globalBgGradientViaEnabled: viaEnabled,
    globalBgGradientViaColor: viaColor,
    globalBgGradientViaOpacity: viaOpacity,
    globalBgGradientViaPosition: viaPosition,
    globalBgGradientToColor: toColor,
    globalBgGradientToOpacity: toOpacity,
    globalBgGradientToPosition: toPosition,
    globalBgGradientFromColorEnd: fromColorEnd,
    globalBgGradientFromOpacityEnd: fromOpacityEnd,
    globalBgGradientViaEnabledEnd: viaEnabledEnd,
    globalBgGradientViaColorEnd: viaColorEnd,
    globalBgGradientViaOpacityEnd: viaOpacityEnd,
    globalBgGradientToColorEnd: toColorEnd,
    globalBgGradientToOpacityEnd: toOpacityEnd
  } = app.props, wantsPeer = (args == null ? void 0 : args.peer) || !1, wantsActive = (args == null ? void 0 : args.active) || !1, wantsFocus = (args == null ? void 0 : args.focus) || !1, hasPrefix = (args == null ? void 0 : args.prefix) && (args == null ? void 0 : args.prefixCallback) || !1, prefixCallback = (args == null ? void 0 : args.prefixCallback) || (() => {
  }), classes = classnames([
    direction,
    fromColor,
    fromOpacity,
    fromPosition,
    toColor,
    toOpacity,
    toPosition
  ]);
  return viaEnabled == "true" && classes.add([viaColor, viaOpacity, viaPosition]), controlType == "hover" && (wantsPeer ? classes.add([
    directionEnd.replace(/hover:/g, "peer-hover:"),
    fromColorEnd.replace(/hover:/g, "peer-hover:"),
    fromOpacityEnd.replace(/hover:/g, "peer-hover:"),
    toColorEnd.replace(/hover:/g, "peer-hover:"),
    toOpacityEnd.replace(/hover:/g, "peer-hover:")
  ]) : hasPrefix ? classes.add([
    prefixCallback(
      directionEnd.replace(/hover:/g, ""),
      args.prefix
    ),
    prefixCallback(
      fromColorEnd.replace(/hover:/g, ""),
      args.prefix
    ),
    prefixCallback(
      fromOpacityEnd.replace(/hover:/g, ""),
      args.prefix
    ),
    prefixCallback(toColorEnd.replace(/hover:/g, ""), args.prefix),
    prefixCallback(
      toOpacityEnd.replace(/hover:/g, ""),
      args.prefix
    )
  ]) : classes.add([
    directionEnd,
    fromColorEnd,
    fromOpacityEnd,
    toColorEnd,
    toOpacityEnd
  ]), wantsActive && classes.add([
    directionEnd.replace(/hover:/g, "data-[active=true]:"),
    fromColorEnd.replace(/hover:/g, "data-[active=true]:"),
    fromOpacityEnd.replace(/hover:/g, "data-[active=true]:"),
    toColorEnd.replace(/hover:/g, "data-[active=true]:"),
    toOpacityEnd.replace(/hover:/g, "data-[active=true]:")
  ]), wantsFocus && classes.add([
    directionEnd.replace(/hover:/g, "focus:"),
    fromColorEnd.replace(/hover:/g, "focus:"),
    fromOpacityEnd.replace(/hover:/g, "focus:"),
    toColorEnd.replace(/hover:/g, "focus:"),
    toOpacityEnd.replace(/hover:/g, "focus:")
  ]), viaEnabledEnd == "true" && (wantsPeer ? classes.add([
    viaColorEnd.replace(/hover:/g, "peer-hover:"),
    viaOpacityEnd.replace(/hover:/g, "peer-hover:")
  ]) : hasPrefix ? classes.add([
    prefixCallback(
      viaColorEnd.replace(/hover:/g, ""),
      args.prefix
    ),
    prefixCallback(
      viaOpacityEnd.replace(/hover:/g, ""),
      args.prefix
    )
  ]) : classes.add([viaColorEnd, viaOpacityEnd]), wantsActive && classes.add([
    viaColorEnd.replace(/hover:/g, "data-[active=true]:"),
    viaOpacityEnd.replace(/hover:/g, "data-[active=true]:")
  ]), wantsFocus && classes.add([
    viaColorEnd.replace(/hover:/g, "focus:"),
    viaOpacityEnd.replace(/hover:/g, "focus:")
  ]))), classes.toString();
}, globalBgImage = (app, args) => {
  const {
    globalControlTypeBg: controlType,
    globalBgImageType: type,
    globalBgImageCmsField: cmsField,
    globalBgImageResource: resource,
    globalBgImagePosition: position,
    globalBgImageSize: size,
    globalBgImageRepeat: repeat,
    globalBgImageResourceEnd: resourceEnd,
    globalBgImagePositionEnd: positionEnd,
    globalBgImageSizeEnd: sizeEnd,
    globalBgImageRepeatEnd: repeatEnd
  } = app.props;
  if (type === "cms")
    return classnames([size, repeat, position]).toString();
  const wantsPeer = (args == null ? void 0 : args.peer) || !1, wantsActive = (args == null ? void 0 : args.active) || !1, wantsFocus = (args == null ? void 0 : args.focus) || !1, hasPrefix = (args == null ? void 0 : args.prefix) && (args == null ? void 0 : args.prefixCallback) || !1, prefixCallback = (args == null ? void 0 : args.prefixCallback) || (() => {
  }), classes = classnames().add([
    `bg-[url(${resource == null ? void 0 : resource.image})]`,
    size,
    repeat,
    position
  ]);
  return controlType == "hover" && (wantsPeer ? classes.add([
    `peer-hover:bg-[url(${resourceEnd == null ? void 0 : resourceEnd.image})]`,
    sizeEnd.replace(/hover:/g, "peer-hover:"),
    repeatEnd.replace(/hover:/g, "peer-hover:"),
    positionEnd.replace(/hover:/g, "peer-hover:")
  ]) : hasPrefix ? classes.add([
    prefixCallback(`bg-[url(${resourceEnd == null ? void 0 : resourceEnd.image})]`, args.prefix),
    prefixCallback(sizeEnd.replace(/hover:/g, ""), args.prefix),
    prefixCallback(repeatEnd.replace(/hover:/g, ""), args.prefix),
    prefixCallback(positionEnd.replace(/hover:/g, ""), args.prefix)
  ]) : classes.add([
    `hover:bg-[url(${resourceEnd == null ? void 0 : resourceEnd.image})]`,
    sizeEnd,
    repeatEnd,
    positionEnd
  ]), wantsActive && classes.add([
    `data-[active=true]:bg-[url(${resourceEnd == null ? void 0 : resourceEnd.image})]`,
    sizeEnd.replace(/hover:/g, "data-[active=true]:"),
    repeatEnd.replace(/hover:/g, "data-[active=true]:"),
    positionEnd.replace(/hover:/g, "data-[active=true]:")
  ]), wantsFocus && classes.add([
    `focus:bg-[url(${resourceEnd == null ? void 0 : resourceEnd.image})]`,
    sizeEnd.replace(/hover:/g, "focus:"),
    repeatEnd.replace(/hover:/g, "focus:"),
    positionEnd.replace(/hover:/g, "focus:")
  ])), classes.toString();
}, globalBgVideoThumbnail = (app, args) => {
  const { globalBgVideo: video } = app.props;
  return classnames([
    `bg-[url(${video == null ? void 0 : video.image})] bg-cover bg-center`
  ]).toString();
}, globalBackground = (app, args = {}) => {
  const { globalControlTypeBg: controlType, globalBgType: type } = app.props;
  if (controlType == "none")
    return "";
  switch (type) {
    case "color":
      return globalBgColor(app, args);
    case "gradient":
      return globalBgGradient(app, args);
    case "image":
      return globalBgImage(app, args);
    case "video":
      return globalBgVideoThumbnail(app, args);
    case "none":
      return "";
    default:
      return console.error("Invalid background type:", type), "";
  }
}, globalBgImageFetchPriority = (rw) => {
  const {
    globalBgImageFetchPriority: globalBgImageFetchPriority2,
    globalBgType,
    globalBgImageResource,
    globalBgImageResourceEnd
  } = rw.props;
  if (globalBgType != "image")
    return {
      wantsFetchPriority: !1,
      linkElement: "",
      linkElementEnd: ""
    };
  const globalBgImageFetchPriorityEnabled = globalBgImageFetchPriority2 != "auto";
  let globalBgImageFetchPriorityLinkElement = "";
  globalBgImageResource != null && globalBgImageResource.image && (globalBgImageFetchPriorityLinkElement = `<link rel='preload' href='${globalBgImageResource == null ? void 0 : globalBgImageResource.image}' as='image' fetchpriority='${globalBgImageFetchPriority2}' />`);
  let globalBgImageFetchPriorityLinkElementEnd = "";
  return globalBgImageResourceEnd != null && globalBgImageResourceEnd.image && (globalBgImageFetchPriorityLinkElementEnd = `<link rel='preload' href='${globalBgImageResourceEnd == null ? void 0 : globalBgImageResourceEnd.image}' as='image' fetchpriority='${globalBgImageFetchPriority2}' />`), {
    globalBgImageFetchPriorityEnabled,
    globalBgImageFetchPriorityLinkElement,
    globalBgImageFetchPriorityLinkElementEnd
  };
}, globalBorders = (app, args = {}) => {
  const {
    globalControlTypeBorders: type,
    globalBordersColor: color,
    globalBordersColorOpacity: colorOpacity,
    globalBordersWidth: width,
    globalBordersRadius: radius,
    globalBordersStyle: style,
    globalBordersColorEnd: colorEnd,
    globalBordersColorOpacityEnd: colorOpacityEnd,
    globalBordersWidthEnd: widthEnd,
    globalBordersRadiusEnd: radiusEnd,
    globalBordersStyleEnd: styleEnd
  } = app.props, classes = [], { node } = app;
  node.isContainer = args.isContainer || !1;
  const wantsActive = args.active || !1, wantsFocus = args.focus || !1;
  if (type == "none")
    return "";
  classes.push(
    width,
    style,
    radius,
    color.split(" ").filter(Boolean).map((c) => `${c.trim()}/${colorOpacity}`).join(" ")
  );
  const prefix = getHoverPrefix(node, "background", "self");
  if (type == "hover" && classes.push(
    widthEnd,
    radiusEnd,
    `${prefix}:${styleEnd}`,
    colorEnd.split(" ").filter(Boolean).map((c) => `${prefix}:${c.trim()}/${colorOpacityEnd}`).join(" ")
  ), wantsActive) {
    const endColor = type == "hover" ? colorEnd : color, endWidth = type == "hover" ? widthEnd : width, endRadius = type == "hover" ? radiusEnd : radius, endStyle = type == "hover" ? styleEnd : style;
    classes.push(
      endWidth.replace(/hover/g, "data-[active=true]"),
      endRadius.replace(/hover/g, "data-[active=true]"),
      `data-[active=true]:${endStyle}`,
      endColor.split(" ").filter(Boolean).map((c) => `data-[active=true]:${c.trim()}/${colorOpacityEnd}`).join(" ")
    );
  }
  if (wantsFocus) {
    const endColor = type == "hover" ? colorEnd : color, endWidth = type == "hover" ? widthEnd : width, endRadius = type == "hover" ? radiusEnd : radius, endStyle = type == "hover" ? styleEnd : style;
    classes.push(
      endWidth.replace(/hover/g, "focus"),
      endRadius.replace(/hover/g, "focus"),
      `${prefix.replace(/hover/g, "focus")}:${endStyle}`,
      endColor.split(" ").filter(Boolean).map((c) => `${prefix.replace(/hover/g, "focus")}:${c.trim()}/${colorOpacityEnd}`).join(" ")
    );
  }
  return classnames(classes).toString();
}, globalOutline = (rw) => {
  const {
    globalControlTypeOutline,
    globalOutlineStyle,
    globalOutlineColor,
    globalOutlineColorOpacity,
    globalOutlineWidth,
    globalOutlineOffset,
    globalOutlineColorFocus,
    globalOutlineColorOpacityFocus,
    globalOutlineWidthFocus,
    globalOutlineOffsetFocus
  } = rw.props, classes = classnames();
  return globalControlTypeOutline == "none" ? "" : (globalControlTypeOutline != "none" && classes.add([
    `${globalOutlineStyle}`,
    `${globalOutlineColor}/${globalOutlineColorOpacity}`,
    globalOutlineWidth,
    globalOutlineOffset
  ]), globalControlTypeOutline == "focus" && classes.add([
    `${globalOutlineColorFocus}/${globalOutlineColorOpacityFocus}`,
    globalOutlineWidthFocus,
    globalOutlineOffsetFocus
  ]), classes.toString());
};
function addPrefixToTailwindClasses(classString, prefix) {
  return classString.split(/\s+/).map((cls) => {
    if (cls = cls.replace(/hover:/g, ""), cls.includes(`${prefix}:`)) return cls;
    const match = cls.match(/^([a-z0-9]+:)(.+)$/i);
    return match ? `${match[1]}${prefix}:${match[2]}` : `${prefix}:${cls}`;
  }).join(" ");
}
const advancedClasses = (rw) => {
  const { display, cssClasses, overflow, zIndex } = rw.props;
  return classnames([display, cssClasses, overflow, zIndex]).toString();
}, classnames = (initialClasses = "") => {
  let initialClassArray = Array.isArray(initialClasses) ? initialClasses : initialClasses.split(" ").filter(Boolean), classes = new Set(initialClassArray), currentModifier = "";
  return {
    /**
     * Adds one or more class names.
     *
     * @param {string|string[]} className - A single class name or an array of class names to add.
     * @returns {Object} The classnames instance for chaining.
     */
    add(className) {
      return (Array.isArray(className) ? className : [className]).forEach((cls) => classes.add(cls)), this;
    },
    /**
     * Removes one or more class names.
     *
     * @param {string|string[]} className - A single class name or an array of class names to remove.
     * @returns {Object} The classnames instance for chaining.
     */
    remove(className) {
      return (Array.isArray(className) ? className : [className]).forEach((cls) => classes.delete(cls)), this;
    },
    /**
     * Toggles one or more class names.
     *
     * @param {string|string[]} classToToggle - A single class name or an array of class names to toggle.
     * @returns {Object} The classnames instance for chaining.
     */
    toggle(className) {
      return (Array.isArray(className) ? className : [className]).forEach((cls) => {
        classes.has(cls) ? classes.delete(cls) : classes.add(cls);
      }), this;
    },
    /**
     * Sets a CSS modifier (e.g., 'hover', 'focus').
     *
     * @param {string} modifier - The modifier to set, with or without a trailing colon.
     * @returns {Object} The classnames instance for chaining.
     */
    modifier(modifier) {
      return modifier ? (currentModifier = modifier.replace(/:$/, "").trim(), this) : this;
    },
    /**
     * Gets the final class string with the current modifier applied.
     *
     * @returns {string} The final class string.
     */
    getClasses() {
      const classArray = Array.from(classes);
      return currentModifier ? classArray.map((cls) => `${currentModifier}:${cls}`).join(" ") : classArray.filter(Boolean).join(" ");
    },
    /**
     * Returns the class string when the classnames instance is coerced to a string.
     *
     * @returns {string} The final class string.
     */
    toString() {
      return this.getClasses();
    }
  };
}, getHoverPrefix = (node = {}, applyTo = "", hoverGroup = "self", customId = "") => {
  const needsPeerPrefix = node.isContainer && ["background", "content"].includes(applyTo);
  return hoverGroup === "parent" ? `group-hover/${node.parent.id}` : hoverGroup === "custom" ? `group-hover/${customId}` : needsPeerPrefix && hoverGroup === "self" ? `group-hover/${node.id}` : hoverGroup === "self" ? needsPeerPrefix ? "peer-hover" : "hover" : `group-hover/${hoverGroup}`;
}, globalHTMLTag = (app, fallback = "div") => {
  const { globalHTMLTag: globalHTMLTag2, globalHTMLTagCustom } = app.props;
  return globalHTMLTag2 === "custom" ? globalHTMLTagCustom.replace(/</g, "").replace(/>/g, "").replace(/[^a-zA-Z0-9]/g, "") : globalHTMLTag2 == "default" ? fallback : globalHTMLTag2 || fallback;
}, injectPrefixOnDarkModeColors = (prefix, classes) => classes.replace(/dark:(.*)/g, `dark:${prefix}:$1`), globalEffects = (app, args = {}) => {
  const {
    globalEffectsApplyTo: applyTo,
    globalControlTypeEffects: type,
    globalHoverGroupEffects: hoverGroup,
    globalHoverGroupCustomIdEffects: customId,
    globalBoxShadow: boxShadow,
    globalOpacity: opacity,
    globalBoxShadowEnd: boxShadowEnd,
    globalOpacityEnd: opacityEnd
  } = app.props, { node } = app;
  node.isContainer = args.isContainer || !1;
  const wantsActive = args.active || !1, wantsFocus = args.focus || !1, prefix = getHoverPrefix(node, applyTo, hoverGroup, customId), classes = [];
  return type != "none" && classes.push(boxShadow, opacity), type == "hover" && (classes.push(`${prefix}:${boxShadowEnd}`, `${prefix}:${opacityEnd}`), wantsActive && classes.push(
    `data-[active=true]:${boxShadowEnd}`,
    `data-[active=true]:${opacityEnd}`
  ), wantsFocus && classes.push(
    `${prefix.replace(/hover/g, "focus")}:${boxShadowEnd}`,
    `${prefix.replace(/hover/g, "focus")}:${opacityEnd}`
  )), classnames(classes).toString();
}, globalFilters = (app, args = {}) => {
  const {
    globalControlTypeFilters: type,
    globalHoverGroupFilters: hoverGroup,
    globalHoverGroupCustomIdFilters: customId,
    globalFiltersApplyTo: applyTo,
    // filters
    globalFiltersBlur: blur,
    globalFiltersBrightness: brightness,
    globalFiltersDropShadow: dropShadow,
    globalFiltersSaturate: saturate,
    // backdrop filters
    globalFiltersBackdropBlur: backdropBlur,
    // end filters
    globalFiltersBlurEnd: blurEnd,
    globalFiltersBrightnessEnd: brightnessEnd,
    globalFiltersDropShadowEnd: dropShadowEnd,
    globalFiltersSaturateEnd: saturateEnd,
    // end backdrop filters
    globalFiltersBackdropBlurEnd: backdropBlurEnd
  } = app.props, { node } = app;
  node.isContainer = args.isContainer || !1;
  const wantsActive = args.active || !1, wantsFocus = args.focus || !1, prefix = getHoverPrefix(node, applyTo, hoverGroup, customId);
  if (type == "none")
    return "";
  const wantsBlur = !blur.endsWith("[0px]") || !blurEnd.endsWith("[0px]"), wantsBackdropBlur = !backdropBlur.endsWith("[0px]") || !backdropBlurEnd.endsWith("[0px]"), classes = [
    wantsBlur ? blur : "",
    brightness,
    dropShadow,
    saturate,
    wantsBackdropBlur ? backdropBlur : ""
  ];
  return type == "hover" && (classes.push(
    wantsBlur ? `${prefix}:${blurEnd}` : "",
    `${prefix}:${brightnessEnd}`,
    `${prefix}:${dropShadowEnd}`,
    `${prefix}:${saturateEnd}`,
    wantsBackdropBlur ? `${prefix}:${backdropBlurEnd}` : ""
  ), wantsActive && classes.push(
    `data-[active=true]:${blurEnd}`,
    `data-[active=true]:${brightnessEnd}`,
    `data-[active=true]:${dropShadowEnd}`,
    `data-[active=true]:${saturateEnd}`,
    `data-[active=true]:${backdropBlurEnd}`
  ), wantsFocus && classes.push(
    `${prefix.replace(/hover/g, "focus")}:${blurEnd}`,
    `${prefix.replace(/hover/g, "focus")}:${brightnessEnd}`,
    `${prefix.replace(/hover/g, "focus")}:${dropShadowEnd}`,
    `${prefix.replace(/hover/g, "focus")}:${saturateEnd}`,
    `${prefix.replace(/hover/g, "focus")}:${backdropBlurEnd}`
  )), classnames(classes).toString();
}, globalOverlayColor = (app, prefix) => {
  const {
    globalControlTypeOverlay: controlType,
    globalOverlayColor: color,
    globalOverlayColorOpacity: opacity,
    globalOverlayColorEnd: colorEnd,
    globalOverlayColorOpacityEnd: opacityEnd
  } = app.props, classes = classnames([color, `${opacity} dark:${opacity}`]);
  return controlType == "hover" && classes.add([
    injectPrefixOnDarkModeColors(prefix, `${prefix}:${colorEnd}`),
    `${prefix}:${opacityEnd}`,
    `dark:${prefix}:${opacityEnd}`
  ]), classes.toString();
}, globalOverlayGradient = (app, prefix) => {
  const {
    globalControlTypeOverlay: controlType,
    globalOverlayGradientDirection: direction,
    globalOverlayGradientDirectionEnd: directionEnd,
    globalOverlayGradientFromColor: fromColor,
    globalOverlayGradientFromOpacity: fromOpacity,
    globalOverlayGradientFromPosition: fromPosition,
    globalOverlayGradientViaEnabled: viaEnabled,
    globalOverlayGradientViaColor: viaColor,
    globalOverlayGradientViaOpacity: viaOpacity,
    globalOverlayGradientViaPosition: viaPosition,
    globalOverlayGradientToColor: toColor,
    globalOverlayGradientToOpacity: toOpacity,
    globalOverlayGradientToPosition: toPosition,
    globalOverlayGradientFromColorEnd: fromColorEnd,
    globalOverlayGradientFromOpacityEnd: fromOpacityEnd,
    globalOverlayGradientFromPositionEnd: fromPositionEnd,
    globalOverlayGradientViaEnabledEnd: viaEnabledEnd,
    globalOverlayGradientViaColorEnd: viaColorEnd,
    globalOverlayGradientViaOpacityEnd: viaOpacityEnd,
    globalOverlayGradientViaPositionEnd: viaPositionEnd,
    globalOverlayGradientToColorEnd: toColorEnd,
    globalOverlayGradientToOpacityEnd: toOpacityEnd,
    globalOverlayGradientToPositionEnd: toPositionEnd
  } = app.props, classes = classnames([
    direction,
    `${fromColor}/${fromOpacity}`,
    fromPosition,
    `${toColor}/${toOpacity}`,
    toPosition
  ]);
  return viaEnabled == "true" && classes.add([
    `${viaColor}/${viaOpacity}`,
    viaPosition
  ]), controlType == "hover" && (classes.add([
    `${prefix}:${directionEnd}`,
    `${prefix}:${fromColorEnd}/${fromOpacityEnd}`,
    `${prefix}:${fromPositionEnd}`,
    `${prefix}:${toColorEnd}/${toOpacityEnd}`,
    `${prefix}:${toPositionEnd}`
  ]), viaEnabledEnd == "true" && classes.add([
    `${prefix}:${viaColorEnd}/${viaOpacityEnd}`,
    `${prefix}:${viaPositionEnd}`
  ])), classes.toString();
}, globalOverlayImage = (app, prefix) => {
  const {
    globalControlTypeOverlay: controlType,
    globalOverlayImageResource: resource,
    globalOverlayImagePositionX: x,
    globalOverlayImagePositionY: y,
    globalOverlayImageSize: size,
    globalOverlayImageRepeat: repeat,
    globalOverlayImageResourceEnd: resourceEnd,
    globalOverlayImagePositionXEnd: xEnd,
    globalOverlayImagePositionYEnd: yEnd,
    globalOverlayImageSizeEnd: sizeEnd,
    globalOverlayImageRepeatEnd: repeatEnd
  } = app.props, bgPosition = (horizontal, vertical) => {
    const mappings = {
      "center-top": "bg-top",
      "center-bottom": "bg-bottom",
      "left-center": "bg-left",
      "right-center": "bg-right",
      "center-center": "bg-center"
    }, key = `${horizontal}-${vertical}`;
    return mappings[key] || `bg-${key}`;
  }, classes = classnames().add([
    `bg-[url(${app.getResource(resource, 1200)})]`,
    size,
    repeat,
    bgPosition(x, y)
  ]);
  return controlType == "hover" && classes.add([
    `${prefix}:bg-[url(${app.getResource(resourceEnd, 1200)})]`,
    `${prefix}:${sizeEnd}`,
    `${prefix}:${repeatEnd}`,
    `${prefix}:${bgPosition(xEnd, yEnd)}`
  ]), classes.toString();
}, globalOverlay = (app, isContainer = !1) => {
  const { globalControlTypeOverlay: controlType, globalOverlayType: type } = app.props, { node } = app;
  node.isContainer = isContainer;
  const prefix = getHoverPrefix(node, "background", "self");
  if (controlType == "none")
    return "";
  switch (type) {
    case "color":
      return globalOverlayColor(app, prefix);
    case "gradient":
      return globalOverlayGradient(app, prefix);
    case "image":
      return globalOverlayImage(app, prefix);
    case "none":
      return "";
    default:
      return console.error("Invalid background type:", type), "";
  }
}, globalFilter = (rw) => {
  const {
    globalFilterEnable: wantsFilter,
    globalFilterGroup: group,
    globalFilterCustomGroupId: groupId,
    globalFilterTransition: transition = null
  } = rw.props, { parent } = rw.node, filterGroupId = group == "parent" ? parent.id : groupId;
  return {
    wantsFilter,
    filterGroupId,
    transition,
    args: wantsFilter ? {
      "data-filter-group": filterGroupId,
      "data-filter-transition": transition
    } : {}
  };
}, globalLink = (app) => {
  var _a;
  const { globalLink: link = null } = app.props, hasLink = typeof link == "object" && Object.keys(link).length > 0 && link.href.length > 0;
  let linkAttributes = {
    hasLink,
    args: {}
  };
  if (!hasLink) return linkAttributes;
  const { href, title, target } = link, attrs = (_a = link.attributes) == null ? void 0 : _a.reduce((acc, { key, value }) => ({ ...acc, [key]: value }), {});
  return linkAttributes.args = {
    ...attrs,
    href,
    title,
    target
  }, linkAttributes;
}, globalActAsGridOrFlexItem = (app) => {
  const {
    globalGridOrFlexDisplayAs: displayAs,
    globalGridOrFlexItemSettings: settingsType,
    // Grid Item
    globalGridItemColSpan: colSpan,
    globlaGridItemColStart: colStart,
    globalGridItemColEnd: colEnd,
    globalGridItemRowSpan: rowSpan,
    globalGridItemRowStart: rowStart,
    globalGridItemRowEnd: rowEnd,
    // Flex Item
    globalFlexItemFlex: flex,
    globalFlexItemShrink: shrink,
    globalFlexItemGrow: grow,
    globalFlexItemBasis: basis,
    globalFlexItemBasisCustom: basisCustom,
    // General
    globalGridOrFlexItemAlignSelf: alignSelf,
    globalGridOrFlexItemJustifySelf: justifySelf,
    globalGridOrFlexItemOrder: order,
    globalGridOrFlexItemOrderCustom: orderCustom
  } = app.props;
  if (displayAs == "default")
    return !1;
  const classes = [];
  return displayAs == "flex" && classes.push(
    alignSelf,
    justifySelf,
    ...settingsType === "advanced" ? [
      flex,
      shrink,
      grow,
      basis == "custom" ? basisCustom : basis,
      order == "custom" ? orderCustom : order
    ] : []
  ), displayAs == "grid" && classes.push(
    colSpan,
    rowSpan,
    ...settingsType === "advanced" ? [
      colStart !== "col-start-auto" ? colStart : void 0,
      colEnd !== "col-end-auto" ? colEnd : void 0,
      rowStart !== "row-start-auto" ? rowStart : void 0,
      rowEnd !== "row-end-auto" ? rowEnd : void 0,
      alignSelf,
      justifySelf,
      order == "custom" ? orderCustom : order
    ] : []
  ), classnames(classes).toString();
}, getHiddenClasses = (hidden = {}, defaultDisplay = "block") => Object.keys(hidden).length === 0 ? defaultDisplay : Object.entries(hidden).reduce((classes, [breakpoint, isHidden]) => {
  const modifier = breakpoint === "base" ? "" : `${breakpoint}:`, className = isHidden ? `${modifier}hidden` : `${modifier}${defaultDisplay}`;
  return classes ? `${classes} ${className}` : className;
}, ""), globalLayout = (app, args = {}) => {
  const {
    globalLayoutPosition: position,
    globalLayoutZIndexType: zIndexType,
    globalLayoutZIndex: zIndex,
    globalLayoutTopRightBottomLeftType: topRightBottomLeftType,
    globalLayoutInset: inset,
    globalLayoutTop: top,
    globalLayoutRight: right,
    globalLayoutBottom: bottom,
    globalLayoutLeft: left,
    globalLayoutOverflow: overflow,
    globalLayoutIsolation: isolation,
    globalLayoutVisibility: visibility
  } = app.props, { globalLayoutHidden } = app.responsiveProps, { defaultDisplay } = args, hidden = getHiddenClasses(globalLayoutHidden, defaultDisplay);
  return classnames([
    position,
    zIndexType !== "custom" ? zIndexType : zIndex,
    topRightBottomLeftType === "uniform" && inset,
    ...topRightBottomLeftType === "individual" ? [top, right, bottom, left].filter(Boolean) : [],
    overflow,
    isolation,
    visibility,
    hidden
  ]).toString();
}, globalMenuItem = (rw) => {
  const {
    globalMenuItemFontFamily,
    globalMenuItemTextStyles,
    globalMenuItemFontWeight,
    globalMenuItemLetterSpacing,
    globalMenuItemItalic,
    globalMenuItemState,
    globalMenuItemColor,
    globalMenuItemOpacity,
    globalMenuItemTextShadow,
    globalMenuItemUnderline,
    globalMenuItemHoverColor,
    globalMenuItemHoverOpacity,
    globalMenuItemHoverTextShadow,
    globalMenuItemHoverUnderline
  } = rw.props;
  return classnames([
    globalMenuItemFontFamily,
    globalMenuItemTextStyles,
    globalMenuItemFontWeight,
    globalMenuItemLetterSpacing,
    globalMenuItemItalic,
    globalMenuItemState,
    globalMenuItemColor,
    globalMenuItemOpacity,
    globalMenuItemTextShadow,
    globalMenuItemUnderline,
    globalMenuItemHoverColor,
    globalMenuItemHoverOpacity,
    globalMenuItemHoverTextShadow,
    globalMenuItemHoverUnderline
  ]).toString();
}, globalNavItems = (rw, isActive = !1) => {
  const {
    globalNavItemsTextColor: textColor,
    globalNavItemsTextColorOpacity: textColorOpacity,
    globalNavItemsFont: font,
    globalNavItemsFontSize: fontSize,
    globalNavItemsTextShadow: textShadow,
    globalNavItemsFontWeight: fontWeight,
    globalNavItemsLetterSpacing: letterSpacing,
    globalNavItemsItalic: italic,
    globalNavItemsUnderline: underline,
    globalNavItemsTextColorHover: textColorHover,
    globalNavItemsTextColorOpacityHover: textColorOpacityHover,
    globalNavItemsTextShadowHover: textShadowHover,
    globalNavItemsUnderlineHover: underlineHover
  } = rw.props;
  console.log({ fontWeight });
  const inactiveStyles = {
    textColor,
    textColorOpacity,
    font,
    fontSize,
    textShadow,
    fontWeight,
    letterSpacing,
    italic,
    underline
  }, activeStyles = {
    ...inactiveStyles,
    textColor: textColorHover,
    textColorOpacity: textColorOpacityHover,
    textShadow: textShadowHover,
    underline: underlineHover
  }, activeStylesFormatted = Object.fromEntries(
    Object.entries(activeStyles).map(([key, value]) => [key, value.replace(/hover:/g, "")])
  ), hoverStyles = {
    textColorHover,
    textColorOpacityHover,
    textShadowHover,
    underlineHover
  };
  return classnames([
    ...Object.values(isActive ? activeStylesFormatted : inactiveStyles),
    ...Object.values(hoverStyles)
  ]).toString();
}, globalNavTitle = (rw) => {
  const {
    globalNavTitleTextColor,
    globalNavTitleTextColorOpacity,
    globalNavTitleFont,
    globalNavTitleFontSize,
    globalNavTitleTextShadow,
    globalNavTitleFontWeight,
    globalNavTitleFontLetterSpacing,
    globalNavTitleItalic,
    globalNavTitleUnderline
  } = rw.props;
  return classnames([
    `${globalNavTitleTextColor}/${globalNavTitleTextColorOpacity}`,
    globalNavTitleFont,
    globalNavTitleFontSize,
    globalNavTitleTextShadow,
    globalNavTitleFontWeight,
    globalNavTitleFontLetterSpacing,
    globalNavTitleItalic,
    globalNavTitleUnderline
  ]).toString();
}, aspectRatioClasses = (rw) => {
  const { aspectRatio, aspectRatioCustom } = rw.props, aspectRatioClasses2 = {
    "aspect-[auto]": rw.component.title == "Video" ? "aspect-video" : "aspect-[auto]",
    "aspect-[custom]": aspectRatioCustom
  };
  return classnames().add(aspectRatioClasses2[aspectRatio] || aspectRatio).toString();
}, globalSizing = (app) => {
  const {
    globalHeight: height,
    globalWidth: width,
    globalSizingMinMaxEnabled: minMaxEnabled,
    globalMinWidth: minWidth,
    globalMaxWidth: maxWidth,
    globalMinHeight: minHeight,
    globalMaxHeight: maxHeight
  } = app.props, classes = classnames([width, height]);
  return minMaxEnabled == "true" && classes.add([minWidth, minHeight, maxWidth, maxHeight]), classes.toString();
}, globalSizingContainer = (app) => {
  const {
    globalWidthType: widthType,
    globalWidth: width,
    globalHeightType: heightType,
    globalHeight: height,
    globalSizingMinMaxEnabled: minMaxEnabled,
    globalMinWidth: minWidth,
    globalMaxWidth: maxWidth,
    globalMinHeight: minHeight,
    globalMaxHeight: maxHeight
  } = app.props, widthClasses = {
    auto: "w-auto",
    full: "w-full",
    screen: "w-screen",
    container: "container w-full",
    theme: width
  }, heightClasses = {
    auto: "h-auto",
    full: "h-full",
    screen: "h-screen",
    theme: height
  }, classes = classnames([
    widthClasses[widthType],
    heightClasses[heightType]
  ]);
  return minMaxEnabled == "true" && classes.add([minWidth, minHeight, maxWidth, maxHeight]), classes.toString();
}, objectClasses = (rw) => {
  const { aspectRatio, objectFit, objectPosition } = rw.props;
  return classnames([
    aspectRatio !== "aspect-[auto]" ? objectFit : "",
    objectPosition
  ]).toString();
}, globalSpacing = (app) => {
  const {
    globalSpacingEnabled: enabled,
    globalMargin: margin,
    globalPadding: padding
  } = app.props;
  return enabled == "false" ? !1 : classnames([margin, padding]).toString();
}, globalSpacingMargin = (app) => {
  const {
    globalSpacingEnabled: enabled,
    globalMargin: margin
  } = app.props;
  return enabled == "false" ? !1 : margin;
}, globalSpacingPadding = (app) => {
  const {
    globalSpacingEnabled: enabled,
    globalPadding: padding
  } = app.props;
  return enabled == "false" ? !1 : padding;
}, globalTransforms = (app, args = {}) => {
  const {
    globalControlTypeTransforms: type,
    globalHoverGroupTransforms: hoverGroup,
    globalHoverGroupCustomIdTransforms: customId,
    globalTransformsApplyTo: applyTo,
    globalTransformOrigin: origin,
    globalTransformScale: scale,
    globalTransformRotate: rotate,
    globalTransformSkewX: skewX,
    globalTransformSkewY: skewY,
    globalTransformTranslateX: translateX,
    globalTransformTranslateY: translateY,
    globalTransformScaleEnd: scaleEnd,
    globalTransformRotateEnd: rotateEnd,
    globalTransformSkewXEnd: skewXEnd,
    globalTransformSkewYEnd: skewYEnd,
    globalTransformTranslateXEnd: translateXEnd,
    globalTransformTranslateYEnd: translateYEnd
  } = app.props, { node } = app;
  node.isContainer = args.isContainer || !1;
  const wantsActive = args.active || !1, wantsFocus = args.focus || !1, prefix = getHoverPrefix(node, applyTo, hoverGroup, customId), classes = classnames();
  return type != "none" && classes.add([
    "transform",
    origin,
    scale,
    rotate,
    skewX,
    skewY,
    translateX,
    translateY
  ]), type == "hover" && (classes.add([
    addPrefixToTailwindClasses(scaleEnd, prefix),
    addPrefixToTailwindClasses(rotateEnd, prefix),
    addPrefixToTailwindClasses(skewXEnd, prefix),
    addPrefixToTailwindClasses(skewYEnd, prefix),
    addPrefixToTailwindClasses(translateXEnd, prefix),
    addPrefixToTailwindClasses(translateYEnd, prefix)
  ]), wantsActive && classes.add([
    `data-[active=true]:${scaleEnd}`,
    `data-[active=true]:${rotateEnd}`,
    `data-[active=true]:${skewXEnd}`,
    `data-[active=true]:${skewYEnd}`,
    `data-[active=true]:${translateXEnd}`,
    `data-[active=true]:${translateYEnd}`
  ]), wantsFocus && classes.add([
    `${prefix.replace(/hover/g, "focus")}:${scaleEnd}`,
    `${prefix.replace(/hover/g, "focus")}:${rotateEnd}`,
    `${prefix.replace(/hover/g, "focus")}:${skewXEnd}`,
    `${prefix.replace(/hover/g, "focus")}:${skewYEnd}`,
    `${prefix.replace(/hover/g, "focus")}:${translateXEnd}`,
    `${prefix.replace(/hover/g, "focus")}:${translateYEnd}`
  ])), classes.toString();
}, alpineTransitionsDesktop = {
  fade: {
    enter: "transition ease-out",
    enterStart: "opacity-0",
    enterEnd: "opacity-100",
    leave: "transition ease-in",
    leaveStart: "opacity-100",
    leaveEnd: "opacity-0"
  },
  slideDown: {
    enter: "transition ease-out duration-300",
    enterStart: "opacity-0 -translate-y-3",
    enterEnd: "opacity-100 translate-y-0",
    leave: "transition ease-in duration-300",
    leaveStart: "opacity-100 translate-y-0",
    leaveEnd: "opacity-0 -translate-y-3"
  },
  slideDownShort: {
    enter: "transition ease-out",
    enterStart: "opacity-0 -translate-y-3",
    enterEnd: "opacity-100 translate-y-0",
    leave: "transition ease-in",
    leaveStart: "opacity-100 translate-y-0",
    leaveEnd: "opacity-0 -translate-y-3"
  },
  slideUp: {
    enter: "transition ease-out duration-300",
    enterStart: "opacity-0 translate-y-3",
    enterEnd: "opacity-100 translate-y-0",
    leave: "transition ease-in duration-300",
    leaveStart: "opacity-100 translate-y-0",
    leaveEnd: "opacity-0 translate-y-3"
  },
  slideUpShort: {
    enter: "transition ease-out",
    enterStart: "opacity-0 translate-y-3",
    enterEnd: "opacity-100 translate-y-0",
    leave: "transition ease-in",
    leaveStart: "opacity-100 translate-y-0",
    leaveEnd: "opacity-0 translate-y-3"
  },
  slideLeft: {
    enter: "transition ease-out duration-300",
    enterStart: "opacity-0 -translate-x-3",
    enterEnd: "opacity-100 translate-x-0",
    leave: "transition ease-in duration-300",
    leaveStart: "opacity-100 translate-x-0",
    leaveEnd: "opacity-0 -translate-x-3"
  },
  slideLeftShort: {
    enter: "transition ease-out",
    enterStart: "opacity-0 translate-x-3",
    enterEnd: "opacity-100 translate-x-0",
    leave: "transition ease-in",
    leaveStart: "opacity-100 translate-x-0",
    leaveEnd: "opacity-0 translate-x-3"
  },
  slideRight: {
    enter: "transition ease-out duration-300",
    enterStart: "opacity-0 -translate-x-3",
    enterEnd: "opacity-100 translate-x-0",
    leave: "transition ease-in duration-300",
    leaveStart: "opacity-100 translate-x-0",
    leaveEnd: "opacity-0 -translate-x-3"
  },
  slideRightShort: {
    enter: "transition ease-out",
    enterStart: "opacity-0 -translate-x-3",
    enterEnd: "opacity-100 translate-x-0",
    leave: "transition ease-in",
    leaveStart: "opacity-100 translate-x-0",
    leaveEnd: "opacity-0 -translate-x-3"
  },
  zoom: {
    enter: "transition ease-out",
    enterStart: "opacity-0 scale-95",
    enterEnd: "opacity-100 scale-100",
    leave: "transition ease-in",
    leaveStart: "opacity-100 scale-100",
    leaveEnd: "opacity-0 scale-95"
  },
  none: {
    enter: "duration-0",
    enterStart: "",
    enterEnd: "",
    leave: "duration-0",
    leaveStart: "",
    leaveEnd: ""
  }
}, getAlpineTransitionAttributesDesktop = (transitionName) => {
  const { enter, enterStart, enterEnd, leave, leaveStart, leaveEnd } = alpineTransitionsDesktop[transitionName] || alpineTransitionsDesktop.fade;
  return Object.entries({
    "x-transition:enter": enter,
    "x-transition:enter-start": enterStart,
    "x-transition:enter-end": enterEnd,
    "x-transition:leave": leave,
    "x-transition:leave-start": leaveStart,
    "x-transition:leave-end": leaveEnd
  }).filter(([key, value]) => value).map(([key, value]) => `${key}="${value}"`).join(" ");
}, alpineTransitionsMobile = {
  fade: {
    enter: "transition ease-out",
    enterStart: "opacity-0",
    enterEnd: "opacity-100",
    leave: "transition ease-in",
    leaveStart: "opacity-100",
    leaveEnd: "opacity-0"
  },
  slideDown: {
    enter: "transition ease-out",
    enterStart: "opacity-0 -translate-y-full",
    enterEnd: "opacity-100 translate-y-0",
    leave: "transition ease-in",
    leaveStart: "opacity-100 translate-y-0",
    leaveEnd: "opacity-0 -translate-y-full"
  },
  slideDownShort: {
    enter: "transition ease-out",
    enterStart: "opacity-0 -translate-y-3",
    enterEnd: "opacity-100 translate-y-0",
    leave: "transition ease-in",
    leaveStart: "opacity-100 translate-y-0",
    leaveEnd: "opacity-0 -translate-y-3"
  },
  slideUp: {
    enter: "transition ease-out",
    enterStart: "opacity-0 translate-y-full",
    enterEnd: "opacity-100 translate-y-0",
    leave: "transition ease-in",
    leaveStart: "opacity-100 translate-y-0",
    leaveEnd: "opacity-0 translate-y-full"
  },
  slideUpShort: {
    enter: "transition ease-out",
    enterStart: "opacity-0 translate-y-3",
    enterEnd: "opacity-100 translate-y-0",
    leave: "transition ease-in",
    leaveStart: "opacity-100 translate-y-0",
    leaveEnd: "opacity-0 translate-y-3"
  },
  slideLeft: {
    enter: "transition ease-out",
    enterStart: "opacity-0 translate-x-full",
    enterEnd: "opacity-100 translate-x-0",
    leave: "transition ease-in",
    leaveStart: "opacity-100 translate-x-0",
    leaveEnd: "opacity-0 translate-x-full"
  },
  slideLeftShort: {
    enter: "transition ease-out",
    enterStart: "opacity-0 translate-x-3",
    enterEnd: "opacity-100 translate-x-0",
    leave: "transition ease-in",
    leaveStart: "opacity-100 translate-x-0",
    leaveEnd: "opacity-0 translate-x-3"
  },
  slideRight: {
    enter: "transition ease-out",
    enterStart: "opacity-0 -translate-x-full",
    enterEnd: "opacity-100 translate-x-0",
    leave: "transition ease-in",
    leaveStart: "opacity-100 translate-x-0",
    leaveEnd: "opacity-0 -translate-x-full"
  },
  slideRightShort: {
    enter: "transition ease-out",
    enterStart: "opacity-0 -translate-x-3",
    enterEnd: "opacity-100 translate-x-0",
    leave: "transition ease-in",
    leaveStart: "opacity-100 translate-x-0",
    leaveEnd: "opacity-0 -translate-x-3"
  },
  zoom: {
    enter: "transition ease-out",
    enterStart: "opacity-0 scale-95",
    enterEnd: "opacity-100 scale-100",
    leave: "transition ease-in",
    leaveStart: "opacity-100 scale-100",
    leaveEnd: "opacity-0 scale-95"
  },
  none: {
    enter: "duration-0",
    enterStart: "",
    enterEnd: "",
    leave: "duration-0",
    leaveStart: "",
    leaveEnd: ""
  }
}, getAlpineTransitionAttributesMobile = (transitionName) => {
  const { enter, enterStart, enterEnd, leave, leaveStart, leaveEnd } = alpineTransitionsMobile[transitionName] || alpineTransitionsMobile.fade;
  return Object.entries({
    "x-transition:enter": enter,
    "x-transition:enter-start": enterStart,
    "x-transition:enter-end": enterEnd,
    "x-transition:leave": leave,
    "x-transition:leave-start": leaveStart,
    "x-transition:leave-end": leaveEnd
  }).filter(([key, value]) => value).map(([key, value]) => `${key}="${value}"`).join(" ");
}, globalTransitions = (app, alwaysWantsHover = !1) => {
  const {
    globalControlTypeTransforms,
    globalControlTypeEffects,
    globalControlTypeFilters,
    globalFilterEnable,
    globalControlTypeBorders,
    globalControlTypeBg,
    globalControlTypeOverlay,
    globalControlTypeSVGFill,
    globalControlTypeSVGStroke,
    globalControlTypeOutline,
    globalTransitionsProperty: property,
    globalTransitionsDuration: duration,
    globalTransitionsDelay: delay,
    globalTransitionsTimingFunction: timingFunction,
    globalTransitionsTimingFunctionCustom: customTimingFunction
  } = app.props, customTimingFunctionFormatted = customTimingFunction == null ? void 0 : customTimingFunction.replace(/,\s/g, ",_");
  return alwaysWantsHover || globalFilterEnable || [
    globalControlTypeTransforms,
    globalControlTypeEffects,
    globalControlTypeFilters,
    globalControlTypeBorders,
    globalControlTypeBg,
    globalControlTypeSVGFill,
    globalControlTypeSVGStroke,
    globalControlTypeOverlay,
    globalControlTypeOutline
  ].some((prop) => !["none", "static", "", void 0, null].includes(prop)) ? classnames([
    // `transform-gpu will-change-transform`,
    property === "transition-default" ? "transition" : property,
    duration,
    delay,
    timingFunction === "custom" ? customTimingFunctionFormatted : timingFunction
  ]).toString() : "";
}, globalButtonFontAndTextStyles = (rw, args = {}) => {
  const {
    globalButtonFontAndTextStylesTextAlign,
    globalButtonFontAndTextStylesColor,
    globalButtonFontAndTextStylesColorOpacity,
    globalButtonFontAndTextStylesFont,
    globalButtonFontAndTextStylesFontSize,
    globalButtonFontAndTextStylesTextShadow,
    globalButtonFontAndTextStylesFontWeight,
    globalButtonFontAndTextStylesLineHeight,
    globalButtonFontAndTextStylesLetterSpacing,
    globalButtonFontAndTextStylesItalic,
    globalButtonFontAndTextStylesUnderline,
    globalButtonFontAndTextStylesTextTransform,
    globalButtonFontAndTextStylesColorHover,
    globalButtonFontAndTextStylesColorOpacityHover,
    globalButtonFontAndTextStylesTextShadowHover
  } = rw.props, wantsFocus = args.focus || !1, wantsActive = args.active || !1, classes = classnames([
    globalButtonFontAndTextStylesTextAlign,
    globalButtonFontAndTextStylesColor,
    globalButtonFontAndTextStylesColorOpacity,
    globalButtonFontAndTextStylesFont,
    globalButtonFontAndTextStylesFontSize,
    globalButtonFontAndTextStylesTextShadow,
    globalButtonFontAndTextStylesFontWeight,
    globalButtonFontAndTextStylesLineHeight,
    globalButtonFontAndTextStylesLetterSpacing,
    globalButtonFontAndTextStylesItalic,
    globalButtonFontAndTextStylesUnderline,
    globalButtonFontAndTextStylesTextTransform,
    globalButtonFontAndTextStylesColorHover,
    globalButtonFontAndTextStylesColorOpacityHover,
    globalButtonFontAndTextStylesTextShadowHover
  ]);
  return wantsFocus && classes.add([
    globalButtonFontAndTextStylesColorHover.replace("hover:", "focus:"),
    globalButtonFontAndTextStylesColorOpacityHover.replace("hover:", "focus:"),
    globalButtonFontAndTextStylesTextShadowHover.replace("hover:", "focus:")
  ]), wantsActive && classes.add([
    globalButtonFontAndTextStylesColorHover.replace("hover:", "data-[active=true]:"),
    globalButtonFontAndTextStylesColorOpacityHover.replace("hover:", "data-[active=true]:"),
    globalButtonFontAndTextStylesTextShadowHover.replace("hover:", "data-[active=true]:")
  ]), classes.toString();
}, globalHeadingTextColor = (rw, type, prefix) => {
  const {
    globalTextColor: color,
    globalTextColorOpacity: opacity,
    globalTextColorHover: colorHover,
    globalTextColorOpacityHover: opacityHover
  } = rw.props;
  return classnames([
    color,
    opacity,
    ...type == "hover" ? [
      addPrefixToTailwindClasses(colorHover, prefix),
      addPrefixToTailwindClasses(opacityHover, prefix)
    ] : []
  ]).toString();
}, globalHeadingColor = (rw) => {
  const {
    globalBgType,
    globalControlTypeBg: type,
    globalHoverGroupBg: hoverGroup,
    globalHoverGroupCustomIdBg: customId
  } = rw.props, { mode } = rw.project, { node } = rw, prefix = getHoverPrefix(node, "", hoverGroup, customId);
  let classes = classnames([]);
  switch (globalBgType) {
    case "color":
      classes.add(globalHeadingTextColor(rw, type, prefix));
      break;
    case "gradient":
      classes.add([
        "bg-clip-text",
        "text-[transparent]",
        ...globalBgGradient(rw, {
          prefix,
          prefixCallback: addPrefixToTailwindClasses
        }).split(" ").filter(Boolean)
      ]).modifier(mode == "edit" ? "[&_span]" : "");
      break;
    case "image":
      classes.add([
        "bg-clip-text",
        "text-[transparent]",
        ...globalBgImage(rw, {
          prefix,
          prefixCallback: addPrefixToTailwindClasses
        }).split(" ").filter(Boolean)
      ]).modifier(mode == "edit" ? "[&_span]" : "");
      break;
  }
  return classes.toString();
}, globalInputFontAndTextStyles = (rw) => {
  const {
    globalInputFontAndTextStylesColor,
    globalInputFontAndTextStylesColorOpacity,
    globalInputFontAndTextStylesTextShadow,
    globalInputFontAndTextStylesTextAlign,
    globalInputFontAndTextStylesFont,
    globalInputFontAndTextStylesFontSize,
    globalInputFontAndTextStylesFontWeight,
    globalInputFontAndTextStylesLineHeight,
    globalInputFontAndTextStylesLetterSpacing,
    globalInputFontAndTextStylesTextTransform,
    globalInputFontAndTextStylesItalic,
    globalInputFontAndTextStylesUnderline
  } = rw.props;
  return classnames([
    globalInputFontAndTextStylesColor,
    globalInputFontAndTextStylesColorOpacity,
    globalInputFontAndTextStylesTextShadow,
    globalInputFontAndTextStylesTextAlign,
    globalInputFontAndTextStylesFont,
    globalInputFontAndTextStylesFontSize,
    globalInputFontAndTextStylesFontWeight,
    globalInputFontAndTextStylesLineHeight,
    globalInputFontAndTextStylesLetterSpacing,
    globalInputFontAndTextStylesTextTransform,
    globalInputFontAndTextStylesItalic,
    globalInputFontAndTextStylesUnderline
  ]).toString();
}, globalTextFontsAndTextStyles = (app) => {
  const {
    globalTextFontFamily,
    globalTextFontSize,
    globalTextFontWeight,
    globalTextLetterSpacing,
    globalTextLineHeight,
    globalTextItalic,
    globalTextTextShadow,
    globalTextTextTransform,
    globalTextWhiteSpace,
    globalTextTextDecoration,
    globalTextTextDecorationStyle,
    globalTextTextDecorationOffset,
    globalTextTextDecorationColor,
    globalTextTextDecorationOpacity
  } = app.props;
  return classnames().add([
    globalTextFontFamily,
    globalTextFontSize,
    globalTextFontWeight,
    globalTextLetterSpacing,
    globalTextLineHeight,
    globalTextItalic,
    globalTextTextShadow,
    globalTextTextTransform,
    globalTextWhiteSpace
  ]).add(
    globalTextTextDecoration !== "no-underline" ? [
      globalTextTextDecoration,
      globalTextTextDecorationOffset,
      globalTextTextDecorationStyle,
      `${globalTextTextDecorationColor}/${globalTextTextDecorationOpacity}`
    ] : []
  ).toString();
}, transformHook = (rw) => {
  const { message } = rw.props, classes = [globalSpacing(rw), globalBorders(rw)].join(" ");
  rw.setProps({
    message,
    classes
  });
};
exports.transformHook = transformHook;