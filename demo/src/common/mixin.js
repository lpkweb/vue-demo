export const getCurrentDate = {
  methods: {
    change(date) {
      this.currentMonth =  `${date.getFullYear()}年${date.getMonth() + 1}月`;
    },
  },
};