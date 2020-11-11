<template>
    <div>

      <div class="wrapper-content wrapper-content--fixed">
        <section>
          <div class="container">
              <!-- table -->
              <table>
                <!-- head -->
                <thead>
                  <tr>
                    <th @click="sort('name')">Name 
                      <span v-if="currentSortDir === 'asc' && currentSort === 'name'">&uarr;</span>
                      <span v-if="currentSortDir === 'desc' && currentSort === 'name'">&darr;</span>
                    </th>
                    <th @click="sort('age')">Age
                      <span v-if="currentSortDir === 'asc' && currentSort === 'age'">&uarr;</span>
                      <span v-if="currentSortDir === 'desc' && currentSort === 'age'">&darr;</span>
                    </th>
                    <th @click="sort('gender')">Gender
                      <span v-if="currentSortDir === 'asc' && currentSort === 'gender'">&uarr;</span>
                      <span v-if="currentSortDir === 'desc' && currentSort === 'gender'">&darr;</span>
                    </th>
                  </tr>
                </thead>
                <!-- body -->
                <tbody>
                  <tr v-for="user in sortUsers" :key="user.id">
                    <td>
                      <img :src="user.img" :alt="user.name">
                      <span>{{ user.name }}</span></td>
                    <td>{{ user.age }}</td>
                    <td>{{ user.gender }}</td>
                  </tr>
                </tbody>
              </table>

          </div>
        </section>

        <section>
          <div class="container">
            <div class="button-list">
              <div @click="prevPage" class="btn btnPrimary"> &larr;</div>
              <span>{{ page.current }}</span>
              <div @click="nextPage" class="btn btnPrimary"> &rarr;</div>
            </div>
          </div>
        </section>
      </div>

    </div>
</template>

<script>
import axios from 'axios'

  export default {
    data() {
      return {
        users: [],
        currentSort: 'name',
        currentSortDir: 'asc',
        page: {
          current: 1,
          length: 3
        }
      }
    },
    created () {
      axios
        .get('https://my-json-server.typicode.com/DenisValentinovich/users-crm/users')
        .then(response => {
          this.users = response.data
        })
        .catch(error => {
          console.error(error);
        })
    },
    methods: {
      sort(e) {
        if(e === this.currentSort) {
          this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc'
        }
        console.log(`Sort by: ${this.currentSort}\nSort direction: ${this.currentSortDir}`);
        this.currentSort = e
      },
      prevPage () {
        if(this.page.current > 1) this.page.current-=1
        console.log(`Current page: ${this.page.current}`);
      },
      nextPage () {
        if(this.page.length * this.page.current < this.users.length) this.page.current+=1
        console.log(`Current page: ${this.page.current}`);
      }
    },
    computed: {
      sortUsers() {
        return this.users.sort((a, b) => {
          let mod = 1
          if(this.currentSortDir === 'desc') mod = -1
          if(a[this.currentSort] < b[this.currentSort]) return -1 * mod
          if(a[this.currentSort] > b[this.currentSort]) return 1 * mod
          return 0
        }).filter((row, index) => {
          let start = (this.page.current-1)*this.page.length
          let end = this.page.current * this.page.length
          if(index >= start && index < end) return true
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
img {
  width: 60px;
  height: auto;
  border-radius: 50%;
  margin-right: 20px;
}
.button-list {
  width: 100%;
  text-align: center;
  .btn {
    border-radius: 60px;
    margin: 0 20px;
  }
}
</style>