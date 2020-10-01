<template>
    <v-navigation-drawer
        class="main_sidebar"
        v-model="drawer"
        color="#023648"
        :mini-variant="isMiniVariant"
        permanent
        absolute
        dark
    >
        <v-list dense nav class="py-0">
            <template v-for="item in items">
                <v-list-group
                    v-if="item.children"
                    :key="item.name"
                    v-model="item.model"
                    @click="controller(item.component_name)"
                >
                    <template v-slot:activator>
                        <v-list-item-action>
                            <img :src="`/images/${item.icon}.png`" />
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ item.name }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </template>
                    <v-list-item
                        v-for="(child, i) in item.children"
                        :key="i"
                        link
                        @click="controller(child.component_name)"
                    >
                        <v-list-item-action v-if="child.icon">
                            <v-icon>{{ child.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content class="sub-title">
                            <v-list-item-title>
                                {{ child.name }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
                <v-list-item
                    v-else
                    :key="item.name"
                    link
                    @click="controller(item.component_name)"
                >
                    <v-list-item-action>
                      <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            {{ item.name }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </template>
            <v-list-item @click="toggleMenu(!isMiniVariant)">
                <v-list-item-action>
                    <v-icon v-if="isMiniVariant">mdi-arrow-right-thick</v-icon>
                    <v-icon v-else>mdi-arrow-left-thick</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>

export default {
  name: 'Sidebar',
  data: () => ({
    drawer: true,
    items: [{
      name: 'Products',
      component_name: 'products.index',
      icon: 'mdi-basket'
    }
    ],
    isMiniVariant: true
  }),

  methods: {
    toggleMenu (flag) {
      flag ? this.isMiniVariant = flag : this.isMiniVariant = !this.isMiniVariant
      this.items.map(item => {
        // eslint-disable-next-line
        item.model ? item.model = false : null
      })
      this.$emit('changeFlagOnClick', this.isMiniVariant)
    },
    controller (pageName) {
      if (!pageName) {
        this.isMiniVariant = false
        this.$emit('changeFlagOnClick', this.isMiniVariant)
        return
      }
      if (pageName !== this.$route.name) {
        this.$router.push({ name: pageName })
        this.currentPage = pageName
        this.toggleMenu(true)
      }
    },
    fetchMenuList (list) {
      list.map((item) => {
        // eslint-disable-next-line
        item.children ? this.$set(item, 'model', false) : null
        item.icon = `${item.key}_icon`
      })
      this.items = list
    }
  }
}
</script>

<style scoped lang="scss">
    .main_sidebar {
        width: 100%;
        max-width: 245px;
        position: fixed !important;
        padding-top: 65px;
    }
    .sub-title {
        padding-left: 70px !important;
    }
</style>
