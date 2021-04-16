<template>
  <div>
    <div class="fixed inset-0 flex z-40">
      <!-- Sidebar -->
      <div class="absolute flex top-0 h-screen z-20 left-0 flex-row-reverse">
        <!--Drawer -->
        <button
          @click.prevent="toggle()"
          class="w-8 h-5 px-1 rounded text-white bg-gray-400 text-center focus:outline-none hover:bg-gray-500 transition-color duration-300 absolute top-3"
          :class="[open ? '-right-3' : '-right-5 h-8 py-1']"
        >
          <span
            class="block transform origin-center font-bold transition-all"
            :class="!open && 'rotate-180'"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </button>

        <!-- Sidebar Content -->
        <div
          class="transition-all duration-700 bg-gray-50 overflow-hidden flex shadow-xl"
          :class="[open ? 'max-w-lg' : 'max-w-0']"
        >
          <div class="w-72 text-center p-2">
            <div>
              <select
                name=""
                id=""
                class="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="">Shohohu Basketball Club</option>
                <option value="">Test 2</option>
                <option value="">Test 3</option>
                <option value="">Test 4</option>
              </select>
            </div>
            <div class="mt-10 mb-4">
              <ul>
                <!-- use svg paths from heroicons.com -->
                <NuxtLink
                  tag="li"
                  v-for="(module, i) in modules"
                  :key="'module-' + i"
                  class="flex mb-2 px-2 py-3 flex flex-row border-gray-300 hover:bg-gray-400 font-medium hover:text-white rounded rounded-lg cursor-pointer"
                  :class="
                    $store.state.activeModule == module.name
                      ? 'text-white border-gray-300 bg-gray-700 font-extrabold'
                      : 'text-gray-700'
                  "
                  :to="module.to"
                >
                  <svg
                    v-if="module.svgPath"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      :d="module.svgPath"
                    />
                  </svg>
                  <span class="ml-2">{{ module.title }}</span>
                </NuxtLink>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="transition-all delay-300 duration-800 max-w-full h-16 flex items-center"
      :class="[open ? 'pl-80' : 'pl-10']"
    >
      <span class="font-bold text-2xl">{{ $store.state.pageTitle }}</span>
    </div>
    <!-- Page Content -->
    <div
      class="transition-all delay-300 duration-800 max-w-full max-h-full p-10"
      :class="[open ? 'pl-80' : 'pl-10']"
    >
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: true,
      modules: [
        {
          icon: 'mdi-home',
          title: 'Home',
          name: 'Dashboard',
          to: '/home',
          svgPath:
            'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
          active: true,
          subMenu: null,
        },
        {
          icon: 'mdi-cog',
          title: 'Page Theme',
          name: 'Customization',
          to: '/theme',
          svgPath:
            'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
          subMenu: null,
          // hidden: this.$store.state.permission.Customization.read != 1,
        },
        {
          icon: 'mdi-shield-account',
          title: ' Role Permissions',
          name: 'Permission',
          to: '/permission',
          svgPath:
            'M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z',
          subMenu: null,
          // hidden: this.$store.state.permission.Permission.read != 1,
        },
        // {
        //   icon: 'mdi-home-group',
        //   title: 'Resources',
        //   to: '/resources',
        //   subMenu: null,
        // },
        {
          icon: 'mdi-account-multiple',
          title: 'Members',
          name: 'Membership',
          to: '/member',
          svgPath:
            'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
          subMenu: [
            {
              title: 'Members List',
              to: '/member',
              subMenu: null,
            },
            {
              title: 'Invite List',
              to: '/invite',
              subMenu: null,
            },
          ],
          // hidden: this.$store.state.permission.Membership.read != 1,
        },
        {
          icon: 'mdi-chat-alert',
          title: 'Notice Board',
          name: 'Noticeboard',
          to: '/notice',
          svgPath:
            'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z',
          subMenu: null,
          // hidden: this.$store.state.permission.Noticeboard.read != 1,
        },
        {
          icon: 'mdi-book-open-page-variant',
          title: 'Gallery',
          name: 'Gallery',
          to: '/gallery',
          svgPath:
            'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
          subMenu: null,
          // hidden: this.$store.state.permission.Gallery.read != 1,
        },
        {
          icon: 'mdi-file-document',
          title: 'Documents',
          name: 'Document',
          to: '/document',
          svgPath:
            'M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z',
          subMenu: null,
          // hidden: this.$store.state.permission.Document.read != 1,
        },
      ],
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    },
  },
}
</script>

<style>
html {
  background: #efefef;
}
</style>
