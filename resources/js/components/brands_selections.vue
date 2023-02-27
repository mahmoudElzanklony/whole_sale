<template>
    <div class="brands-selections">
        <div class="form-group">
            <input class="form-control" name="search" @keyup="filtered"
                   :placeholder="switchWord('search_for_you_best')">
        </div>
        <div class="row">
            <div class="col-6" v-for="(i,index) in brands" :key="index">
                <div class="brand">
                    <input type="checkbox" name="brands[]" :value="i['id']">
                    <span>{{ i['name'] }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SwitchLangWord from "../mixin/SwitchLangWord";
export default {
    name: "brands_selections",
    mixins:[SwitchLangWord],
    props:['data'],
    data:function(){
        return {
            brands:this.data,
        }
    },
    methods:{
      filtered:function(){
        var val = event.target.value;
        let appears =  this.brands.filter(function(e){
          return e.name.indexOf(val) >= 0;
        });
        $('.brand').hide();
        for(let brand of appears){
          document.querySelector('.brand input[value="'+brand['id']+'"]').parentElement.style.display = 'block';
        }
      }
    }
}
</script>

<style lang="scss" scoped>
.ar{
    .brands-selections{
        .brand{
            input{
                margin-left:5px;
            }
        }
    }
}
.en{
    .brands-selections{
        .brand{
            input{
                margin-right:5px;
            }
        }
    }
}
.brands-selections{
    .brand{
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        input{
            width:20px;
            height: 20px;
        }
        span{
          position: relative;
          top:-2px;
        }
    }
}
</style>
