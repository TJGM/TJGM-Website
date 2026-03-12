---
title: No Extra Air Resistance
description: Removes the extra air resistance flag which reduces vehicle speed in certain areas around the map.
subtitle:
status:
icon:
---

## What is it?

In order to optimize the game, Rockstar slows the player down in specific areas of the map using zones which have "extra air resistance". This is done through "cull.ipl", which contains all of the cull zones on the map, one of the possible flags for a cull zone is "ExtraAirResistance".

For example, the Cheetah has a max speed of 197KMPH, as seen in the screenshot below.

![San Andreas Cheetah with a max speed of 197KPH](assets/image1.webp)

But when driving in a cull zone with extra air resistance, the Cheetah can only reach a max speed of 161KMPH.

![San Andreas Cheetah limited to 161KMPH in cull zone](assets/image2.webp)

With this mod, the extra air resistance flag is disabled, as this optimisation is no longer necessary on modern hardware. This should be compatible with basically every mod.

![San Andreas Cheetah reaching max speed in cull zone with No Extra Air Resistance Mod](assets/image3.webp)

And if you're wondering, I've made a map with all of the extra air resistance locations in San Andreas, if you use this mod however, this will obviously be obsolete.

![San Andreas map with all cull zones labelled that add extra air resistance](assets/image4.webp)

I've also made a YouTube video covering this topic if you're interested in learning more.

<iframe width="560" height="315" src="https://www.youtube.com/embed/vp9WlW9reG4?si=gSuHT4TMXo8s7CM6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Changelog

??? note "Click to view the full changelog"
    !!! info
        Exact files edited for each change will be in brackets () at the end of the change when needed/possible.

    **v1.0.0**

    - Initial release.
    - Removed all cullzones that contain the "ExtraAirResistance" flag. (cull.ipl)

    **v2.0.0**

    - The mod has been updated to be an ASI plugin made by iFarbod, which disables the extra air resistance flag entirely without having to edit "cull.ipl".
      
        My solution was to just remove the flag from the zones in "cull.ipl", but this could potentially create incompatibility with other mods if they also altered "cull.ipl" (rare, but still possible), so his solution is much cleaner and better for compatibility.

## Download and Installation

- Step 1: Download the latest version of the mod from your preferred source.

    - GTA SA: [GitHub](https://github.com/TJGM/SA.NoExtraAirResistance/releases){:target="_blank"} or [Mega](https://mega.nz/folder/smwnQLxD#JbdgMBfpHDGVReUfU2TZ3g){:target="_blank"}.

- Step 2: Open the mod archive you downloaded and move the **"No Extra Air Resistance vX.Y.Z"** folder from the archive into your **"modloader"** folder.

<span style="font-size: 0.85em;">
[Click here for older mod versions (if available)](https://github.com/TJGM/SA.NoExtraAirResistance/releases){:target="_blank"}
</span>

## Credits

- iFarbod
- TJGM

All of my mods are free to use, share and reuse in other mods. All I ask is that you give credit, thanks!

---

<div class="md-typeset" style="text-align:center; padding:1.5rem; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;">
  <h3>Enjoy my work?</h3>
  <p>Gain benefits such as shout-outs at the end of videos, early access to TJGM videos, early access to TJGM mods, VIP Discord access and much more by supporting me and my work on Patreon, it's very much appreciated! ❤️</p>
  <a
    class="md-button"
    href="https://patreon.com/tjgm"
    target="_blank"
    rel="noopener"
    style="background:#F96854; color:white; border:none; border-radius:8px; padding:.6em 1.2em; margin-top:0.5rem;"
  >
    ⭐ Support on Patreon
  </a>
</div>