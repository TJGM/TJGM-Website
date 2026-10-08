---
title: Fusion Fix Wiki
description: The unofficial Fusion Fix for GTA IV wiki by TJGM, detailing all of the changes Fusion Fix makes to GTA IV
subtitle:
status:
icon:
social:
  cards_layout_options:
    background_color: null
    background_image: docs/resources/gtaiv/Fusion-Fix-Wiki/assets/socialcard.webp
---

## Introduction
Fusion Fix fixes and improves so many things that it can be hard to know what does what.

This section of the Wiki tries to keep track of and explain as many of these fixes and improvements as possible.

Many of the Fusion Fix images in this section have the [console gamma option](../Fusion-Fix-Wiki/options.md/#console-gamma-new){target="_blank"} enabled which is why the colours appear darker in some of the Fusion Fix comparisons.

This section is still a work-in-progress, so MANY things aren't included right now.

---

If you'd prefer to see many of these changes in video form...

This video covers almost everything significantly fixed, added and improved in Fusion Fix up to Fusion Fix 4.

<iframe width="560" height="315" src="https://www.youtube.com/embed/XTuOortPoY4?si=w3sr1bHPK4vD995a" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

This video covers most of the new additions added to Fusion Fix 5.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ohBwEdH6lqk?si=wS5ODHXCrjame0ly" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

Other sections of the Fusion Fix Wiki.

- [Configuration File](../Fusion-Fix-Wiki/config.md)
- [Download & Installation](../Fusion-Fix-Wiki/download.md)
- [In-Game Options](../Fusion-Fix-Wiki/options.md)
- [New Cheats](../Fusion-Fix-Wiki/cheats.md)

## Ambient Occlusion

Fusion Fix adds an [ambient occlusion option](../Fusion-Fix-Wiki/options.md/#ambient-occlusion-new){target="_blank"}.

Ambient occlusion simulates light being blocked by objects, giving objects much more depth than before.

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/options/AOOff.webp" alt="Ambient Occlusion Off" caption="Ambient Occlusion Off">
  <img src="../../../../assets/shared/fusionfix/options/AOOn.webp" alt="Ambient Occlusion On" caption="Ambient Occlusion On">
</div>

## Anti-Aliasing

The Xbox 360 version of GTA IV ran at 1280x720 with 2x MSAA. Meanwhile the PC version lacked any anti-aliasing whatsoever.

Fusion Fix adds an [anti-aliasing option](../Fusion-Fix-Wiki/options.md/#anti-aliasing-new){target="_blank"} that allows users to select either FXAA or SMAA, two simple and performance friendly AA solutions which do an excellent job at smoothing out jagged edges, especially at high resolutions.

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/options/AAOff.webp" alt="Anti-Aliasing Off" caption="Anti-Aliasing Off" pill="Off">
  <img src="../../../../assets/shared/fusionfix/options/AAFXAA.webp" alt="Anti-Aliasing FXAA" caption="Anti-Aliasing FXAA" pill="FXAA">
  <img src="../../../../assets/shared/fusionfix/options/AASMAA.webp" alt="Anti-Aliasing SMAA" caption="Anti-Aliasing SMAA" pill="SMAA">
</div>

## Bloom

Bloom in the vanilla game didn't scale correctly with resolution, so the higher your resolution, the smaller bloom effects became.

Fusion Fix rewrites the bloom code so it now scales with resolution correctly and looks better overall. It also adds [an option](../Fusion-Fix-Wiki/options.md/#bloom-new){target="_blank"} to enable and disable bloom completely.

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/fixes/BloomVanilla720p.webp" alt="Vanilla Bloom 720p" caption="Vanilla Bloom 720p">
  <img src="../../../../assets/shared/fusionfix/fixes/BloomVanilla1440p.webp" alt="Vanilla Bloom 1440p" caption="Vanilla Bloom 1440p">
</div>

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/fixes/BloomVanilla1440p.webp" alt="Vanilla Bloom 1440p" caption="Vanilla Bloom 1440p">
  <img src="../../../../assets/shared/fusionfix/fixes/BloomFusionFix1440p.webp" alt="Fusion Fix Bloom 1440p" caption="Fusion Fix Bloom 1440p">
</div>

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/options/BloomOff2.webp" alt="Fusion Fix Bloom Off" caption="Fusion Fix Bloom Off">
  <img src="../../../../assets/shared/fusionfix/options/BloomOn2.webp" alt="Fusion Fix Bloom On" caption="Fusion Fix Bloom On">
</div>

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/options/BloomOff1.webp" alt="Fusion Fix Bloom Off" caption="Fusion Fix Bloom Off">
  <img src="../../../../assets/shared/fusionfix/options/BloomOn1.webp" alt="Fusion Fix Bloom On" caption="Fusion Fix Bloom On">
</div>

## Camera Shake

The camera shake effect was broken above 30FPS, becoming weaker and almost invisible at higher frame rates.

Fusion Fix fixes this so the camera shake effect works correctly at all frame rates and it also adds [an option](../Fusion-Fix-Wiki/options.md/#camera-shake-new){target="_blank"} to enable and disable the camera shake effect completely.

<video width="100%" autoplay loop>
  <source src="../../../../assets/shared/fusionfix/fixes/CameraShakeBefore.mp4" type="video/mp4">
</video>

<video width="100%" autoplay loop>
  <source src="../../../../assets/shared/fusionfix/fixes/CameraShakeAfter.mp4" type="video/mp4">
</video>

## Cutscenes

Cutscenes had major issues on PC at frame rates above 30.

### Field of View

The field of view could increase massively at higher frame rates, ruining scenes and how they were meant to be presented.

Fusion Fix fixes this so the field of view is always correct even at higher resolutions.

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/fixes/CutSceneFOVBefore.webp" alt="Vanilla" caption="Vanilla">
  <img src="../../../../assets/shared/fusionfix/fixes/CutSceneFOVAfter.webp" alt="Fusion Fix" caption="Fusion Fix">
</div>

### Stutters

Higher frame rates also caused massive camera and character stuttering in cutscenes.

Fusion Fix fixes this, but some users have reported that this fix can cause audio desync in cutscenes. If you do get cutscene desync, use the [Cutscene Audio Sync](../Fusion-Fix-Wiki/options.md/#cutscene-audio-sync){target="_blank"} option to try an alternative fix or even disable this fix entirely. These options can be toggled in real time by pressing the up arrow on your keyboard during cutscenes.

<video width="100%" controls muted>
  <source src="../../../../assets/shared/fusionfix/fixes/CutSceneStutterComparison.mp4" type="video/mp4">
</video>

## Console Gamma

Fusion Fix adds a [console gamma option](../Fusion-Fix-Wiki/options.md/#console-gamma-new){target="_blank"} which restores the gamma curve from the Xbox 360 and PS3 versions of the game. This makes the game look less washed out and generally more contrasty.

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/options/ConsoleGammaOff1.webp" alt="Console Gamma Off" caption="Console Gamma Off" pill="Off">
  <img src="../../../../assets/shared/fusionfix/options/ConsoleGammaXbox1.webp" alt="Console Gamma Xbox 360" caption="Console Gamma Xbox 360" pill="Xbox 360">
  <img src="../../../../assets/shared/fusionfix/options/ConsoleGammaPS31.webp" alt="Console Gamma PS3" caption="Console Gamma PS3" pill="PS3">
</div>

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/options/ConsoleGammaOff2.webp" alt="Console Gamma Off" caption="Console Gamma Off" pill="Off">
  <img src="../../../../assets/shared/fusionfix/options/ConsoleGammaXbox2.webp" alt="Console Gamma Xbox 360" caption="Console Gamma Xbox 360" pill="Xbox 360">
  <img src="../../../../assets/shared/fusionfix/options/ConsoleGammaPS32.webp" alt="Console Gamma PS3" caption="Console Gamma PS3" pill="PS3">
</div>

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/options/ConsoleGammaOff3.webp" alt="Console Gamma Off" caption="Console Gamma Off" pill="Off">
  <img src="../../../../assets/shared/fusionfix/options/ConsoleGammaXbox3.webp" alt="Console Gamma Xbox 360" caption="Console Gamma Xbox 360" pill="Xbox 360">
  <img src="../../../../assets/shared/fusionfix/options/ConsoleGammaPS33.webp" alt="Console Gamma PS3" caption="Console Gamma PS3" pill="PS3">
</div>

## Console Auto Exposure

Fusion Fix adds a [console auto exposure option](../Fusion-Fix-Wiki/options.md/#console-auto-exposure-new){target="_blank"} which restores the auto exposure effect seen on the console versions of GTA IV. This is intended to simulate the camera adjusting to different light levels, e.g. looking at the sun will cause the image to dim a bit, allowing more detail to be visible.

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/options/ConsoleAutoExposureOff1.webp" alt="Console Auto Exposure Off" caption="Console Auto Exposure Off">
  <img src="../../../../assets/shared/fusionfix/options/ConsoleAutoExposureOn1.webp" alt="Console Auto Exposure On" caption="Console Auto Exposure On">
</div>

## Definition
There's an option in GTA IV called "Definition" that does multiple things, mostly broken things.

When Definition is OFF, it enables effects, when Definition is ON, it disables effects. Here's exactly what it's doing when the option is OFF in the vanilla game...

**Definition Off**

- Enables a blur filter which hides a pixel pattern effect/dithering (but is also broken on PC and blurs the screen too much, warping the the image)
- Enables depth-of-field (doesn't scale to resolution, so weaker at higher resolutions)
- Enables motion blur (weaker at higher frame rates, which is arguably correct)

So, let's break down what these effects do, how they're broken on PC and what Fusion Fix does to fix them.

### Blur Filter

GTA IV on Xbox 360 and PC (with Definition off) uses a blur filter on the entire screen to hide a pixel pattern effect/dithering commonly seen on objects fading and the games low resolution shadows.

This pixel pattern is a side effect of screen-door transparency, the method Rockstar used to fade objects in GTA IV.

However on PC, this blur effect is broken, with the blur being much more intense than on Xbox 360.

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/definition/DefinitionOnVanillaBlur.webp" alt="Definition On Vanilla" caption="Definition On Vanilla">
  <img src="../../../../assets/shared/fusionfix/definition/DefinitionOffVanillaBlur.webp" alt="Definition Off Vanilla" caption="Definition Off Vanilla">
</div>

Below you can see how this blur filter is meant to look, using fixed shaders on PC. This is how the blur filter would look on Xbox 360.

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/definition/DefinitionOffVanillaBlur.webp" alt="Definition Off Vanilla" caption="Definition Off Vanilla PC">
  <img src="../../../../assets/shared/fusionfix/definition/DefinitionOffFixedAABlur.webp" alt="Definition Off Xbox 360" caption="Definition Off Xbox 360">
</div>

The reason for this is that GTA IV uses 2× MSAA on the Xbox 360. It generates an edge mask from the MSAA data and uses that mask in a post-processing pass to blur only object edges, rather than applying the blur across the entire image.

This is what that edge mask looks like. Notice how the white lines indicate object edges, these are the areas that are blurred to reduce aliasing.

![Xbox 360's Edge Mask](../../../assets/shared/fusionfix/definition/MSAA360Texture.webp)

The PC version doesn't have MSAA, but the Xbox 360 code that relies on it is still present and becomes active when Definition is set to Off.

Since the MSAA data isn't on the PC version, the edge mask that is supposed to contain object edge information ends up being effectively all white. As a result, the post-processing blur treats the entire image as an edge and blurs the whole screen instead of just object edges.

![PC's Edge Mask](../../../assets/shared/fusionfix/definition/MSAAPCTexture.webp)

So on Xbox 360 you have this effect stack...

**Slight screen blur to hide pixel pattern effects** -> **Working 2x MSAA which only blurs object edges.**

But on PC you have this effect stack...

**Slight screen blur to hide pixel pattern effects** -> **Broken 2x MSAA which blurs the entire screen on top of the slight screen blur.**

And this is what leads to the PC version appearing much blurrier than any other version.

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/definition/DefinitionOnVanillaBlur.webp" alt="Definition On Vanilla" caption="Definition On Vanilla">
  <img src="../../../../assets/shared/fusionfix/definition/DefinitionOffVanillaBlur.webp" alt="Definition Off Vanilla" caption="Definition Off Vanilla">
</div>

How does Fusion Fix fix this?

Fusion Fix completely reworks the "Definition" option when it comes to the blur filter.

**Fusion Fix Definition On (recommended)**

Definition On with Fusion Fix provides the cleanest and clearest image for GTA IV out of ALL platforms. This brings the game in-line with the likes of GTA V.

- Removes broken MSAA code.
- Improves the pixel pattern effect itself so it's easier to filter.
- Further improves the original slight screen blur by making it so it no longer applies to the whole screen, but instead only to objects/effects where pixel pattern effects may apply (similar to GTA V).
- Changes several objects that previously used screen-door transparency to use an alpha test for transparency instead (vegetation, fences, various other objects), further reducing the presence of the pixel pattern effect.

Notice how the pixel pattern effect is now blurred, but everything else in the image remains sharp as the blur now only affects objects where the pixel pattern effect is seen.

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/definition/DefinitionOnVanillaBlur.webp" alt="Definition On Vanilla" caption="Definition On Vanilla">
  <img src="../../../../assets/shared/fusionfix/definition/DefinitionOnFFBlur.webp" alt="Definition On Fusion Fix" caption="Definition On Fusion Fix">
</div>

Here's how it compares to the Xbox 360 blur.

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/definition/DefinitionOffFixedAABlur.webp" alt="Definition Off Xbox 360" caption="Definition Off Xbox 360">
  <img src="../../../../assets/shared/fusionfix/definition/DefinitionOnFFBlur.webp" alt="Definition On Fusion Fix" caption="Definition On Fusion Fix">
</div>

Below you can see some grass using an alpha test for transparency instead of screen door transparency, notice how the grass closer to the camera no longer has the pixel pattern effect.

The filter to hide the effect is disabled for these screenshots.

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/definition/TransparencyScreenDoorTransparency.webp" alt="Vanilla Screen Door Transparency" caption="Vanilla Screen Door Transparency">
  <img src="../../../../assets/shared/fusionfix/definition/TransparencyAlphaTest.webp" alt="Fusion Fix Alpha Test" caption="Fusion Fix Alpha Test">
</div>

**Fusion Fix Definition Off**

Definition Off with Fusion Fix is basically an Xbox 360 "nostalgia" option. Here's what it does.

- Removes broken MSAA code.
- Continues to use the slight screen blur from the Xbox 360 version of the game.
- Changes the high quality Fusion Fix shadow filter to the original low quality console/early PC (before patch 6) shadow filter. You can overwrite this shadow filter change by changing the [ForceShadowFilter](../Fusion-Fix-Wiki/config.md/#forceshadowfilter){:target="_blank"} setting in the Fusion Fix config file.

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/definition/DefinitionOnFFBlur.webp" alt="Definition On Fusion Fix" caption="Definition On Fusion Fix">
  <img src="../../../../assets/shared/fusionfix/definition/DefinitionOffFFBlur.webp" alt="Definition Off Fusion Fix" caption="Definition Off Fusion Fix">
</div>

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/definition/DefinitionOffFixedAABlur.webp" alt="Definition Off Xbox 360" caption="Definition Off Xbox 360">
  <img src="../../../../assets/shared/fusionfix/definition/DefinitionOffFFBlur.webp" alt="Definition Off Fusion Fix" caption="Definition Off Fusion Fix">
</div>

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/definition/DefinitionOnFFShadows.webp" alt="Definition On Fusion Fix" caption="Definition On Fusion Fix">
  <img src="../../../../assets/shared/fusionfix/definition/DefinitionOffFFShadows.webp" alt="Definition Off Fusion Fix" caption="Definition Off Fusion Fix">
</div>

### Depth-of-Field

Depth-of-field in the vanilla game is tied to the Definition option. It also doesn't scale with resolution, this results in the effect becoming weaker at resolutions higher than 720p.

Fusion Fix seperates depth-of-field from Definition, giving it its [own option](../Fusion-Fix-Wiki/options.md/#depth-of-field-new){:target="_blank"} and allowing users to select its strenght or disable it completely.

The effect has also been rewritten so it looks better with bokeh blur and it now scales correctly up to 4K.

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/options/DepthofFieldOff.webp" alt="Depth of Field Off" caption="Depth of Field Off">
  <img src="../../../../assets/shared/fusionfix/options/DepthofFieldOn.webp" alt="Depth of Field Very High" caption="Depth of Field Very High">
</div>

### Motion Blur

Motion blur in the vanilla game is tied to the Definition option. The effect gets weaker at higher frame rates, which leads to it being displayed inconsistently.

Fusion Fix seperates motion blur from Definition, giving it its [own option](../Fusion-Fix-Wiki/options.md/#motion-blur-new){:target="_blank"} and allowing users to select its strenght or disable it completely.

<video width="100%" autoplay loop>
  <source src="../../../../assets/shared/fusionfix/options/MotionBlur.mp4" type="video/mp4">
</video>

## Improved Loading Times

GTA IV on PC has an unskippable intro and it takes you to a main menu first instead of just loading your last save immediately like console. Loading times are also longer than necessary even with extremely fast SSDs.

Fusion Fix adds a skip intro and skip menu option in the GAME menu, as well as improving overall load times. This significantly reduces how long it takes to get in-game.

<video width="100%" controls muted>
  <source src="../../../../assets/shared/fusionfix/fixes/LoadTimes.mp4" type="video/mp4">
</video>

## Improved Sun Lighting

Fusion Fix adds a new [extended sunlight reach option](../Fusion-Fix-Wiki/options.md/#extended-sunlight-reach-new){target="_blank"} to improve the sun lighting.

In GTA IV, how much a surface is lit is determined by the angle between the direction it is facing and the direction of the sun. It can be up to 90 degrees, but vanilla GTA IV clamps it at 75 degrees. Enabling this option allows it to reach 90 degrees.

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/options/ExtendedSunLightReachOff1.webp" alt="Extended Sunlight Reach Off" caption="Extended Sunlight Reach Off">
  <img src="../../../../assets/shared/fusionfix/options/ExtendedSunLightReachOn1.webp" alt="Extended Sunlight Reach On" caption="Extended Sunlight Reach On">
</div>

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/options/ExtendedSunLightReachOff2.webp" alt="Extended Sunlight Reach Off" caption="Extended Sunlight Reach Off">
  <img src="../../../../assets/shared/fusionfix/options/ExtendedSunLightReachOn2.webp" alt="Extended Sunlight Reach On" caption="Extended Sunlight Reach On">
</div>

## Object Fading

The PC version of GTA IV has several issues with objects fading.

### Scren-Door-Transparency Fading

GTA IV uses screen-door transparency to fade many objects. This fade occurs as objects load in when the player gets near and it's also used to transition things like roads and buildings from their LOD models (the model you'd see far away) to their high quality models (the model you'd see up close).

Unfortunately Rockstar broke this completely after patch 1.0.6.0 on PC, so objects no longer fade but rather just pop into existence. Fusion Fix fixes this.

<video width="100%" autoplay loop>
  <source src="../../../../assets/shared/fusionfix/fixes/ScreenDoorFade.mp4" type="video/mp4">
</video>

### Terrain Fading

Certain terrain throughout GTA IV used a different method to fade between LOD models and high quality models. However, this fade was completely missing on ALL PC versions of GTA IV, resulting in a sudden pop between the LOD models and high quality models.

Fusion Fix restores terrain fading so it now works like it did on console.

<video width="100%" autoplay loop>
  <source src="../../../../assets/shared/fusionfix/fixes/TerrainFade.mp4" type="video/mp4">
</video>

## Rain

Rain on PC was made almost invisible, rain streaks became shorter at higher frame rates and rain droplets on screen became pitch black and lost their refraction effect from console.

Fusion Fix makes rain much more visible, fixes rain streaks so they stay the same size regardless of frame rate and it makes rain droplets coloured again, as well as restoring the refraction effect.

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/fixes/RainBefore1.webp" alt="Vanilla" caption="Vanilla">
  <img src="../../../../assets/shared/fusionfix/fixes/RainAfter1.webp" alt="Fusion Fix" caption="Fusion Fix">
</div>

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/fixes/RainBefore2.webp" alt="Vanilla" caption="Vanilla">
  <img src="../../../../assets/shared/fusionfix/fixes/RainAfter2.webp" alt="Fusion Fix" caption="Fusion Fix">
</div>

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/fixes/RainBefore3.webp" alt="Vanilla" caption="Vanilla">
  <img src="../../../../assets/shared/fusionfix/fixes/RainAfter3.webp" alt="Fusion Fix" caption="Fusion Fix">
</div>

## Reflections

Reflections were toned down significantly on PC, vehicle reflections became jagged due to a bug and mirror reflections became distorted at certain camera angles.

Fusion Fix restores the stronger console reflections, fixes the bug which made vehicle reflections jagged, and it fixes mirrors so they no longer become distorted at certain camera angles.

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/fixes/ReflectionsCarBefore.webp" alt="Vanilla" caption="Vanilla">
  <img src="../../../../assets/shared/fusionfix/fixes/ReflectionsCarAfter.webp" alt="Fusion Fix" caption="Fusion Fix">
</div>

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/fixes/ReflectionsMirrorBefore.webp" alt="Vanilla" caption="Vanilla">
  <img src="../../../../assets/shared/fusionfix/fixes/ReflectionsMirrorAfter.webp" alt="Fusion Fix" caption="Fusion Fix">
</div>

## Seasonal Events

Fusion Fix adds seasonal events to the game which includes snow at winter and a scarier atmosphere at Halloween. The snow effect is done almost entirely using shaders instead of replacing map textures, similar to GTA Online's yearly snow event.

The winter event starts on the 30th of December and ends on the 3rd of January.

The Halloweeen event starts on the 31st of October and ends on the 1st of November.

There's a [seasonal event option](../Fusion-Fix-Wiki/options.md/#seasonal-events-new){target="_blank"} to enable and disable these events. You can also manually activate them at any time with [cheats](../Fusion-Fix-Wiki/cheats.md/#winter-seasonal-event){target="_blank"}.

![Fusion Fix Chirtmas Event 1](../../../assets/shared/fusionfix/fixes/Christmas1.webp)

![Fusion Fix Chirtmas Event 2](../../../assets/shared/fusionfix/fixes/Christmas2.webp)

![Fusion Fix Halloween Event](../../../assets/shared/fusionfix/fixes/Halloween1.webp)

## Shadows

Shadows were by far one of the most broken aspects of the game.

After patch 1.0.6.0, they had horrible filtering, suffered from peter panning, had their draw distance reduced, performed significantly worse than the original shadows implementation and had many other issues.

Fusion Fix completely replaces the filtering and bias code, adds support for animated tree shadows, adds contact hardening shadows, fixes dozens bugs related to shadows in general and it also enables shadows on many objects that were missing them before.

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/fixes/ShadowsBefore1.webp" alt="Vanilla" caption="Before">
  <img src="../../../../assets/shared/fusionfix/fixes/ShadowsAfter1.webp" alt="Fusion Fix" caption="After">
</div>

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/fixes/ShadowsBefore2.webp" alt="Vanilla" caption="Before">
  <img src="../../../../assets/shared/fusionfix/fixes/ShadowsAfter2.webp" alt="Fusion Fix" caption="After">
</div>

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/options/ShadowFilterSharp.webp" alt="Shadow Filter Sharp" caption="Shadow Filter Sharp" pill="Sharp">
  <img src="../../../../assets/shared/fusionfix/options/ShadowFilterSoft.webp" alt="Shadow Filter Soft" caption="Shadow Filter Soft" pill="Soft">
  <img src="../../../../assets/shared/fusionfix/options/ShadowFilterCHSS.webp" alt="Shadow Filter CHSS" caption="Shadow Filter CHSS" pill="CHSS">
</div>

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/config/ExtraDynamicShadows0.webp" alt="Missing Shadows Before" caption="Missing Shadows Before">
  <img src="../../../../assets/shared/fusionfix/config/ExtraDynamicShadows1.webp" alt="Missing Shadows After" caption="Missing Shadows After">
</div>

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/config/ExtraDynamicShadows0-0.webp" alt="Missing Shadows Before" caption="Missing Shadows Before">
  <img src="../../../../assets/shared/fusionfix/config/ExtraDynamicShadows2-0.webp" alt="Missing Shadows After" caption="Missing Shadows After">
</div>

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/config/ExtraDynamicShadows0-1.webp" alt="Missing Shadows Before" caption="Missing Shadows Before">
  <img src="../../../../assets/shared/fusionfix/config/ExtraDynamicShadows2-1.webp" alt="Missing Shadows After" caption="Missing Shadows After">
</div>

## Soft Particles

GTA IV had soft particles on the console version, but they were missing on PC.

FusionFix adds soft particles back to the game on PC, making particle effects look much nicer. Soft particles basically make the edges of particle effects smoother so they don’t harshly clip into models.

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/fixes/SoftParticlesBefore1.webp" alt="Before" caption="Before">
  <img src="../../../../assets/shared/fusionfix/fixes/SoftParticlesAfter1.webp" alt="After" caption="After">
</div>

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/fixes/SoftParticlesBefore2.webp" alt="Before" caption="Before">
  <img src="../../../../assets/shared/fusionfix/fixes/SoftParticlesAfter2.webp" alt="After" caption="After">
</div>

## Sun Shafts

The original game's sun is pretty effectless when compared to every other GTA title.

Fusion Fix adds a new [sun shafts option](../Fusion-Fix-Wiki/options.md/#sun-shafts-new){target="_blank"} which adds god rays coming from the sun.

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/options/SunShaftsOff.webp" alt="Sun Shafts Off" caption="Sun Shafts Off">
  <img src="../../../../assets/shared/fusionfix/options/SunShaftsOn.webp" alt="Sun Shafts On" caption="Sun Shafts On">
</div>

## Tone Mapping

Fusion Fix adds a new [tone mapping option](../Fusion-Fix-Wiki/options.md/#tone-mapping-new){target="_blank"} which stops highlights from blowing out and clipping.

You can change the tone map operator by replacing `all_stips` in `GTAIV\update\pc\textures\stipple.wtd`. More operators can be found [here](https://github.com/Parallellines0451/GTAIV.EFLC.FusionShaders/tree/main/assets/luts/samples){target="_blank" rel="noopener"}.

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/options/ToneMappingOff1.webp" alt="Tone Mapping Off" caption="Tone Mapping Off">
  <img src="../../../../assets/shared/fusionfix/options/ToneMappingOn1.webp" alt="Tone Mapping On" caption="Tone Mapping On">
</div>

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/options/ToneMappingOff2.webp" alt="Tone Mapping Off" caption="Tone Mapping Off">
  <img src="../../../../assets/shared/fusionfix/options/ToneMappingOn2.webp" alt="Tone Mapping On" caption="Tone Mapping On">
</div>

## Volumetric Fog

The original game fog moves with the camera position and when the player is up high, you can see the water cut off at the horizon.

Fusion Fix adds a new [volumetric fog option](../Fusion-Fix-Wiki/options.md/#volumetric-fog-new){target="_blank"} which enables volumetric fog. This fog no longer moves with the camera position, it increases the farclip (draw distance) to 4500 meters, the fog itself blends in with the bottom sky colour seamlessly and the horizon cutting off is no longer visible.

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/options/VolFogOff1.webp" alt="Volumetric Fog Disabled" caption="Volumetric Fog Off">
  <img src="../../../../assets/shared/fusionfix/options/VolFogOn1.webp" alt="Volumetric Fog Enabled" caption="Volumetric Fog On">
</div>

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/options/VolFogOff2.webp" alt="Volumetric Fog Off" caption="Volumetric Fog Off">
  <img src="../../../../assets/shared/fusionfix/options/VolFogOn2.webp" alt="Volumetric Fog On" caption="Volumetric Fog On">
</div>

## Z-Fighting

Z-fighting was a major problem on the PC version of GTA IV, with constant flickering all around the map as soon as you gained any height.

The PlayStation 3 version partially dealt with it by using a very high near clip value, while the Xbox 360 solved it by using a reversed floating point depth buffer. Fusion Fix provides a solution that yields results similar to the better approach from the Xbox 360, and effectively eliminates all z-fighting.

<video width="100%" autoplay loop>
  <source src="../../../../assets/shared/fusionfix/fixes/Z-Fighting.mp4" type="video/mp4">
</video>