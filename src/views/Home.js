import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      newCoffee: '',
      msg: ''
    };
  },
  computed: {
    ...mapGetters([
      'countCoffees'
    ]),
    coffees() {
      return this.$store.state.coffees
    }
  },
  methods: {
    ...mapMutations([
      'ADD_COFFEE'
    ]),
    ...mapActions([
      'deleteAll'
    ]),
    addCoffee: function () {
      this.ADD_COFFEE(this.newCoffee)
      this.newCoffee = ''
    },
    deleteCoffee() {
      this.$store.dispatch('delCoffee')
    },
    deleteAllCoffees() {
      this.deleteAll().then(() => {
        this.msg = 'All coffee recipes have been removed'
      });
    }
    // deleteCoffee(id){
    //   this.coffees = this.coffees.filter(coffee => {
    //     return coffee.id != id
    //   })
    //
    // }
  }
}