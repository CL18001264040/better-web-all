import Vue from 'vue';
import Router from 'vue-router';
import TodoApp from '../components/TodoList/TodoApp';
import CommentsApp from '../components/CommentList/CommentsApp';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/todo',
      name: 'TodoApp',
      component: TodoApp
    },
    {
      path: '/comments',
      name: 'CommentsApp',
      component: CommentsApp
    }
  ]
})
