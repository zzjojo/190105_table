<template>
  <div class="hello" >
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"  ></el-tree>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      seen:false,
      data: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      },
        {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      },
        {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        },
          {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      methods:{
        onMouseOver:function () {
          this.seen = true;
        },
        onMouseout:function(){
          this.seen =false;
        }
      }
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
