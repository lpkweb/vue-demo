<template>
  <div class="add-text-wrap">
    <h3 class="title">请输入日程内容：</h3>
    <input class="add-text" v-model="text" />
    <div class="btn">
      <span class="submit" @click="clickSubmit">提交</span>
      <span class="back" @click="clickBack">返回</span>
    </div>
  </div>
</template>

<script>

  import * as types from '../../store/constants';
  import { mapMutations, mapState } from 'vuex';
  import { Schedule } from '../../common/schedule';

  export default {
    name: 'addText',
    data() {
      return {
        text: '',
      }
    },
    computed: {
      ...mapState(['scheduleText'])
    },
    methods: {
      clickSubmit() {
        if (!this.text) {
          alert('请输入填写的内容');
          return;
        }
        const { textId } = this.$route.query;

        const scheduleTextArr = [...this.scheduleText];

        const textIds = scheduleTextArr.map(item => item.textId);

        if (textIds.includes(textId)) {
          scheduleTextArr.forEach(item => {
            if (item.textId === textId) {
              item.textArr = [...item.textArr, this.text];
            }
          });
        } else {
          scheduleTextArr.push(new Schedule({
            textId,
            textArr: [this.text]
          }));
        }

        this.saveText(scheduleTextArr);
        
      },
      saveText(newScheduleText) {
        this.saveScheduleText(newScheduleText);
        this.text = '';
        this.clickBack();
      },
      clickBack() {
        this.text = '';
        this.$router.back();
      },
      ...mapMutations({
        saveScheduleText: types.SAVE_SCHEDULE_TEXT
      })
    }
  }
</script>

<style scope lang="less" rel="stylesheet/less">

  .add-text-wrap {
    z-index: 10000;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    .title {
      margin-top: 10px;
      margin-left: 10px;
    }
    .add-text {
      width: 200px;
      height: 30px;
      margin-left: 10px;
      margin-top: 10px;
      outline: none;
      border: 1px solid #ccc;
    }
    .btn {
      text-align: center;
      margin-top: 20px;
      .submit, .back {
        width: 50px;
        height: 50px;
        background-color: rgba(81,156,249,1);
        text-align: center;
        line-height: 50px;
        color: #fff;
        display: inline-block;
      }
      .submit {
        margin-right: 10px;
      }
    }
  }

</style>