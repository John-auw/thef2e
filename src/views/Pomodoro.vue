<template>
  <div class="pomodoro">
    <div class="pomodoro__container">
      <div class="pomodoro__side">
        <div class="pomodoro__side-wrapper">
          <div class="pomodoro__side-avatar"></div>
          <div class="pomodoro__side-detail">
            <h1>Sample User</h1>
            <span>example@example.com</span>
          </div>

        </div>
        <div class="pomodoro__side-options">
          <div class="pomodoro__side-option">
            <v-icon x-large>
              fas fa-clock
            </v-icon>
            <span>
              Timer
            </span>
          </div>
          <div class="pomodoro__side-option">
            <v-icon x-large color="#DDDDDD">
              fas fa-chart-line
            </v-icon>
              <span>
                DashBoard
              </span>
          </div>
          <div class="pomodoro__side-option">
            <v-icon x-large color="#DDDDDD">
              fas fa-list
            </v-icon>
            <span>
              TO-DO List
            </span>
          </div>
          <div class="pomodoro__side-option">
            <v-icon x-large color="#DDDDDD">
              fas fa-cogs
            </v-icon>
            <span>
              Settings
            </span>
          </div>
        </div>
        <div class="pomodoro__side-logout">
          <div class="pomodoro__side-option">
            <v-icon class="pomodoro__side-icon" x-large>
              fas fa-sign-out-alt
            </v-icon>
            <span>
              Sign Out
            </span>
          </div>
        </div>
      </div>
      <div class="pomodoro__main">
        <div class="pomodoro__main-left">
          <div class="pomodoro__main-timer">
            <div class="pomodoro__main-inner-circle">
              <div class="pomodoro__main-time-display">
                25:00
              </div>
            </div>
          </div>
          <div class="pomodoro__main-task">
            Current Task
          </div>
          <div class="pomodoro__main-controls">
            <div class="pomodoro__main-icon">
              <v-icon x-large>
                fas fa-fast-forward
              </v-icon>
            </div>
            <div class="pomodoro__main-icon">
              <v-icon x-large>
                fas fa-play
              </v-icon>
            </div>
            <div class="pomodoro__main-icon">
              <v-icon x-large>
                fas fa-bell
              </v-icon>
            </div>
          </div>
        </div>
        <div class="pomodoro__main-right">
          <div class="pomodoro__main-input-wrapper">
            <input class="pomodoro__main-input" type="text" name="" id=""/>
            <button class="pomodoro__main-add">+</button>
          </div>
          <div class="pomodoro__main-task-wrapper">
            <div class="task">
              <div class="task__list" v-for="(task, index) in tasks" :key="index">
                <label class="task__list-option" :for="`'task_'${ index }`">
                  {{task.name}}
                  <input type="checkbox" :name="`'task_'${ index }`" :id="`'task_'${ index }`" checked>
                  <span class="task__list-check"></span>
                  <span class="list-checked"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      tasks: [
        { name: 'Current Project' },
        { name: 'Study for exam' },
        { name: 'Workout' },
        { name: 'Prepare Presentation' },
        { name: 'Brainstorming' },
        { name: '第一關' },
        { name: 'First Task' }
      ]
    }
  }
})
</script>

<style lang="sass">
  .pomodoro
    width: 100%
    height: 100%
    &__container
      display: flex
      height: 100%
    &__side
      display: flex
      flex-direction: column
      background-color: #2B2B2B
      justify-content: space-between
      flex: 1
      min-width: 384px
      padding-top: 52px
      padding-left: 28px
    &__side-wrapper
      display: flex
      margin-bottom: 2rem
      flex: 1
    &__side-avatar
      background-image: url('http://i.stack.imgur.com/Dj7eP.jpg')
      width: 100px
      height: 100px
      background-size: cover
      background-position: top center
      border-radius: 50%
    &__side-detail
      flex: 1
      color: #DDDDDD
      text-align: left
      margin-left: 26px
    & h1
      margin-top: 10px
      margin-bottom: 18px
    &__side-options
      display: flex
      flex-direction: column
      justify-content: space-between
      align-items: start
      flex: 2
      font-size: 2.5rem
    &__side-option
      display: flex
      color: #DDDDDD
      & i
        color: #DDDDDD !important
      & span
        margin-left: 21px
      &:hover
        color: #19B3D8
        & i
          color: #19B3D8 !important
    &__side-logout
      display: flex
      flex: 1
      align-items: flex-end
      font-size: 2.5rem
      color: #DDDDDD
      margin-bottom: 1rem
      & span
        margin-left: 21px
      & i
        color: #DDDDDD !important
      &:hover
        color: #19B3D8
        & i
          color: #19B3D8 !important
    &__main
      max-width: 70%
      background-color: #F3F3F3
      flex: 8
      display: flex
      align-items: center
      justify-content: space-between
      font-size: 100px
      padding-bottom: 1rem
    &__main-left
      width: 50%
      display: flex
      flex-direction: column
      align-items: center
    &__main-right
      width: 50%
      height: 100%
      display: flex
      flex-direction: column
      align-items: start
      justify-content: flex-start
    &__main-input-wrapper
      background-color: #fff
      width: 100%
      height: 140px
      margin-bottom: 0.5rem
      display: flex
      overflow: hidden
      padding: 15px
      & input
        border-bottom: solid 1px #000
        &:focus
          outline: none
    &__main-input
      width: 90%
    &__main-add
      font-size: 60px
    &__main-timer
      width: 400px
      height: 400px
      border-radius: 50%
      background-color: #12B1BF
      display: flex
      align-items: center
      justify-content: center
    &__main-inner-circle
      width: 350px
      height: 350px
      border-radius: 50%
      background-color: #F3F3F3
      position: relative
    &__main-task
      color: #606060
    &__main-time-display
      color: #606060
      text-align: center
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
    &__main-controls
      display: flex
      width: 80%
      justify-content: space-around
    &__main-task-wrapper
      width: 100%
      height: 100%
      display: flex
      align-items: center
      justify-content: center
      padding: 1rem
      background-color: #FFF
  .task
    width: 80%
    height: 100%
    text-align: justify
    &__list
      margin: 1rem
    &__list-option 
      display: block
      font-size: 1.25rem
      position: relative
      padding-left: 35px
      margin-bottom: 12px
      cursor: pointer
      & input 
        position: absolute
        opacity: 0
        cursor: pointer
        height: 0
        width: 0 
        &:hover + span
          background-color: #ccc
        &:checked + span
          background-color: #12B1BF
        &:checked ~ span.list-checked
          display: block
      & span.list-checked  
          display: none
          position: absolute
          left: 90%
          top: 0
          height: 37px
          width: 37px
          &::after
            position: absolute
            content: ""
            top: 2px
            left: 9px
            width: 10px
            height: 20px
            border: solid #BABABA
            border-width: 0 3px 3px 0
            -webkit-transform: rotate(45deg)
            -ms-transform: rotate(45deg)
            transform: rotate(45deg)
            background-color: #fff
    &__list-check
      position: absolute
      top: 0
      left: 0
      height: 25px
      width: 25px
      background-color: #eee
      border-radius: 50%
</style>
