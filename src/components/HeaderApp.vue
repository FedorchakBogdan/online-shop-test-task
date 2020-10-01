<template>
    <v-row>
        <v-col cols="12">
            <div class="breadcrumbs mt-6">
                <span>
                    <router-link
                        class="home-bread home_link"
                        :to="{ name: 'login' }"
                    >
                        Home
                    </router-link>
                </span>
            </div>
        </v-col>
        <v-col cols="12"  :key="title">
            <div class="head-title">
                <h1 v-if="title">{{ title }}</h1>
            </div>
        </v-col>
    </v-row>
</template>

<script>
export default {
  name: 'HeaderApp',
  computed: {
    title () {
      return this.$route.meta.title
    }
  },
  created () {
    if (this.$route.name === 'insuranceClaims.addComment' ||
                this.$route.name === 'insuranceClaims.edit') {
      this.$route.meta.title = this.$route.params.id
    }
  }
}
</script>

<style lang="scss">
    .header-content {
        display: flex;
        flex-wrap: wrap;
    }

    .head-title {
        h1 {
            font-family: Arial;
            font-style: normal;
            font-weight: normal;
            font-size: 28px;
            line-height: 32px;
            text-align: center;
            color: #023648;
            margin-bottom: 16px;
        }
        border-bottom: 1px solid #074d65;
    }

    .breadcrumbs {
        align-items: center;
        display: flex;
        max-width: max-content;
        border-radius: 5px;
        border: 1px solid #1a93bd;
        padding: 4px 12px;
        .home-bread {
            font-family: Arial;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 14px;
            color: #000000;
            text-decoration: unset;
            .v-icon {
                color: #1a93bd;
                font-size: 20px;
            }
            &::after {
                display: inline-block;
                padding-right: 0.2rem;
                padding-left: 0.3rem;
                font-size: 12px;
                content: '';
                margin-left: 5px;
                border: 4px solid transparent;
                border-left: 4px solid #1a93bd;
            }
        }

        .router-link-exact-active {
            font-family: Arial;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 14px;
            text-transform: capitalize;
            color: #1a93bd;
            text-decoration: unset;
        }

        .breadcrumb {
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            list-style: none;
            padding-left: 0;

            .breadcrumb-item {
                a {
                    font-family: Arial;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 12px;
                    line-height: 14px;
                    color: #000000;
                    text-decoration: none;
                }
            }
        }

        .breadcrumb-item + .breadcrumb-item::before {
            display: inline-block;
            padding-right: 0;
            padding-left: 0.3rem;
            font-size: 12px;
            content: '';
            margin-left: 8px;
            border: 4px solid transparent;
            border-left: 4px solid #1a93bd;
        }
    }
</style>
