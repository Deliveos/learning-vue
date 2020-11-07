<template>
    <div class="wrapper">
      <div class="wrapper-content">

        <section>
          <div class="container">
            <!-- Error message -->
            <Message v-if="message" :message="message"/>

            <!-- Add note -->
            <NewNote :note='note' @addNote="addNote"/>

            <div class="note-header">
              <h1>{{title}}</h1>

              <Search :value="search" placeholder="Find note" @search="search = $event"/>

              <!-- icons controls -->
              <div class="icons">
                <svg :class="{ active: grid}" @click="grid = true"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                <svg :class="{ active: !grid }" @click="grid = false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
              </div>
            </div>
            
            <!-- All notes -->
            <Notes :notes="notesFilter" :grid="grid" @remove="removeNote"/>
          </div>
        </section>

      </div>
    </div>
</template>

<script>
import Message from '@/components/Message.vue'
import NewNote from '@/components/NewNote.vue'
import Notes from '@/components/Notes.vue'
import Search from '@/components/Search.vue'

export default {
  components: {
    Message,
    NewNote,
    Notes,
    Search
  },
  name: 'App',
  data () {
    return {
        title: "Notes App",
        message: null,
        search: "",
        grid: true,
        note: {
          title: "",
          description: "",
          priority: "low"
        },
        notes: [
        {
          title: "First note",
          description: "The first note",
          priority: "low",
          date: new Date(Date.now()).toLocaleString()
        },
        {
          title: "Second note",
          description: "The second note",
          priority: "middle",
          date: new Date(Date.now()).toLocaleString()
        },
        {
          title: "Third note",
          description: "The third note",
          priority: "high",
          date: new Date(Date.now()).toLocaleString()
        }
        ]
    }
  },
      methods: {
        addNote() {
          let {title, description, priority} = this.note;
          if (title === '' || description === '') {
            this.message = "Input fields can't be empty";
            return false;
          }
          this.notes.push({
            title,
            description,
            priority,
            date: new Date(Date.now()).toLocaleString()
          })
          console.log(priority)
          this.message = null;
          this.note.title = "";
          this.note.description = "";
          this.priority = ""
          },
          removeNote (index) {
            this.notes.splice(index, 1)
          }
        },
        computed: {
          notesFilter () {
            let array = this.notes,
                search = this.search
            if (!search) return array
            //to lower case
            search = search.trim().toLowerCase()
            //filter
            array = array.filter(function (item) {
              if (item.title.toLowerCase().indexOf(search) !== -1) {
                return item
              }
            })
            //Error
            return array
          }
        }
      }
</script>

<style lang="scss">

</style>
