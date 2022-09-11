<template>
    <div>
        <navbar-component></navbar-component>
        <div class="order_bill">
           <div class="container">
               <h3>
                   <span>{{ keywords.request_info }}</span>
               </h3>
               <table class="mb-3 table table-hover table-striped table-bordered">
                   <tbody>
                       <tr>
                           <td>{{ keywords.total_items }}</td>
                           <td>10</td>
                       </tr>
                       <tr>
                           <td>{{ keywords.total_qty }}</td>
                           <td>500</td>
                       </tr>
                       <tr>
                           <td>{{ keywords.total_goods_value }}</td>
                           <td>1500</td>
                       </tr>
                       <tr>
                           <td>{{  keywords.other_charge }}</td>
                           <td>500</td>
                       </tr>
                       <tr>
                           <td>{{ keywords.total_price }}</td>
                           <td>2000</td>
                       </tr>
                   </tbody>
               </table>

               <div class="payment">
                   <h3>
                       <span>{{ keywords.proceed_payment_with }}</span>
                   </h3>
                   <form>
                       <div class="form-group d-flex align-items-center justify-content-between">
                           <p>
                               <input type="radio" name="payment_type" value="online" v-model="payment_type">
                               <span>{{ keywords.electric_payment }}</span>
                           </p>
                           <p>
                               <input type="radio" name="payment_type" value="bank" v-model="payment_type">
                               <span>{{ keywords.save_two_and_pay_with_bank }}</span>
                           </p>
                       </div>

                       <div class="online" v-if="payment_type == 'online'">
                           <div class="row">
                               <div class="col-md-6 col-12">
                                   <div class="form-group">
                                       <label>{{ keywords.card_no }}</label>
                                       <input class="form-control" name="card_no" required>
                                   </div>
                               </div>
                               <div class="col-md-6 col-12">
                                   <div class="form-group">
                                       <label>{{ keywords.name_on_card }}</label>
                                       <input class="form-control" name="name_on_card" required>
                                   </div>
                               </div>
                               <div class="col-md-6 col-12">
                                   <div class="form-group">
                                       <label>{{ keywords.expire_date }}</label>
                                       <input class="form-control" name="expire_date" required>
                                   </div>
                               </div>
                               <div class="col-md-6 col-12">
                                   <div class="form-group">
                                       <label>{{ keywords.cvv }}</label>
                                       <input class="form-control" name="cvv" required>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div class="bank" v-else-if="payment_type == 'bank'">
                           <p class="alert alert-warning">
                               <span>{{ keywords.you_will_have_discount_bank }}</span>
                               <strong>2%</strong>
                               <span>.{{ keywords.total_price_become }}</span>
                               <strong>400</strong>
                           </p>
                           <p class="alert alert-warning">
                               <span>{{ keywords.bank_account_number_you_should_transfer }}</span>
                               <strong>123123123</strong>
                           </p>
                           <div class="drag-drop-files mb-3">
                               <input type="file" name="bank_info_document"
                                      class="preview-image">
                               <button type="button" class="btn btn-primary">
                                   <span>{{ keywords.upload_bank_transfer_photo }}</span>
                                   <span><i class="ri-add-line"></i></span>
                               </button>
                           </div>
                       </div>
                       <div class="form-group">
                           <input type="submit" class="btn btn-primary" :value="keywords.pay">
                       </div>
                   </form>
               </div>
           </div>
        </div>
        <footer-component></footer-component>
    </div>
</template>

<script>
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
export default {
    name: "checkout",
    components: {FooterComponent, NavbarComponent},
    props:['keywords'],
    data:function (){
        return {
            payment_type:'',
        }
    }
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.order_bill{
    margin-top: 85px;
    h3{
        span{
            border-bottom: 3px solid $blue;
            padding-bottom: 8px;
            margin-bottom: 10px;
            display: inline-block;
        }
    }
    p.alert-warning{
        font-size: $paragraph;
    }
    form{
        div:first-of-type{
            input[type="radio"]{
                width: 20px;
                height: 20px;
                position: relative;
                top: 5px;
                box-shadow: none;
            }
        }
    }
}
table{
    tr{
        td{
            text-align: center;
        }
    }
}
</style>
