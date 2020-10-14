<template>
  <header>
    <nav id="header-desktop" class="maincolumn">
      <NuxtLink to="/" id="header-desktop-left">
        <img
          id="header-desktop-left-logo"
          alt="Logo Sogilis"
          src="/img/logo_sogilis.svg"
        />
      </NuxtLink>
      <div id="header-desktop-right">
        <div id="header-desktop-right-dropdown">
          <div
            id="header-desktop-right-dropdown-title"
            class="bar-deco bar-deco-hover header-desktop-right-category header-desktop-right-text"
          >
            Services
          </div>
          <div id="header-desktop-right-dropdown-content">
            <a
              class="bar-deco bar-deco-hover header-desktop-right-dropdown-content-link header-desktop-right-text"
              href="https://sogilis.fr/services-applications-cloud-native.html"
            >
              Cloud Native App
            </a>
            <a
              class="bar-deco bar-deco-hover header-desktop-right-dropdown-content-link header-desktop-right-text"
              href="https://sogilis.fr/services-embarques-et-iot.html"
            >
              Embarqué
            </a>
            <a
              class="bar-deco bar-deco-hover header-desktop-right-dropdown-content-link header-desktop-right-text"
              href="https://sogilis.fr/services-logiciels-critiques.html"
            >
              Critical software
            </a>
          </div>
        </div>
        <a
          class="bar-deco bar-deco-hover header-desktop-right-category header-desktop-right-text"
          href="https://sogilis.fr/vision.html"
        >
          {{ $t('company') }}
        </a>
        <a
          class="bar-deco bar-deco-hover header-desktop-right-category header-desktop-right-text"
          href="https://sogilis.fr/contact.html"
        >
          Contact
        </a>
        <NuxtLink
            :to="switchLocalePath( 'en')"
            class="bar-deco bar-deco-hover header-desktop-right-category header-desktop-right-text"
        >
          En
        </NuxtLink>
        <NuxtLink
            :to="switchLocalePath('fr')"
            class="bar-deco bar-deco-hover header-desktop-right-category header-desktop-right-text"
        >
          Fr
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>
