<template>
    <div class="wrapper">
      <div class="wrapper-content">

        <section>
          <div class="container">
            <button class="btn btnPrimary" @click="modalFirst = true">Show first modal</button>
            <!-- first Modal -->
            <Modal v-show="modalFirst" title="First modal" @close="modalFirst = false">
              <div slot="body">
                <p>Hello</p>
              </div>
            </Modal>


            <button class="btn btnPrimary" @click="modalSecond.show = true">Show modal with form</button>
            <!-- second Modal -->
            <Modal v-show="modalSecond.show" title="Modal with form" @close="modalSecond.show = false">
              <div slot="body">
                <form @submit.prevent="submitSecondForm">
                  <input required type="text" name="name" v-model="modalSecond.name" placeholder="Name">
                  <input required type="email" name="email" v-model="modalSecond.email" placeholder="Email">
                  <button class="btn btnPrimary">DONE</button>
                </form>
              </div>
            </Modal>


            <button class="btn btnPrimary" @click="modalValidate = true">Show modal with validate form</button>
            <!-- modal with validate -->
            <ModalValidate v-if="modalValidate" @close="modalValidate = false"/>
          </div>
        </section>

      </div>
    </div>
</template>

<script>
import Modal from '@/components/UI/ModalWindow.vue'
import ModalValidate from '@/components/ModalValidate.vue'

export default {
  name: 'App',
  components: {
    Modal,
    ModalValidate
  },
  data() {
    return {
      modalFirst: false,
      modalSecond: {
        show: false,
        name: '',
        email: ''
      },
      modalValidate: false
    }
  },
  methods: {
    submitSecondForm () {
      console.log({
        name: this.modalSecond.name,
        email: this.modalSecond.email
      })
      this.modalSecond.name = ""
      this.modalSecond.email = ""
      this.modalSecond.show = false
    }
  }
}
</script>

<style lang="scss">

</style>
