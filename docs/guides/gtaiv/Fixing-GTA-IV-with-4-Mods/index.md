---
title: Fixing GTA IV with 4 Mods
description: A quick guide to fix GTA IV's PC port with just 4 Mods
subtitle:
status:
icon:
social:
  cards_layout_options:
    background_color: null
    background_image: docs/guides/gtaiv/Fixing-GTA-IV-with-4-Mods/assets/socialcard.webp
---

!!! warning
    This guide is only for The Complete Edition of Grand Theft Auto: IV. If you're playing on an older version, this guide won't work.

    This guide is only for Windows! If you're playing on Linux/Steam Deck, I have a seperate guide for that which you can [find here](#fusion-fix).

## Introduction

Grand Theft Auto IV’s PC port is already over 15 years old, and for most of that time, this version of the game has admittedly been a disaster.

Missing and broken graphical effects, poor performance and a confusing number of versions, all with their own individual pros and cons, often make playing GTA IV on PC seem like more hassle than it’s worth.

Thankfully, that is no longer the case. In the last few years, significant progress has been made by the modding community to fix GTA IV on PC. Modding has been made easier than ever, downgrading isn’t really necessary anymore and you can have the best version of GTA IV on any platform, by simply installing 4 excellent mods, and all it takes is a few minutes, so let’s get to it!

If you'd prefer a simpler installation instead of installing each mod indivdually, check out my [Drag n' Drop pack](../../../resources/gtaiv/TJGM's-Drag-n'-Drop-Archive/index.md){:target="_blank"} instead.

This guide is also available in video form if you find that easier to follow.

<iframe width="560" height="315" src="https://www.youtube.com/embed/UuXVYUGJ45Y?si=rjXTL8JH_IJwEvGh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Fusion Fix

So the first mod we'll install is Fusion Fix.

If you don't know, Fusion Fix is basically *the* mod which fixes most of GTA IV's issues. The game is broken in so many ways on PC compared to the console versions that it's actually hard to believe.

Fusion Fix adds many new faithful graphical effects, a TON of quality-of-life features which brings the game up to a more modern standard, fixes hundreds of bugs including high-FPS bugs, adds many new options and overall just massively improves the experience.

### Highlights

I won't cover all of things Fusion Fix does in this guide, but I will go over some of the highlights of the mod so you'll know what you're in for.

If you want to view everything Fusion Fix does, check out my [Fusion Fix Wiki](../../../resources/gtaiv/Fusion-Fix-Wiki/index.md){target="_blank"} which covers all of the mods features and changes.

If you just want to skip the highlights and go straight to installing the mod, you can [click here](#download-installation), otherwise keep scrolling.

#### Rain

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

#### Reflections

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

#### Shadows

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

#### Z-Fighting

Z-fighting was a major problem on the PC version of GTA IV, with constant flickering all around the map as soon as you gained any height.

The PlayStation 3 version partially dealt with it by using a very high near clip value, while the Xbox 360 solved it by using a reversed floating point depth buffer. Fusion Fix provides a solution that yields results similar to the better approach from the Xbox 360, and effectively eliminates all z-fighting.

<video width="100%" autoplay loop>
  <source src="../../../../assets/shared/fusionfix/fixes/Z-Fighting.mp4" type="video/mp4">
</video>

#### Depth-of-Field

Depth-of-field in the vanilla game is tied to the Definition option. It also doesn't scale with resolution, this results in the effect becoming weaker at resolutions higher than 720p.

Fusion Fix seperates depth-of-field from Definition, giving it its own option and allowing users to select its strenght or disable it completely.

The effect has also been rewritten so it looks better with bokeh blur and it now scales correctly up to 4K.

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/options/DepthofFieldOff.webp" alt="Depth of Field Off" caption="Depth of Field Off">
  <img src="../../../../assets/shared/fusionfix/options/DepthofFieldVeryHigh.webp" alt="Depth of Field Very High" caption="Depth of Field Very High">
</div>

#### Anti-Aliasing

The Xbox 360 version of GTA IV ran at 1280x720 with 2x MSAA. Meanwhile the PC version lacked any anti-aliasing whatsoever.

Fusion Fix adds an anti-aliasing option that allows users to select either FXAA or SMAA, two simple and performance friendly AA solutions which do an excellent job at smoothing out jagged edges, especially at high resolutions.

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/options/AAOff.webp" alt="Anti-Aliasing Off" caption="Anti-Aliasing Off" pill="Off">
  <img src="../../../../assets/shared/fusionfix/options/AAFXAA.webp" alt="Anti-Aliasing FXAA" caption="Anti-Aliasing FXAA" pill="FXAA">
  <img src="../../../../assets/shared/fusionfix/options/AASMAA.webp" alt="Anti-Aliasing SMAA" caption="Anti-Aliasing SMAA" pill="SMAA">
</div>

#### Volumetric Fog

The original game fog moves with the camera position and when the player is up high, you can see the water cut off at the horizon.

Fusion Fix adds a new volumetric fog option which enables volumetric fog. This fog no longer moves with the camera position, it increases the farclip (draw distance) to 4500 meters, the fog itself blends in with the bottom sky colour seamlessly and the horizon cutting off is no longer visible.

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/options/VolFogOff1.webp" alt="Volumetric Fog Disabled" caption="Volumetric Fog Off">
  <img src="../../../../assets/shared/fusionfix/options/VolFogOn1.webp" alt="Volumetric Fog Enabled" caption="Volumetric Fog On">
</div>

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/options/VolFogOff2.webp" alt="Volumetric Fog Off" caption="Volumetric Fog Off">
  <img src="../../../../assets/shared/fusionfix/options/VolFogOn2.webp" alt="Volumetric Fog On" caption="Volumetric Fog On">
</div>

#### Sun Shafts

The original game's sun is pretty effectless when compared to every other GTA title.

Fusion Fix adds a new sun shafts option which adds god rays coming from the sun.

<div class="compare-container">
  <img src="../../../../assets/shared/fusionfix/options/SunShaftsOff.webp" alt="Sun Shafts Off" caption="Sun Shafts Off">
  <img src="../../../../assets/shared/fusionfix/options/SunShaftsOn.webp" alt="Sun Shafts On" caption="Sun Shafts On">
</div>

#### Improved Loading Times

GTA IV on PC has an unskippable intro and it takes you to a main menu first instead of just loading your last save immediately like console. Loading times are also longer than necessary even with extremely fast SSDs.

Fusion Fix adds a skip intro and skip menu option in the GAME menu, as well as improving overall load times. This significantly reduces how long it takes to get in-game.

<video width="100%" controls muted>
  <source src="../../../../assets/shared/fusionfix/fixes/LoadTimes.mp4" type="video/mp4">
</video>

#### Seasonal Events

Fusion Fix adds seasonal events to the game which includes snow at winter and a scarier atmosphere at Halloween. The snow effect is done almost entirely using shaders instead of replacing map textures, similar to GTA Online's yearly snow event.

The winter event starts on the 30th of December and ends on the 3rd of January.

The Halloweeen event starts on the 31st of October and ends on the 1st of November.

There's a seasonal event option to enable and disable these events. You can also manually activate them at any time with cheats.

![Fusion Fix Chirtmas Event 1](../../../assets/shared/fusionfix/fixes/Christmas1.webp)

![Fusion Fix Chirtmas Event 2](../../../assets/shared/fusionfix/fixes/Christmas2.webp)

![Fusion Fix Halloween Event](../../../assets/shared/fusionfix/fixes/Halloween1.webp)

#### Fusion Overloader

Fusion Fix adds a type of Modloader called Fusion OverLoader, you don’t really need to know too much about it for this guide. But if you do plan on installing more mods in the future, I’d recommend checking out my [Fusion Overloader tutorial](../Fusion-Overloader-Tutorial/index.md){target="_blank"} once you're done with this guide.

We'll be installing all our mods through Fusion Overloader in this guide, so you'll see how easy it is soon.

#### Even more...

If you want to know what else Fusion Fix fixes or adds to the game, you can either check out my [Fusion Fix Wiki](../../../resources/gtaiv/Fusion-Fix-Wiki/index.md){target="_blank"} or you can watch my video covering nearly the entirety of the mod.

<iframe width="560" height="315" src="https://www.youtube.com/embed/XTuOortPoY4?si=_mi7HnZJ6rsnRFnS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Download & Installation

Fusion Fix has two very simple and easy installation methods. You can install the mod manually OR you can use the Fusion Fix installer. I'd recommend manual, but pick whichever you prefer. Once you follow the steps, Fusion Fix will be installed.

#### Manual Installation

1. Download the latest Fusion Fix .zip from the [official GitHub release page](https://github.com/ThirteenAG/GTAIV.EFLC.FusionFix/releases){target="_blank" rel="noopener"} (found under `Assets`).
2. Open the archive you just downloaded and then copy and paste everything from the archive into your game folder where `GTAIV.exe` is located.

    !!! tip
        If you're not sure how to find your game folder...

          - **Steam**: You can find it by right clicking on `Grand Theft Auto IV: The Complete Edition` in your Steam library, going to `Manage` and then clicking `Browse Local Files`. The `GTAIV` folder is where `GTAIV.exe` is located.

          - **Rockstar Games Launcher**: You can find it by clicking on `Settings` in the Rockstar Games Launcher, click `Grand Theft Auto IV: The Complete Edition` in your installed games list, find `View installation folder` and then click `Open` next to it. The `GTAIV` folder is where `GTAIV.exe` is located.

#### Installer Installation

1. Download the latest Fusion Fix installer from the [official GitHub release page](https://github.com/ThirteenAG/GTAIV.EFLC.FusionFix/releases){target="_blank" rel="noopener"} (found under `Assets`. Web installer will download the mod files when using the installer, offline installer downloads the mod files alongside the installer).
2. Launch the installer, it should automatically detect the location of your Grand Theft Auto: IV folder and then click install.

## Console Visuals

Our next mod to install is Console Visuals.

The PC version of GTA IV changed quite a few of the games assets, so they're different than console. Things like certain clothing options, animations and other things were different between the two versions.

The mod Console Visuals aims to restore all of that content from console. Most of the changes are completely subjective, they’re just small things such as...

The way Niko might hold a specific weapon...

<div class="compare-container">
  <img src="../../../assets/shared/consolevisuals/animationsslidecomparisons/Uzi (PC).webp" alt="PC Uzi Animation" caption="PC Uzi Animation">
  <img src="../../../assets/shared/consolevisuals/animationsslidecomparisons/Uzi (Console).webp" alt="Console Uzi Animation" caption="Console Uzi Animation">
</div>

Or the size of the games help boxes...

<div class="compare-container">
  <img src="../../../assets/shared/consolevisuals/consolehudslidecomparisons/ivPC.webp" alt="PC Help Box" caption="PC Help Box">
  <img src="../../../assets/shared/consolevisuals/consolehudslidecomparisons/ivConsole.webp" alt="Console Help Box" caption="Console Help Box">
</div>

But Console Visuals does come with one change which is definitely an improvement over the PC version, and that’s the vegetation.

On PC, a lot of the vegetation was changed, this includes a new grass model, which is actually worse because it's offset too low which causes the bottom half of the grass to be pushed under the ground.

Just look at this comparison here, the grass on PC is mostly under the ground compared to the console grass.

<div class="compare-container">
  <img src="../../../assets/shared/consolevisuals/grassslidecomparisons/1 (PC).webp" alt="PC Grass" caption="PC Grass">
  <img src="../../../assets/shared/consolevisuals/grassslidecomparisons/1 (Console).webp" alt="Console Grass" caption="Console Grass">
</div>

As well as restoring the console grass, it also restores the console trees. However, the trees in Console Visuals have higher resolution textures compared to console, because as it turns out, Rockstar reused these tree textures in Max Payne 3 at a higher resolution.

The team behind Console Visuals managed to extract those textures and got them into GTA IV with some corrections made to them.

<div class="compare-container">
  <img src="../../../assets/shared/consolevisuals/vegetationpc+slidecomparisons/1 (PC).webp" alt="PC Trees" caption="PC Trees">
  <img src="../../../assets/shared/consolevisuals/vegetationpc+slidecomparisons/1 (Console).webp" alt="Console Trees" caption="Console Trees">
</div>

<div class="compare-container">
  <img src="../../../assets/shared/consolevisuals/vegetationpc+slidecomparisons/5 (PC).webp" alt="PC Trees" caption="PC Trees">
  <img src="../../../assets/shared/consolevisuals/vegetationpc+slidecomparisons/5 (Console).webp" alt="Console Trees" caption="Console Trees">
</div>

<div class="compare-container">
  <img src="../../../assets/shared/consolevisuals/vegetationpc+slidecomparisons/3 (PC).webp" alt="PC Trees" caption="PC Trees">
  <img src="../../../assets/shared/consolevisuals/vegetationpc+slidecomparisons/3 (Console).webp" alt="Console Trees" caption="Console Trees">
</div>

### Download & Installation

For this guide we'll just install the vegetation improvements from Console Visuals, as it's the one thing that I'd argue isn't really subjective compared to the other changes between console and PC.

If you want to install the other console assets from Console Visuals, have a look at my [Console Visuals Wiki](../../../resources/gtaiv/Console-Visuals-Wiki/index.md){target="_blank"}, this will show you all of the different Console Visual assets and how to install them.

But like I said, console vegetation is arguably better in every aspect, so we'll just install that for this guide.

1. Download the latest `Console.Vegetation.zip` from the [official Console Visuals GitHub release page](https://github.com/Tomasak/Console-Visuals/releases){target="_blank" rel="noopener"} (found under `Assets`).
2. Open the vegetation archive you just downloaded and then copy and paste the `update` folder from the archive, into your `GTAIV` folder, where `GTAIV.exe` is located.

!!! tip
    If you're not sure how to find your game folder...

      - **Steam**: You can find it by right clicking on `Grand Theft Auto IV: The Complete Edition` in your Steam library, going to `Manage` and then clicking `Browse Local Files`. The `GTAIV` folder is where `GTAIV.exe` is located.

      - **Rockstar Games Launcher**: You can find it by clicking on `Settings` in the Rockstar Games Launcher, click `Grand Theft Auto IV: The Complete Edition` in your installed games list, find `View installation folder` and then click `Open` next to it. The `GTAIV` folder is where `GTAIV.exe` is located.

And that’s it, the vegetation from Console Visuals is installed!

## Various Fixes

The penultimate mod we’re going to install is Various Fixes. This mod fixes a huge number of texture issues, prop placement issues and other problems and inconsistencies throughout GTA IV's assets.

It’s hard to even cover everything this mod fixes as the [list of fixes](https://gtaforums.com/topic/975211-various-fixes/){target="_blank" rel="noopener"} is VERY big. However, I'll give you three quick examples so you can get an idea of what this mod is about.

<div class="compare-container">
  <img src="../../../assets/shared/variousfixes/vanilla1.webp" alt="Vanilla." caption="Vanilla">
  <img src="../../../assets/shared/variousfixes/vf1.webp" alt="Various Fixes" caption="Various Fixes">
</div>

<div class="compare-container">
  <img src="../../../assets/shared/variousfixes/vanilla2.webp" alt="Vanilla." caption="Vanilla">
  <img src="../../../assets/shared/variousfixes/vf2.webp" alt="Various Fixes" caption="Various Fixes">
</div>

<div class="compare-container">
  <img src="../../../assets/shared/variousfixes/vanilla3.webp" alt="Vanilla." caption="Vanilla">
  <img src="../../../assets/shared/variousfixes/vf3.webp" alt="Various Fixes" caption="Various Fixes">
</div>

### Download and Installation

Okay let's download and install Various Fixes.

1. Download the latest `Installation.through.Fusion.Overloader.zip` from the [official Various Fixes GitHub release page](https://github.com/valentyn-l/GTAIV.EFLC.Various.Fixes/releases){target="_blank" rel="noopener"} (found under `Assets`).
2. Open the archive you just downloaded, open the `Installation through Fusion Overloader` folder in the archive and then copy and paste the `update` folder from that folder, into your `GTAIV` folder, where `GTAIV.exe` is located.

!!! tip
    If you're not sure how to find your game folder...

      - **Steam**: You can find it by right clicking on `Grand Theft Auto IV: The Complete Edition` in your Steam library, going to `Manage` and then clicking `Browse Local Files`. The `GTAIV` folder is where `GTAIV.exe` is located.

      - **Rockstar Games Launcher**: You can find it by clicking on `Settings` in the Rockstar Games Launcher, click `Grand Theft Auto IV: The Complete Edition` in your installed games list, find `View installation folder` and then click `Open` next to it. The `GTAIV` folder is where `GTAIV.exe` is located.


## Radio Restoration

Like all of the other old GTA titles, GTA IV has had music removed due to licenses expiring.

The radio station Vladivostok, lost all of its original songs except one when licensing expired in 2018, so Rockstar added a whole new soundtrack to the station instead, other radio stations also lost some songs too.

The best mod to restore cut music from the Complete Edition of GTA IV, is the Radio Restoration mod, so we're going to use that in this guide.

### Download and Installation

1. Download the latest `Radio.Restoration.Mod.zip` from the [official Radio Restoration GitHub release page](https://github.com/Tomasak/GTA-Downgraders/releases){target="_blank" rel="noopener"} (found under `Assets`).
2. Open the archive you just downloaded and then copy `IVCERadioRestoration.exe` anywhere you'd like.
3. Run the tool and follow the steps given. There's some additional customisation that is explained in the installer.

You've now restored the music cut from GTA IV!

## Outro and Additional Links

If you'd like to learn more about Fusion Overloader, the modloader that comes with Fusion Fix, make sure to check out my [Fusion Overloader Tutorial](../Fusion-Overloader-Tutorial/index.md){target="_blank"}.